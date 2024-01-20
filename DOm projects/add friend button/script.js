
console.log("helo")
let isstatus=document.getElementById("stranger")
let remove=document.getElementById("remove")
//console.log(isstatus)
let flag=1
let add=document.querySelector("#add")
add.addEventListener("click",function(){
    if(flag==1){
     isstatus.innerHTML="friends"
     isstatus.style.color="green"
     flag=0;
    }
    else{
        isstatus.innerHTML="STRANGER"
        isstatus.style.color="red"
        flag=1
    }

})
/*remove.addEventListener("click",function(){
    isstatus.innerHTML="STRANGER"
    isstatus.style.color="red"

})*/