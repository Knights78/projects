let arr=[
    {
        dp:"https://images.unsplash.com/photo-1591014141178-02091240f1c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG11bWJhaXxlbnwwfHwwfHx8MA%3D%3D",story:"https://images.unsplash.com/photo-1567359485688-f39861174e25?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG11bWJhaXxlbnwwfHwwfHx8MA%3D%3D"
    },

    {
        dp:"https://images.unsplash.com/photo-1552133457-ce1d2d33cdfb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bXVtYmFpfGVufDB8fDB8fHww",story:"https://media.istockphoto.com/id/1307527527/photo/city-traffic-in-india.webp?b=1&s=170667a&w=0&k=20&c=GLrHruHUB6aGcnwEK2DqhUAjCLa-AQRMV0G8n_6SgaI="
    },

     {
        dp:"https://images.unsplash.com/photo-1598434192043-71111c1b3f41?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG11bWJhaXxlbnwwfHwwfHx8MA%3D%3D",story:"https://images.unsplash.com/photo-1445264918150-66a2371142a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG11bWJhaSUyMHNreWxpbmV8ZW58MHx8MHx8fDA%3D"
    },

     {
        dp:"https://plus.unsplash.com/premium_photo-1697730489433-4a5fe8a77f96?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG11bWJhaSUyMHNreWxpbmV8ZW58MHx8MHx8fDA%3D",story:"https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bG9uZG9ufGVufDB8fDB8fHww"
    },

]
var clutter=''
arr.forEach(function(elem,idx){
    clutter+=`<div class="story">
    <img id="${idx}" src="${elem.dp}" alt="">
  </div>`  
})
document.querySelector("#storiyan").innerHTML=clutter

document.querySelector("#storiyan").addEventListener("click",function(dets){
    document.querySelector("#fullscreen").style.display="block"
    document.querySelector("#fullscreen").style.backgroundImage= `url(${arr[dets.target.id].story})`

    setTimeout(function(){
        document.querySelector("#fullscreen").style.display="none"
    },3000)
   
})