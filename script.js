
// The hambergur viewitems function
const ViewItems = () => {
  let items = document.getElementById("items");
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
    console.log("hello");
    setTimeout(() => {
      document.getElementById("navbar").style.height = "327px";
    }, 1890);
  } else {
    document.getElementById("navbar").style.animation =
      "navbar-reverse-animation 1.9s ease";
    items.style.animation = "reverse-animation 2s ease";

    console.log(items);
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
  document.querySelectorAll(`${ID_ARR[0]}`)[0].style.display = 'grid'
}


const change_page = (link)=>{
    window.location.href = `${link}`;
}

// Typewriter Effect
const h1Element = document.getElementById('typing-text');
let i = 0
function setTypewriterAnimation() {
    arr = ['Data Scientist','ML Engineer','Programmer','Data Analyst']
    h1Element.textContent = `I am a ${arr[i]}`
    if(i===4){
        i=0
    }
    else{
        i+=1
    }
    h1Element.classList.add('typing-animation');
    h1Element.classList.remove('remove-typing-animation');
}

// Function to remove the animation classes
function removeTypewriterAnimation() {
    const h1Element = document.getElementById('typing-text');
    h1Element.classList.remove('typing-animation');
    h1Element.classList.add('remove-typing-animation');
}

// Initial setup with animation
setTypewriterAnimation();
const timepass = ()=>{}

// Run the animation every 3 seconds
setInterval(function() {
  setTimeout(timepass,1000)
    removeTypewriterAnimation();
    setTimeout(setTypewriterAnimation, 1000); // Delay before re-adding the animation
}, 7500);