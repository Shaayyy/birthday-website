const stage = document.getElementById("letterStage");
document.addEventListener("DOMContentLoaded", openLetter);

function openLetter(){
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement("img");
        heart.className = "heart";
        heart.src="images/heartfinal.png"
        heart.style.left = Math.random() * stage.offsetWidth + "px";
        heart.style.top = 100+ i * 25 + "px";
        stage.appendChild(heart);
    }
}