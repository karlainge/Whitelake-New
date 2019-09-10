/* The navigation to be added responsiveness to the website */
function mynavigation() {
  let x = document.getElementById("myNavigation");
  if (x.className === "navigation") {
    x.className += " responsive";
  } else {
    x.className = "navigation";
  }
}
/* End of navigation */
//+++++++++++++++++++++++++++//
/* To create the accordion affect for the navigation*/
let accordions = document.getElementsByClassName("accordion");
for (let i = 0; i < accordions.length; i++) {
  accordions[i].onclick = function() {
    this.classList.toggle('open');
    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      /* The following code is to helo with the open and closing */
      content.style.maxHeight = null;
    } else {
      /* accordion to be closed */
      content.style.maxHeight = content.scrollHeight + "px";
    }
  }
}
/* End of the affect for the accordion */
//+++++++++++++++++++++++++++//
/* To create the button to take back to the top of the page */
window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}
/* User to click on button for the top */
function topbtn() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//++++++++++++++++++++++//
