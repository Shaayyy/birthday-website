//console.log("cake is loading");

document.addEventListener("DOMcontentLoaded",cakeAnimation);
const cakeStage = document.getElementById("cakeStage");
cakeAnimation();

function cakeAnimation(){
    console.log("cake created")
    const image = document.createElement("img");
    image.src="images/cake.gif";
    image.style.width = "200px";
    cakeStage.append(image);

    for(let i =0;i<30;i++){
        console.log("confetti created");
        const confetti = document.createElement("img");
        confetti.className = "confetti";
        confetti.src="images/confettifinal.png";


        confetti.style.left = Math.random() * 2000 + "px";
        confetti.style.top = -Math.random() * window.innerWidth + "px";
        confetti.style.animationDuration = 2 + Math.random()*3 + "s";
        confetti.style.top = -Math.random() * 200 + "px";
        //confetti.style.width = 10 + Math.random()*250 + "px"; 
        cakeStage.appendChild(confetti);
    }

}
