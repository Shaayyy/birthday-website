const selectRose = document.getElementById("rose");
if(selectRose){
    selectRose.addEventListener("click",addToStage);
}

const selectTulip = document.getElementById("tulip");
if(selectTulip){
    selectTulip.addEventListener("click",addToStage);
}

const selectSunflower = document.getElementById("sunflower");
if(selectSunflower){
    selectSunflower.addEventListener("click",addToStage);
}

const stage = document.getElementById("stage");

function addToStage(event){
    const type = event.target.id;
    const image = document.createElement("img");

    if (type == "rose"){
        image.src = "images/rosefinal.png";
        image.width = 80;
    }
    else if (type =="tulip"){
        image.src = "images/tulipfinal.png";
        image.width = 80;
    }
    else if (type == "sunflower"){
        image.src = "images/sunf.png";
        image.width = 80;
    }
    stage.appendChild(image);
}