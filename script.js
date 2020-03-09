

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
cakeImage = new Image();
waterImage = new Image();

tiles = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,5,5,5,5,5,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,5,3,3,3,3,3,5,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,3,4,3,4,3,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,3,4,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0]
]

blocks = [[0, 0]]


tiletype = [{"color": "green"},
            {"color": "blue"},
            {"color": "yellow"},
            {"color": "grey"},
            {"color": "black"},
            {"color": "brown"}
             
        ]

function generateTiles(){
    for (var x = 0; x < tc; x++){
        for (var y = 0; y < tc; y++){
            if (tiletype[(tiles[y][x])]["color"] =="blue"){
                ctx.drawImage(waterImage, x * gs, y * gs, gs, gs);
                
            }
            else{
                ctx.fillStyle = tiletype[(tiles[y][x])]["color"];
                ctx.fillRect(x * gs, y * gs, gs, gs);
            }
        }

    }
    
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
    ctx.drawImage(heroImage, px * gs, py * gs, gs, gs);
    

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
    heroImage.src = 'hero.png';
    cakeImage.src = 'cake.png';
    waterImage.src = 'water.png';
}