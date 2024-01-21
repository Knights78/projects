const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
const mouse=document.getElementById("mincircle")
function circle(){
    window.addEventListener("mousemove",function(dets){
        mouse.style.transform=`translate(${dets.x}px,${dets.y}px)`
        // mouse.style.top=dets.y+"px"
    })
}
circle();

function firstpageanim(){
     var t1=gsap.timeline() //or we can directly write (gsap.from )

    t1.from("#nav",{
        y:-10,
        opacity:0,
        ease:Expo,
        duration:1
    })
    .to(".boundingelem",{
        y:0,
        duration:1.5,
        stagger:0.2,
        ease:Expo.easeInOut
    })
    .from("#homefooter",{
        y:-20,
        duration:1.2,
        opacity:0,
        ease:Expo.easeInOut,
    })
}
// firstpageanim()

// document.querySelectorAll(".elem").forEach(function(element){
// //    var diffrot
// //    var rotate=0
//     element.addEventListener("mousemove",function(dets){
//         var diff=dets.y - element.getBoundingClientRect().top//for calculating the the diffrence of height from top of the desktop 
//         // diffrot=dets.x-rotate
//         // rotate=dets.x
//        gsap.to(element.querySelector("img"),{
//         opacity:1,
//         ease:Power1,
//         top:diff,
//         left:dets.x
       
//        })
//     })

// })
document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;
  
    elem.addEventListener("mouseleave", function (dets) {
      gsap.to(elem.querySelector("img"), {
        opacity: 0,
        ease: Power3,
        duration: 0.5,
      });
    });
  
    elem.addEventListener("mousemove", function (dets) {
      var diff = dets.clientY - elem.getBoundingClientRect().top;
      diffrot = dets.clientX - rotate;
      rotate = dets.clientX;
      gsap.to(elem.querySelector("img"), {
        opacity: 1,
        ease: Power3,
        top: diff,
        left: dets.clientX,
        rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
      });
    });
  });