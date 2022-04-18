function shake(){

    let ball= document.getElementById("ball")
    let messageText = document.getElementById("message")
 
    //remove previous message if it exists
    if(messageText != null){
     messageText.parentNode.removeChild(messageText);
    }
    
    //Make the ball shake by adding the css class
    ball.classList.add("shake");
 
    //Remove the shake class after it stops shaking
    setTimeout(function(){ ball.classList.remove("shake"); }, 2000);
    
    //call the fortune function to get your fortune only after 2sec
    setTimeout(function(){ getFortune(); }, 2000);
 }
 
 
 //generate the fortune for the ball
 function getFortune(){
     //array of fortunes
     let fortunes = ["It is certain", "It is decidedly so", "Without a doubt", "Yes, definitely", "You may rely on it", "As I see it, yes", "Most likely", "Outlook good", "YES!", "Signs point to yes", "Reply hazy, try again", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Dont count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"]
 
     //get a random fortune message message
     let fortune = fortunes[Math.floor(Math.random()*fortunes.length)];
 
     //display the fortune on the page
     let parent = document.getElementById("fortune");
     let newMessage = document.createElement("div");
     newMessage.setAttribute('id', "message");
     newMessage.innerHTML = "\""+fortune+"\"";
     parent.appendChild(newMessage);
 }

 