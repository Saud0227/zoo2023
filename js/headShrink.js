const scrollTrigger = 100;

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > scrollTrigger || document.documentElement.scrollTop > scrollTrigger) {
    document.getElementById("header").style.fontSize = "1.5em";

    document.getElementById("header").style.height = "6vh";
    document.getElementById("header").style.borderRadius = "0 0 10px 10px";
    document.getElementById("header").style.width = "95%";
    document.getElementById("header").style.left = "2.5%";
    // document.getElementById("header").style.top = "3%";

    // document.getElementById("nav").style.width = "225px";



  } else {
    document.getElementById("header").style.fontSize = "2em";

    document.getElementById("header").style.height = "10vh";
    document.getElementById("header").style.borderRadius = "0";
    document.getElementById("header").style.width = "100%";
    document.getElementById("header").style.left = "0";
    document.getElementById("header").style.top = "0";

    // document.getElementById("nav").style.width = "450px";


    // top: 3%;
    // left: 5%;
    // width: 90%;

  }
}



// The function actually applying the offset
function offsetAnchor() {
  if(location.hash.length !== 0) {
      window.scrollTo(window.scrollX, window.scrollY - 100);
  }
}

// This will capture hash changes while on the page
window.addEventListener("hashchange", offsetAnchor);
// window.setTimeout(offsetAnchor, 1); // The delay of 1 is arbitrary and may not always work right (although it did in my testing).
