const ratio = .2;
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio // dès que 40% du titre est visible, on déclenche l'animation fade in
  }
  
  const fadeIn = function (entries, observer) {
    entries.forEach(function (entry) {
        if(entry.intersectionRatio > ratio) {
              entry.target.classList.add('visibl');
              observer.unobserve(entry.target);
        } 
    }) 
}
  
const fadeIne = function (entries, observer) {
  entries.forEach(function (entry) {
      if(entry.intersectionRatio > ratio) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
      } 
  }) 
}
const fadetop = function (entries, observer) {
  entries.forEach(function (entry) {
      if(entry.intersectionRatio > ratio) {
            entry.target.classList.add('visibltop');
            observer.unobserve(entry.target);
      } 
  }) 
}

const fadetop1 = function (entries, observer) {
  entries.forEach(function (entry) {
      if(entry.intersectionRatio > ratio) {
            entry.target.classList.add('visibltop1');
            observer.unobserve(entry.target);
      } 
  }) 
}
const observera = new IntersectionObserver(fadetop1, options);
  document.querySelectorAll('.fadtop1').forEach(function(r) {
    observera.observe(r);
  });
  const observer = new IntersectionObserver(fadeIn, options);
  document.querySelectorAll('.fad').forEach(function(r) {
    observer.observe(r);
  });
  const observere = new IntersectionObserver(fadeIne, options);
  document.querySelectorAll('.fad1').forEach(function(r) {
    observere.observe(r);
  });
  const observertop = new IntersectionObserver(fadetop, options);
  document.querySelectorAll('.fad2').forEach(function(r) {
    observertop.observe(r);
  });
  //effet fondu sur tous les contenus du site
  
  const fonduOpacity = function (entries, observer2) {
      entries.forEach(function (entry) {
          if(entry.intersectionRatio > ratio) {
                entry.target.classList.add('fondu-visible');
                observer2.unobserve(entry.target);
          } 
      }) 
  }

  const observer2 = new IntersectionObserver(fonduOpacity, options);
  document.querySelectorAll('.fondu').forEach(function(r) {
    observer2.observe(r);
  });

  const fonduOpacity1 = function (entries, observer1) {
    entries.forEach(function (entry) {
        if(entry.intersectionRatio > ratio) {
              entry.target.classList.add('fondu-visible1');
              observer1.unobserve(entry.target);
        } 
    }) 
}

const observer1 = new IntersectionObserver(fonduOpacity1, options);
document.querySelectorAll('.fondu1').forEach(function(r) {
  observer1.observe(r);
});

  //effet zoom à l'aparition des images

//   const zoomImage = function (entries, observer3) {
//     entries.forEach(function (entry) {
//         if(entry.intersectionRatio > ratio) {
//               entry.target.classList.add('zoom-visible');
//               observer3.unobserve(entry.target);
//         } 
//     }) 
// }

// const observer3 = new IntersectionObserver(zoomImage, options);
// document.querySelectorAll('.zoom').forEach(function(r) {
//   observer3.observe(r);
// });
// survol
var nav_underline=document.querySelectorAll("header nav a span");
var nav_link=document.querySelectorAll("header nav a");
for (let i = 0; i < nav_link.length; i=i+1) {
    nav_link[i].addEventListener("mouseover",(e)=>{
        nav_underline[i].style.width="100%";
    }); 
    nav_link[i].addEventListener("mouseout",(e)=>{
        if(e.target.classList.contains("active")==false)nav_underline[i].style.width="0";
           });
}


        var elemScroll = document.querySelector(".scroll1");
          var elemScroll2 = document.querySelectorAll(".scroll2");
          window.addEventListener("scroll",()=>{
          const {scrollTop} = document.documentElement;
            if( scrollTop>480){
              console.log(scrollTop)
              
// survol
var nav_underline=document.querySelectorAll("header nav a span");
var nav_link=document.querySelectorAll("header nav a");
for (let i = 0; i < nav_link.length; i=i+1) {
    nav_link[i].addEventListener("mouseover",(e)=>{
        nav_underline[i].style.width="100%";
        nav_underline[i].style.background='#fff';
    }); 
    nav_link[i].addEventListener("mouseout",(e)=>{
        if(e.target.classList.contains("active")==false)nav_underline[i].style.width="0";
           });
}
              elemScroll.style.background = '#0E7490';
              elemScroll.style.transition = '.5s'
              elemScroll.classList.add('headerscroll');
              for (let i = 0; i < elemScroll2.length; i++) {
                elemScroll2[i].classList.add('headerscroll2')
              }
            }
            else{
              
// survol

var nav_underline=document.querySelectorAll("header nav a span");
var nav_link=document.querySelectorAll("header nav a");
function underlin(){
for (let i = 0; i < nav_link.length; i=i+1) {
    nav_link[i].addEventListener("mouseover",(e)=>{
        nav_underline[i].style.width="100%";
        nav_underline[i].style.background='rgb(22, 78, 99)';
    }); 
    nav_link[i].addEventListener("mouseout",(e)=>{
        if(e.target.classList.contains("active")==false)nav_underline[i].style.width="0";
           });
}
}
window.onload= underlin();
              elemScroll.style.background = 'rgb(248, 247, 247)'
              
              for (let i = 0; i < elemScroll2.length; i++) {
                elemScroll2[i].classList.remove('headerscroll2')
              }
              elemScroll.classList.remove('headerscroll');
            }
  //   if(scrollTop>1700 && scrollTop<=2235)
  //     elemScroll2.style.top=scrollTop+"px";
  //     // console.log(scrollTop)
  });
  function zoom_image(){
    const textes = document.querySelectorAll(".textes");
    const imgs = document.querySelectorAll(".imgs");
    const card_body = document.querySelectorAll(".card_unique");
    const card_block = document.querySelectorAll(".card_block")
    for (let i = 0; i < card_body.length; i++) {
      card_block[i].addEventListener("mouseover", () => {
          card_block[i].style.transform = "scale(1.1)";
          card_block[i].style.transition = ".5s";
          card_block[i].style.cursor = "pointer";
          card_block[i].style.boxShadow = "0 2px 5px rgb(22, 78, 99)"
      });

      card_block[i].addEventListener("mouseout", () => {
          card_block[i].style.transform = "scale(1.0)";
          card_block[i].style.transition = ".5s";
          card_block[i].style.boxShadow = "none"

      });

  }
  }
  zoom_image();


  // open and close side bar

  var open_btn=document.querySelector("#open-btn");
  var close_btn=document.querySelector("#close-btn");
  open_btn.addEventListener("click",function () {
    document.querySelector(".nav-icons").style.height="50%"
    close_btn.style.display="block"
  });


  close_btn.addEventListener("click",function () {
    document.querySelector(".nav-icons").style.height="0%"
    close_btn.style.display="none"
  });