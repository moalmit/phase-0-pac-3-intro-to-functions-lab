function shout(string){
    return string.toUpperCase();
}
function whisper(string){
    return string.toLowerCase();
}
function logShout(string){
    string = string.toUpperCase();
    console.log(string);
}
function logWhisper(string){
    console.log(string.toLowerCase());
}
function sayHiToHeadphonedRoommate (string){
    if (string.toLowerCase() === string){
        string = "I can't hear you!"};
    
    if (string.toUpperCase() === string){
        string = "YES INDEED!"};

    if (string === "Let's have dinner together!"){
        string = "I would love to!"
    }
    return string
}
