console.log("hello")
Shery.mouseFollower();
Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle(".hvr",{videos:["./1.mp4","./2.mp4"]})
gsap.registerPlugin(ScrollTrigger)
gsap.to(".fleftelem",{
    scrollTrigger:{
        trigger:"#fimages",//kiske upar ye effect lgana hai uska id ka naam hai
        pin: true,//true kyuki humko effect dena hai(basically images ko rok dega )
        start:"top top",//start kaha se krna hai top top se means jab uska (div ka top) desktop ke top pe a jaye 
        end:"bottom bottom",//
        endTrigger:".last",//bottom kise manna hai wo yaha se pta chal arha hai
        scrub: 1


    },
    y:"-300%",
    ease: Power1
})

