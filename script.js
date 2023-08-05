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
      document.getElementById("navbar").style.height = "327px";
    }, 1890);
  } else {
    document.getElementById("navbar").style.animation =
      "navbar-reverse-animation 1.9s ease";
    items.style.animation = "reverse-animation 2s ease";
    setTimeout(() => {
      items.style.display = "none";
      document.getElementById("navbar").style.height = "80px";
      document.getElementById("navbar").style.justifyContent = "center";
    }, 1890);
  }
};

// Router
const Router = (ID_ARR)=>{
  ID_ARR.forEach((class_)=>{
    document.querySelectorAll(`${class_}`)[0].style.display = 'none'
  })
  document.querySelectorAll(`${ID_ARR[0]}`)[0].style.display = 'flex'
  if(document.querySelectorAll('.home')[0].style.display ==='flex'){
    restartVideo();
    resetAnimation();
  }
  if(document.querySelectorAll('.About')[0].style.display ==='flex'){
    let card = document.querySelectorAll('.card')
    card.forEach(element => {
      element.classList.add('animate__bounceIn')
      console.log(element)
    });

    setTimeout(() => {
      card.forEach(element => {
        console.log(element)
        element.classList.remove('animate__bounceIn')
      });
    }, 1000);
  }
}


const change_page = (link)=>{
    window.location.href = `${link}`;
}

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
      let cardElement = document.querySelector('.card');
      cardElement.classList.add('animate__bouneIn');
    });

    document.addEventListener("DOMContentLoaded", function () {
      const classNamesArray = ['video-animation','profile','container','contact-details','gradient-border','phone-intro'];

      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.style.opacity = "1";
              entry.target.style.transform = "translateX(0)";
              entry.target.style.transform = "translateZ(0)";
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