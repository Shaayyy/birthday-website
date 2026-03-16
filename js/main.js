const button = document.getElementById("bouquetButton");
if(button){
    button.addEventListener("click",makeBouquet);
}

const button2 = document.getElementById("cakeButton");
if(button2){
    button2.addEventListener("click", cutCake);
}

const button3 = document.getElementById("surprise");
if(button3){
    button3.addEventListener("click",letterReveal);
}
//define makeBouquet
function makeBouquet(){
    window.location.href="bouquet.html";
}

//define cutCake
function cutCake(){
    window.location.href = "cake.html";
}

//define letter action
function letterReveal(){
    window.location.href="letter.html";
}