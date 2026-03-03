

document.addEventListener('keypress',(e)=>{

console.log(e.key);
play(e.key)

})


// 
// ./music/naruto_drum.mp3


function play(key) {
    switch (key) {
        case 'a':
            new Audio('./music/message_tone.mp3').play()
            break;
        case 'b':
            new Audio("./music/mixkit-long-pop-2358.wav").play()
            break;

        case 'c':
            new Audio("./music/mixkit-correct-answer-tone-2870 (1).wav ").play()
            break;

        case 'd':
            new Audio("./music/mixkit-sci-fi-click-900.wav").play()
            break;

        case 'e':
            new Audio("./music/naruto_drum.mp3").play()
            break;
            
    
        default:
            break;
    }
}




