const axios = require("axios");
/**
 
1. download a song
2. writting the same song to file
3. uploading the same file to drive and get a new link.

 */

// harshit
function downloaadSong(songName, callback) {
    
    console.log("Downloading started .....");

    setTimeout(function fun(){

        let song = songName + ".mp3";
        callback("kkkk");

    }, 3000);

}

// aditya
let song = downloaadSong("excuses", function x(song) {
    
    console.log("Song Downloading completed");
    console.log("your song ", song);

});


/**
 
 after down load song
 write to file = excuses.mp3.txt

 uploading to drive
 new link = www.drive.google.com/excuses.mp3.txt
 
 */


// disA
//     1. callback hell 
//     2.  IOC