function open_play_screen()
{
    document.getElementById('play-screen').style.top="0vh";
}
function close_play_screen()
{
    document.getElementById('play-screen').style.top="100vh";
}


var songs = {
    1:{index:1, name:"Gungan tuze Othanvar rahu de",path:"audioFiles/song1.mp3"},
    2:{index:2, name:"Aakhonse war karde na, sine me pyar bharde na",path:"audioFiles/song2.mp3"},
    3:{index:3, name:"Dekhu to bholi kitni (Drama Queen)",path:"audioFiles/song3.mp3"},
    4:{index:4, name:"Evala paul...",path:"audioFiles/song4.mp3"},
    5:{index:5, name:"Mi un tu savli",path:"audioFiles/song5.mp3"},
    6:{index:6, name:"Swarg ha nava",path:"audioFiles/song6.mp3"},
    7:{index:7, name:"Rahu ashich tuzi mazi sath",path:"audioFiles/song7.mp3"},
    8:{index:8, name:"Savali jashi unhat sangatila",path:"audioFiles/song8.mp3"},
    9:{index:9, name:"Tom and Jerry",path:"audioFiles/song9.mp3"},
    10:{index:10, name:"Ek hajaronme meri behana hai",path:"audioFiles/song10.mp3"},
    11:{index:11, name:"O kisna hai",path:"audioFiles/song11.mp3"},
    12:{index:12, name:"Krishna janmala g bai krishna janmala",path:"audioFiles/song12.mp3"},
    13:{index:13, name:"Tumse mila to yuh laga",path:"audioFiles/song13.mp3"},
    14:{index:14, name:"Bewafa tera masum chehara",path:"audioFiles/song14.mp3"},
    15:{index:15, name:"tere bajo koi bhi nai mera",path:"audioFiles/song15.mp3"},
    16:{index:16, name:"mera dil hai sona, usme har ek kona",path:"audioFiles/song16.mp3"},
    17:{index:17, name:"Tuzme rab dikhata hai (female version)",path:"audioFiles/song17.mp3"},
    18:{index:18, name:"Aa chal na bhulade narajiya..",path:"audioFiles/song18.mp3"}
};

var songIndex;
var isPlaying=false;
var audio = new Audio();
//displaying the list of available songs and by default loadiding first song 
function songList()
{
    for(songIndex=1; songIndex<= Object.keys(songs).length;songIndex++)
    {
        document.getElementById("music-list").innerHTML += "<p style='background:rgb(235, 154, 228); box-shadow:1px 1px 10px rgb(247, 187, 242),1px 1px 10px rgb(247, 187, 242), 1px 1px 10px rgb(247, 187, 242), 1px 1px 10px rgb(247, 187, 242); border-radius:10px;padding:15px 0px 15px 10px; cursor:pointer; width:100%' onclick='loadSong("+songIndex+")'>"+songs[songIndex].name+"</p>";
    }
    songIndex=1;
    loadSong(songIndex);
}

//loading the song
function loadSong(x)
{
    document.getElementById("songName1").innerHTML = songs[x].name;
    document.getElementById("songName2").innerHTML = songs[x].name;
    audio.src=songs[x].path;
    songIndex=songs[x].index;

    if(isPlaying)
    audio.play();
}

//play-pause controls button action
function playPauseSong()
{
    if(isPlaying)
    {
        isPlaying=false;
        pauseSong();
    }
    else
    {
        isPlaying=true;
        playSong();       
    }
}
//play song control action
function playSong()
{
    audio.play();
    play_pause.src="icons/pause.png";
    play_pause1.src="icons/pause.png";
}
//pause song control action
function pauseSong()
{
    audio.pause();
    play_pause.src="icons/play.png";
    play_pause1.src="icons/play.png";
}
//next song
function nextSong()
{
    songIndex +=1;
    if(songIndex >Object.keys(songs).length)
    {
        songIndex=1;
    }
    loadSong(songIndex);
}
//previous song
function prevSong()
{
    songIndex -=1;
    if(songIndex<1)
    {
        songIndex=Object.keys(songs).length;
    }
    loadSong(songIndex);
}
//check if the song is end
audio.onended = function()
{
    songIndex += 1;

    if(songIndex >Object.keys(songs).length)
    {
        songIndex=1;
    }
    loadSong(songIndex);
}
//music - like section

var isLiked=false;

function liked()
{
    if(isLiked)
    {
        like.src="icons/like.png";
        isLiked=false;
    }
    else
    {
        like.src="icons/heart.png";
        isLiked=true;
    }
}

function searchSong(text)
{
    if(text != "")
    {
        document.getElementById("search_result").style.display="block";
        document.getElementById("search_result").innerHTML = "";
        for(songIndex=1; songIndex<= Object.keys(songs).length;songIndex++)
        {
            if(songs[songIndex].name.toLowerCase().includes(text.trim().toLowerCase()))
            {
                document.getElementById("search_result").innerHTML += "<p style='padding:0 10px; cursor:pointer; width:100%' onclick='loadSong("+songIndex+")'>"+songs[songIndex].name+"</p>";
            }
        }
    }
    else
    {
        document.getElementById("search_result").style.display="none";
    }
}