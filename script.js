
// The hambergur viewitems function
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
  document.querySelectorAll(`${ID_ARR[0]}`)[0].style.display = 'grid'
  if(document.getElementById('Home').style.display ===''){
    restartVideo();
    resetAnimation();
  }
}


const change_page = (link)=>{
    window.location.href = `${link}`;
}

// const delay = ms => new Promise(res => setTimeout(res, ms));
let i= 0
arr = ['Data Scientist',"Web Developer","Programmer","ML Engineer"]
const change_text = ()=>{
  document.getElementById('typing-text').textContent = `I am a ${arr[i]} `
  // document.getElementById('typing-text').classList.add('wait')
  if (i===3){
    i=-1
  }
  i+=1
}
setInterval(() => {
  change_text()
  // resetVideo()
  // resetAnimation()
}, 7000);

const video = document.querySelectorAll('video')[0];

// Call the resetAnimation function every 8 seconds
setInterval(restartVideo, 7000);
setInterval(resetAnimation, 7000);
function restartVideo() {
  video.currentTime = 0; // Reset video to the start
}

const element = document.getElementById('typing-text');
function resetAnimation() {
  element.style.display = 'none'; 
  setTimeout(() => {
    element.style.display = 'flex'; 
  }, 500);
}