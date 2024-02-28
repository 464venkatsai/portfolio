const ViewItems = () => {
  let items = document.getElementById("items");
  document.getElementById('typing-text').style.animation = `I am a ${arr[i]} `
  if (items.style.display != "grid") {
    items.style.display = "grid";
    items.style.animation = "animation 2s ease";
    items.style.width = "100%";
    items.style.gridTemplateColumns = "repeat(1,70%)";
    document.getElementById("navbar").style.flexDirection = "column";
    items.style.position = "relative";
    document.getElementById("navbar").style.animation =
      "navbar-animation 1.9s ease";
    document.querySelectorAll(".list-item").forEach((item) => {
      item.style.display = "flex";
      item.style.width = "100%";
      item.style.alignItems = "center";
      item.style.justifyContent = "center";
    });
    items.style.justifyContent = "center";
    items.style.rowGap = "1rem";
    items.style.paddingTop = ".5rem";
    items.style.paddingBottom = "2rem";
    items.style.textAlign = "center";
    setTimeout(() => {
      document.getElementById('navbar').style.height = '327px'
    }, 1890);
  } else {
    document.getElementById('navbar').style.animation = 'navbar-reverse-animation 2.1s ease'
    items.style.animation = "reverse-animation 2s ease";
    setTimeout(() => {
      items.style.display = "none";
      document.getElementById("navbar").style.height = "80px";
      document.getElementById("navbar").style.justifyContent = "center";
    }, 2100);
  }
};
let view_blog = false
let inblog = false
// Router
const Router = (targetClass)=>{
  if(targetClass==='Blog'&& view_blog===false && inblog==false){
    // Home View To Blog View (Short Note)
    set_property(['.body'],property_names=['backgroundColor'],property_values=['white'])
    set_display(['.home','.About','.contact'],display_type='none',byclass=true)
    set_display(['.blog-container'],display_type='flex',byclass=true)
    set_display(['.Blog'],display_type='Block',byclass=true)
    setTimeout(() => {
      inblog=true
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 100);
  }else if(inblog===true && targetClass!='Blog'){
    // Reading Blog View To Home, About, Contact
    set_property(['.body'],property_names=['backgroundColor'],property_values=['black'])
    set_display([`.${targetClass}`,'.full-blogs','.blog-container','.Blog'],display_type='none')
    set_display(['.home','.About','.contact'],display_type='flex')
    document.querySelector(`.${targetClass}`).scrollIntoView({ behavior: 'smooth', block: 'start' })
    view_blog=false
    inblog = false
  }
  else if(targetClass!='Blog' && view_blog===true){
    // Home View To Blog Read View To Other Home, About, Contact 
    set_property(['.body'],property_names=['backgroundColor'],property_values=['black'])
    set_display([`.${targetClass}`,'.full-blogs','.blog-container','.Blog'],display_type='none')
    set_display(['.home','.About','.contact'],display_type='flex')
    document.querySelector(`.${targetClass}`).scrollIntoView({ behavior: 'smooth', block: 'start' })
    view_blog=false
    inblog = false
  }
  else if (targetClass==='Blog' && view_blog===true){
    // In Blog And Reading Blog View To Shote Note View
    set_display(['.blog-container'],display_type='flex')
      set_display(['.Blog'],display_type='block')
      set_display(['.home','.About','.contact'],display_type='none')
      window.scrollTo({ top: 0, behavior: 'smooth' })
      blogs_list = true
      inblog=true
      view_blog=false
    }else{
      // MyAboutSection To Home, About, Contact
      console.log(5)
      set_display(['.home','.About','.contact',],display_type='flex')
      document.querySelector(`.${targetClass}`).scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    set_display(['.MyAboutSection'],display_type='none')
    document.body.style.backgroundColor="black"
}

document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.list-item');
  const hamburger = document.querySelector('.hamburger');
  const items = document.getElementById('items');
  for (const link of navLinks) {
    link.addEventListener('click', smoothScroll);
  }
  hamburger.addEventListener('click', toggleMenu);
  
  // Smooth scrolling function
  function smoothScroll(e) {
    e.preventDefault();
    const targetClass = this.id; 
    const targetSection = document.querySelector(`.${targetClass}`);
    if (targetSection) {
      if(targetClass!='Blog'){
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        closeMenu();}
      }
    }
    function toggleMenu() {
      items.classList.toggle('show');
  }
  function closeMenu() {
    items.classList.remove('show');
  }
});
const blog_router = (blog_name)=>{  
  change_page(blog_name) 
}
  const change_page = (blog_name) => {
    document.querySelector('.body').style.backgroundColor = 'white';
    set_display(['.home','.About','.contact','.blog-container'],display_type='none')
    document.querySelectorAll(".project-blog").forEach(element => {
        element.style.display = "none"
    });
    set_display(['.full-blogs',`.${blog_name}`],display_type='flex')
    set_display(['.Blog',],display_type='block')
    window.scrollTo({ top: 0, behavior: 'smooth' });
    view_blog = true;
};

// const delay = ms => new Promise(res => setTimeout(res, ms));
let i= 0
arr = ['Data Scientist and Analyst',"Front - End Web Developer","Python Programmer","Machine Learning Engineer"]
const change_text = ()=>{
  document.getElementById('typing-text').textContent = `${arr[i]} `
  // document.getElementById('typing-text').classList.add('wait')
  if (i===3){
    i=-1
  }
  i+=1
}
setInterval(() => {
  change_text()
}, 7010);

const video = document.querySelectorAll('video')[0];

// Call the resetAnimation function every 8 seconds
setInterval(restartVideo, 7000);
setInterval(resetAnimation, 7000);
function restartVideo() {
  video.currentTime = 0; // Reset video to the start
}

const element = document.getElementById('typing-text');
function resetAnimation() {
  element.style.display = 'hidden'; 
  element.style.animationPlayState = 'paused';

  // Set the animation to the starting position
  element.style.animation = 'none';
  element.offsetHeight; // Force a reflow to reset the animation

  // Restart the animation
  element.style.animation = 'typing-animation 7s infinite';
  element.style.animationPlayState = 'running';
  setTimeout(() => {
    element.style.display = 'flex'; 
  }, 500);
}

const image = document.querySelector('.hand-shake');
    function pauseAnimation() {
      image.style.animationPlayState = 'paused';
      setTimeout(() => {
        image.style.animationPlayState = 'running';
      }, 800);
    }

    image.addEventListener('animationiteration', pauseAnimation);

    
    document.addEventListener("DOMContentLoaded", function () {
      const classNamesArray = ['video-animation','profile','contact-details','card','gradient-border','phone-intro'];
      
      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              if(entry.target.classList.value==='card'){
                entry.target.style.animation = 'zoomIn 2s forwards'
              }
              else{
                entry.target.style.transform = "translateX(0)";
                entry.target.style.transform = "translateZ(0)";}
              entry.target.style.opacity = "1";
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 }
      );

      classNamesArray.forEach((className) => {
        const elements = document.querySelectorAll(`.${className}`);
        elements.forEach((element) => {
          observer.observe(element);
        });
      });
    });

    const copy_code = (index)=>{
      navigator.clipboard.writeText(document.querySelectorAll('.code')[index].textContent)
  }
    const copy_command = (index)=>{
      navigator.clipboard.writeText(document.querySelectorAll('.command')[index].textContent)
  }

  const set_display = (class_or_id=[],display_type='flex',byclass=true)=>{
      if(byclass===true){
      class_or_id.forEach(element => {
        document.querySelector(element).style.display= display_type
      });
    }else{
      class_or_id.forEach(element => {
        document.getElementById(element).style.display= display_type
      });
    }
  }
  const set_property = (class_or_id=[],property_name=[],property_values=[],byclass=true)=>{
      let index = 0
      if(byclass===true){
      class_or_id.forEach(element => {
        index = index+1
        document.querySelector(element).style[property_name[i]]= property_values[i]
      });
    }else{
      class_or_id.forEach(element => {
        document.getElementById(element).style[property_name[i]]= property_values[i]
      });
    }
  }


// Creating the Items Dynamically here

  // Creating Cards Function
  function addCard(title, description, imageUrl, onClickAction,parentClass="MyAboutSection") {

    let card = document.createElement("div");
    card.className = "card";

    let img = document.createElement("img");
    img.src = imageUrl;
    img.alt = "card-image";
    img.className = "card-image";

    let project = document.createElement("div");
    project.className = "project";

    let h4 = document.createElement("h4");
    h4.className = "project-title";
    h4.textContent = title;

    let p = document.createElement("p");
    p.className = "project-description";
    p.textContent = description;

    let button = document.createElement("button");
    button.className = "button";
    button.textContent = onClickAction.startsWith('http') ? "View Code" : "View Blog";
    button.onclick = function() {
      if (onClickAction.startsWith('http')) {
        window.open(onClickAction, '_blank');
      } else {
        change_page(onClickAction);
      }
    };

    project.appendChild(h4);
    project.appendChild(p);
    project.appendChild(button);

    card.appendChild(img);
    card.appendChild(project);

    document.querySelector(`${parentClass}`).appendChild(card);
  }

  // Creating Short-Note For Blogs Here
  function addShortNote(title, author, date, readTime, content, onClickAction) {

    let shortNote = document.createElement("section");
    shortNote.className = "short-note";

    let h4 = document.createElement("h4");
    h4.textContent = title;

    let blogDetails = document.createElement("div");
    blogDetails.className = "blog-details";

    let profilePic = document.createElement("img");
    profilePic.src = "./static/Home-images/profile_pic.png";
    profilePic.alt = "profile_pic";
    profilePic.className = "blog-profile";

    let pAuthor = document.createElement("p");
    pAuthor.textContent = author;

    let bDate = document.createElement("b");
    bDate.textContent = date;

    let bReadTime = document.createElement("b");
    bReadTime.innerHTML = `<img src="./static/Blog-images/book.png" alt="book" class="blog-book"> ${readTime} min read`;

    blogDetails.appendChild(profilePic);
    blogDetails.appendChild(pAuthor);
    blogDetails.appendChild(bDate);
    blogDetails.appendChild(bReadTime);

    let blogShortNote = document.createElement("div");
    blogShortNote.className = "blog-short-note";
    blogShortNote.textContent = content;

    let btnReadMore = document.createElement("button");
    btnReadMore.className = "blog-btn";
    btnReadMore.textContent = "Read More";
    btnReadMore.onclick = function() {
      blog_router(onClickAction);
    };

    shortNote.appendChild(h4);
    shortNote.appendChild(blogDetails);
    shortNote.appendChild(blogShortNote);
    shortNote.appendChild(btnReadMore);

    document.querySelector(".blog-container").appendChild(shortNote);
  }

// Adding the elements Dynamically 

  // Cards Section 
  addCard(
    title = "Hand Gesture Recognition",
    description = "This project involves computer vision concepts by which we will be achieving the control of keyboard with hand signs",
    imageUrl = "./static/project-images/gesture recogination.png",
    onClickAction = "Blog-gesture",
    parentClass=".container"
  );

  addCard(
    title = "Real-time Face Recognition",
    description = "This project involves computer vision concepts by which we will be recognize faces and we can also customize it based on our requirements",
    imageUrl = "./static/project-images/face recogination.png",
    onClickAction = "Blog-face-recognition",
    parentClass=".container"
  );

  addCard(
    title = "Expense Tracker",
    description = "Simplify budgeting, track expenses, and achieve financial goals effortlessly with this intuitive tracker.",
    imageUrl = "./static/project-images/expensesTracker.png",
    onClickAction = "Blog-ExpenseTracker",
    parentClass=".container"
  );

  // Short Note Section
  addShortNote(
    title = "Expense Tracker Android",
    author = "venkat sai",
    date = "February, 2024",
    readTime = 5,
    content = `Our Expense Tracker app offers a simple and efficient solution for managing your finances on the go. With intuitive design
             and user-friendly features, tracking expenses has never been easier. From categorizing expenses to generating insightful reports, 
             our app empowers users to take control of their spending habits and make informed financial decisions. Say goodbye to manual 
             record-keeping and hello to effortless expense management with our Expense Tracker app.`,
    onClickAction = "Blog-ExpenseTracker"
  );
  addShortNote(
    title = "Face Recognition using OpenCV and Face Recognition Library",
    author = "venkat sai",
    date = "August 30, 2023",
    readTime = 4,
    content = `This Python code demonstrates a real-time face detection and recognition system using OpenCV and Face Recognition libraries. 
      By analyzing webcam video frames, the program identifies faces and matches them with a reference image. Detected faces are highlighted 
      with rectangles, and if a match is found, the person's name is displayed. If not recognized, 'Unknown' is shown. This project showcases
      the power of computer vision for real-time applications, with potential uses in security, access control, and personalized interactions.`,
    onClickAction = "Blog-face-recognition"
  );

  addShortNote(
    title = "Hand Gesture Recognition using MediaPipe and OpenCV",
    author = "venkat sai",
    date = "August 23, 2023",
    readTime = 5,
    content = `This Python script uses mediapipe and cv2 to track hand gestures through webcam input. It recognizes closed fist and open hand gestures,
      simulating left and right arrow key presses, respectively. The script offers real-time visual feedback by highlighting landmarks on the
      webcam feed. User interaction continues until "q" is pressed, demonstrating a basic gesture-based keyboard control concept.`,
    onClickAction = "Blog-gesture"
  );

  
  // Function to create and add a new card dynamically
  function addAboutCard(cardTitle,languageImgLocation,language,imgLocation,date,description,codeLink) {
    
        let container = document.querySelector('.cardContainer');
        
        let newCard = document.createElement('div');
        newCard.classList.add('MyCard');
        
        newCard.innerHTML = `
              <img src="${imgLocation}" alt="Image">
              <div>
              <span>
              <img src="${languageImgLocation}" style="border-radius: 50px;" alt="profile-img">
              <span>${language}</span>
              </span>
              <span>
              <img src="./static/Blog-images/calendar.png" alt="Calender-Image">
                  <span>${date}</span>
              </span>
              </div>
              <h3>${cardTitle}</h3>
              <p>${description}</p>
              <a href="${codeLink}" target="_blank"><button>View Code</button></a>
              `;
              container.appendChild(newCard);
        }
        
        addAboutCard(
          cardTitle = "Expense Tracker App",
          languageImgLocation = "./static/project-images/java.png",
          language = "Java",
          imgLocation = "./static/project-images/expensesTracker.png",
          date = "14 Feb, 2024",
          description= "Simplify budgeting, track expenses, and achieve financial goals effortlessly with this intuitive tracker.",
          codeLink = "https://github.com/464venkatsai/ExpenesesTrackerApp"
          )
        addAboutCard(
            cardTitle = "Gesture Recogination",
            languageImgLocation = "./static/project-images/python.png",
            language = "python",
            imgLocation = "./static/project-images/gesture recogination.png",
            date = "30 Aug, 2023",
            description= "Revolutionize interactions with real-time hand gesture recognition for enhanced control and accessibility",
            codeLink = "https://github.com/464venkatsai/gesture_recogination_and_keyboard_intergration"
            )
          addAboutCard(
            cardTitle = "Face Recogination",
            languageImgLocation = "./static/project-images/python.png",
            language = "python",
            imgLocation = "./static/project-images/face recogination.png",
            date = "23 Aug, 2023",
            description= " Secure access and personalize experiences with advanced facial recognition technology for seamless authentication.",
            codeLink = "https://github.com/464venkatsai/face_recognition_using_python"
            )
    // Creating A New About Section To Show All Project Cards
    const showAboutSection = ()=>{
        set_display(['.home', '.About', '.contact'], display_type = 'none');
        set_display(['.MyAboutSection'], display_type = 'block');
        document.querySelector(`.MyAboutSection h1`).scrollIntoView({ behavior: 'smooth', block: 'end' });
        document.body.style.backgroundColor = "#e6e7ee";
    }

    function addContributorCard(name, jobTitle, profileImageSrc, contributorDescription, socialMediaLinks) {
      console.log(socialMediaLinks)
      let contributorDiv = document.createElement('div');
      contributorDiv.classList.add('contributor');
  
      let imgDiv = document.createElement('div');
      imgDiv.classList.add('contributor-img');
  
      let img = document.createElement('img');
      img.setAttribute('src', profileImageSrc);
      img.setAttribute('alt', '');
  
      imgDiv.appendChild(img);
  
      let cardBodySection = document.createElement('section');
      cardBodySection.classList.add('cardBody');
  
      let nameHeading = document.createElement('h3');
      nameHeading.textContent = name;
  
      let jobTitleHeading = document.createElement('h6');
      jobTitleHeading.textContent = jobTitle;
  
      let socialMediaDiv = document.createElement('div');
      console.log(socialMediaLinks)
      socialMediaLinks.forEach(function(link) {
          let socialMediaImg = document.createElement('img');
          socialMediaImg.setAttribute('src', link.imageSrc);
          socialMediaImg.setAttribute('alt', link.altText);
          socialMediaDiv.appendChild(socialMediaImg);
      });
      
  
      let descriptionParagraph = document.createElement('p');
      descriptionParagraph.textContent = contributorDescription;

      cardBodySection.appendChild(nameHeading);
      cardBodySection.appendChild(jobTitleHeading);
      cardBodySection.appendChild(socialMediaDiv);
      cardBodySection.appendChild(descriptionParagraph);
  
      contributorDiv.appendChild(imgDiv);
      contributorDiv.appendChild(cardBodySection);
  
      let parentElement = document.querySelector('.Contributors-Container');
      parentElement.appendChild(contributorDiv);
  }
  var socialMediaLinks = [
    { imageSrc: 'static/Contact-Images/github.png', altText: 'Github' },
    { imageSrc: 'static/Contact-Images/linkedin.png', altText: 'Linked In' },
    { imageSrc: 'static/Contact-Images/instagram.png', altText: 'Instagram' },
    { imageSrc: 'static/Contact-Images/facebook.png', altText: 'Facebook' }
];
  var contributorDescription = "UI Designer, java springboot, python developer, FrontEnd Developer, Data Analysit and Data Scientist "
addContributorCard('Bharath K', 'UI Designer', 'static/Blog-images/bharth.jpg',contributorDescription,socialMediaLinks);