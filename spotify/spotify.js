console.log("Welcome to Spotify");

// Initialize the Variables
let songindex=0;
let audioElement = new Audio("1.mp3");
let masterPlay = document.getElementById("saifplay");
let myprogressbar=document.getElementById("myprogressbar");
let gif=document.getElementById("gif");
let songsitem=Array.from(document.getElementsByClassName("songitem"));
//i am getting all divs from songitem console.log(songsitem);


let songs=[
    {songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/1.mp3", coverPath: "cover/logo.jpg"},
    {songName: "hello [NCS Release]", filePath: "songs/2.mp3", coverPath: "cover/logo.jpg"},
    {songName: "programmer [NCS Release]", filePath: "songs/3.mp3", coverPath: "cover/logo.jpg"},
    {songName: "invicible", filePath: "songs/4.mp3", coverPath: "cover/logo.jpg"},
]
songsitem.forEach((element,i)=>{  //every element from div songitem is comin and i is used to to display the index for 1st element of div 0th index song is coming (i) this is where i is used
    //console.log(element,i); gives the element which is selected and the index koonsa song index mai and konsa element click hua
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;//it targets the img tag which is there currently in the element and from the index pos coverpath is applied [0] is used it returns all the element of img tag in which only the first one is chosen
    element.getElementsByClassName("songname")[0].innerHTML=songs[i].songName;
})  



masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){ 
        
        
        audioElement.src=`songs/${songindex+1}.mp3`;
        console.log(audioElement);
        audioElement.play();
        masterPlay.classList.remove('fa-play'); //master play jsiko point out kr rha hai usme se fa play wali class remove krdo
        
        masterPlay.classList.add('fa-pause');//master plat jisko point kr rha hai usme pause class ko lagado
        gif.style.opacity=1;

    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        gif.style.opacity=0;
    }
    
})

audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);//jitna chala divide by kitna durstaion utan progress  progress is percentage mtlb myprogtessbar.value mai percentage ayi hai
    myprogressbar.value=progress; //.value means uski vlaue chamge progress mai kitna gana aya utna chalega
})

myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime=myprogressbar.value*audioElement.duration/100; //song kaha pr aye
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songsaif')).forEach((element)=>{
              element.classList.remove('fa-pause');
              element.classList.add('fa-play');
              
    })
}

Array.from(document.getElementsByClassName('songsaif')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
    //e.target points to the specific element which is been clicked and then uska id diay hai 
        
            makeAllPlays();
            songindex=parseInt(e.target.id); //it is returning an id of whixh song is played
            //console.log(songindex);
           // console.log(e.target);//kiski target hua hai konsi play button song series mai
           // e.target.classList.remove('fa-play');
            //e.target.classList.add('fa-pause');//mtlb arrow wala hata do icon
            //audioElement.src=`songs/${songindex}.mp3`; 
            //console.log(audioElement);
           
            if(audioElement.src.endsWith(`songs/${songindex}.mp3`) && !audioElement.paused) //ends with is a function that checks whter the audioelement which is prrsent now is matching with th element you clicked 
            {
                audioElement.pause();
                e.target.classList.remove('fa-pause');
                e.target.classList.add('fa-play');

            masterPlay.classList.remove('fa-pause');
            masterPlay.classList.add('fa-play');
            gif.style.opacity=0;
            }
            else {
                audioElement.src = `songs/${songindex}.mp3`;
                audioElement.play();
                e.target.classList.remove('fa-play');
                e.target.classList.add('fa-pause');
                masterPlay.classList.remove('fa-play');
                masterPlay.classList.add('fa-pause');
                gif.style.opacity=1;
            }
            
        
        
            
    })
})
document.getElementById('forward').addEventListener('click',()=>{
    if(songindex>=4)
    {
        songindex=1;
    }
    else{
    songindex+=1;
    console.log(songindex)
    }
    
    audioElement.src=`songs/${songindex}.mp3`; 
            console.log(audioElement);
            audioElement.currentTime=0;
            audioElement.play();
            masterPlay.classList.remove('fa-play');
            masterPlay.classList.add('fa-pause');
            if(songindex==1)
            {
            document.getElementById(`${songindex+3}`).classList.add('fa-play');
            document.getElementById(`${songindex+3}`).classList.remove('fa-pause');
            document.getElementById(`${songindex}`).classList.add('fa-pause');
            document.getElementById(`${songindex}`).classList.remove('fa-play');
            
            }
            
            else{
            document.getElementById(`${songindex-1}`).classList.add('fa-play');
            document.getElementById(`${songindex-1}`).classList.remove('fa-pause');
            document.getElementById(`${songindex}`).classList.remove('fa-play');
            document.getElementById(`${songindex}`).classList.add('fa-pause');
            }
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<=1)
    {
        songindex=4;
    }
    else{
    songindex-=1;
    }
    audioElement.src=`songs/${songindex}.mp3`; 
            console.log(audioElement);
            audioElement.currentTime=0;
            audioElement.play();
            masterPlay.classList.remove('fa-play');
            masterPlay.classList.add('fa-pause');
            if(songindex==4)
            {
                document.getElementById(`${songindex-3}`).classList.add('fa-play');
            document.getElementById(`${songindex-3}`).classList.remove('fa-pause');
            document.getElementById(`${songindex}`).classList.remove('fa-play');
            document.getElementById(`${songindex}`).classList.add('fa-pause');
            }
                else{
            document.getElementById(`${songindex+1}`).classList.add('fa-play');
            document.getElementById(`${songindex+1}`).classList.remove('fa-pause');
            document.getElementById(`${songindex}`).classList.remove('fa-play');
            document.getElementById(`${songindex}`).classList.add('fa-pause');
                }
})