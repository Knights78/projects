/* 2nd pr
let con=document.getElementById("container")

let love=document.getElementById("heart")

con.addEventListener("dblclick",function(){
    love.style. transform ='translate(-50%,-50%) scale(1)'
    love.style.color='red'
    setTimeout(function(){
        love.style. transform ='translate(-50%,-50%) scale(0)'
        
    },3000)
})*/

//3rd pr
let elem=document.querySelectorAll(".elem")



// elem1.addEventListener("mousemove",function(dets){
//     elem1img.style.left=dets.x+"px"
//     elem1img.style.top=dets.y+"px"
//     elem1img.style.opacity=1;
// })
elem.forEach(function(val){//in val div is coming to acces its child we write

   console.log(val.childNodes[3])
    val.addEventListener("mouseenter",function(){
      
        val.childNodes[3].style.opacity = 1

   
    })
    val.addEventListener("mouseleave",function(){
        val.childNodes[3].style.opacity=0;
    })
    val.addEventListener("mousemove",function(dets){
        val.childNodes[3].style.left = dets.clientX  + "px";
        val.childNodes[3].style.top = dets.clientY  + "px";
        
    })
})