console.log("Welcome to Mr.Cooper");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');

let songs = [
    {songName: "Believer-Imagine Dragons", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Memories-Maroon 5", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "No Lie-Sean Paul", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Senorita-Shawn Mendes", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Baby-Justin Bieber-My World 2.0", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Who Says-Selena Gomez The Scene", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
]

// audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})