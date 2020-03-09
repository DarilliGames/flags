

window.onload = function () {
    console.log("The Page loaded")
    canv = document.getElementById("gc");
    ctx = canv.getContext("2d");
    document.addEventListener("keydown", keyPush);
    document.addEventListener("keyup", keyUp);
    loadImages();
    setInterval(game, 1000 / 10);
    highscore = 0;
}
px = py = 10;
gs = tc = 20;
ax = ay = 15;
xv = yv = 0;
is_key_down = false;

heroImage = new Image();

dance01 = new Image(); 
dance02 = new Image();
dance03 = new Image();
dance04 = new Image();

animationFrame = 0;
animtionState = 0;

cakeImage = new Image();

grassImage = new Image();
waterImage = new Image();
sandImage = new Image();
shurbImage = new Image();

treeBaseImage = new Image();

treeTopImage = new Image();

inventory = [];

blank = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
]

tiles = [
    [0,0,0,0,0,0,0,0,3,3,3,3,3,3,3,0,0,0,0,0],
    [7,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0],
    [5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0]
]

pickups = [1];

backup = [
    [0,0,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,1],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,1,1,1],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,1,1,1,1,1],
]



blocks = [[0, 0]]








tiletype = [grassImage,
            waterImage,
            sandImage,
            shurbImage,
            "black",
            treeBaseImage,
            "brown",
            treeTopImage
             
        ]

function generateTiles(){
    for (var x = 0; x < tc; x++){
        for (var y = 0; y < tc; y++){
            ctx.drawImage(tiletype[(tiles[y][x])], x * gs, y * gs, gs, gs);
            
        }

    }
    
}

function animateHero(){
    switch(animtionState){
        case 0:
            imageDrawn = heroImage;
            break
        case 99:
            switch(animationFrame){
                case 0:
                    imageDrawn = dance01;
                    break;
                case 1:
                    imageDrawn = dance02;
                    break;
                case 2:
                    imageDrawn = dance03;
                    break;
                case 3:
                    imageDrawn = dance01;
                    break;
                case 4:
                    imageDrawn = dance02;
                    break;
                case 5:
                    imageDrawn = dance03;
                    break;
                case 6:
                    imageDrawn = dance01;
                    break;
                case 7:
                    imageDrawn = dance02;
                    break;
                case 8:
                    imageDrawn = dance03;
                    break;
                case 9:
                    imageDrawn = dance04;
                    break;
                
            }
            animationFrame++;
            if(animationFrame == 11){
                animationFrame = 0;
                animtionState = 0;   
            }
            break;
            
    }

    ctx.drawImage(imageDrawn, px * gs, py * gs, gs, gs);
}

function game() {
    generateTiles();
    nx = px + xv;
    ny = py + yv;
    if(tiles[ny][nx] % 2 == 0){
        
        px = nx;
        py = ny;

    }
    
   
    
    if (px < 0) {
        px = tc - 1;
    }
    if (px > tc - 1) {
        px = 0;
    }
    if (py < 0) {
        py = tc - 1;
    }
    if (py > tc - 1) {
        py = 0;
    }
    
    
    // ctx.fillStyle = "black";
    // ctx.fillRect(0, 0, canv.width, canv.height);




    // ctx.fillStyle = "lime";
    // ctx.fillRect(px * gs, py * gs, gs, gs);
    animateHero();
    
    

    if (ax == px && ay == py) {
        ax = Math.floor(Math.random() * tc);
        ay = Math.floor(Math.random() * tc);
    }
    // ctx.fillStyle = "red";
    // ctx.fillRect(ax * gs, ay * gs, gs, gs);
    ctx.drawImage(cakeImage, ax * gs, ay * gs, gs, gs);
   

    
    
}
function keyPush(evt) {
    if(!is_key_down){
        is_key_down = true;
        switch (evt.keyCode) {
            case 65:
                xv = -1; yv = 0;
                break;
            case 87:
                xv = 0; yv = -1;
                break;
            case 68:
                xv = 1; yv = 0;
                break;
            case 83:
                xv = 0; yv = 1;
                break;
            case 71:
                console.log("dance");
                animtionState = 99;
                animationFrame = 0;
                break;
        }
    }
}
function keyUp(evt) {
    console.log("Stopping");
    is_key_down = false;
    xv = 0;
    yv = 0;
    
}

function loadImages(){
    heroImage.src = "hero.png";
    cakeImage.src = "cake.png";
    waterImage.src = "water.png";
    grassImage.src = "grass.png";
    sandImage.src = "sand.png";
    shurbImage.src = "shrub.png";
    treeBaseImage.src = "treebase.png";
    treeTopImage.src = "treetop.png";

    dance01.src = "dance1.png";
    dance02.src = "dance2.png";
    dance03.src = "dance3.png";
    dance04.src = "dance4.png";

    

}


console.log("THis is a new Bracnc!");