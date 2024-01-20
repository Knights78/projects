function makebubble()
{
    var clutter="";
    var x;
    for(var i=1 ;i<=70;i++)
   {    x=Math.floor(Math.random()*10);
       clutter +=` <div class="bubble">${x}</div>`; //clutter mai baar bar vaue aa rhi hai
   }
   document.querySelector("#pbtm").innerHTML=clutter;
}
var timer=10;
function runtimer()
{
    a=setInterval(function(){
        if(timer>0)
        {
       timer--;
        
       document.querySelector("#timervalue").textContent=timer;  //textcontennt means it will reflect the change in number  
        }
        else{
            //console.log("hello");just to check whwtehr it has run or not
            clearInterval(a);
            document.querySelector("#pbtm").innerHTML=`<h1>thanks for playing</h1>`;
        }
    },1000)
}
function getnewhit(){
      var no =Math.floor(Math.random()*10)
      console.log(no);
      document.querySelector("#hitted").textContent=no;
}
var score=0;
function scoreincr(){
    
   score=score+10;
   document.querySelector("#scoreval").textContent=score;

}
document.querySelector("#pbtm")
.addEventListener("click",function(value){
    var clickedno=(Number(value.target.textContent)); //jab mai pbtm wale pr koi bhi eleemnt pr click kaurnga tab jo bhi value ayegi wo .taerget se konsa div hai wo pta chalega apne ko value.target se pura div mil rha hai  .textcontent se uska content milega this cvalue is of string type because of number it converts into integer number
    var hitno=document.querySelector("#hitted").textContent;
    if(clickedno==hitno)
    {
        scoreincr();
        makebubble();
        getnewhit();
        timer=9;

    }




})
makebubble();
runtimer();
getnewhit();



