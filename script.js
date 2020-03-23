window.onload = function () {
    canv = document.getElementById("gc");
    ctx = canv.getContext("2d");
    document.addEventListener("keydown", keyPush);
    document.addEventListener("keyup", keyUp);
    loadImages();
    overwolrdInterval = setInterval(game, 1000 / 10);
    highscore = 0;
    
    
    
}
px = py = 10;
gs = 30;
tc = 20;
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




grassImage = new Image();
waterImage = new Image();
sandImage = new Image();
shurbImage = new Image();
grassPinkImage = new Image();
treeBaseImage = new Image();

treeTopImage = new Image();

grassBoulderImage = new Image();

sandBoulderImage = new Image();


cakeImage = new Image();
pickupImage = new Image();

brickWallImage = new Image();
brickWallSDoor = new Image();
brickWindowImage = new Image();

longGrassImage = new Image();

arfTileImage = new Image();
artTileImage = new Image();
arbTileImage = new Image();
alfTileImage = new Image();
altTileImage = new Image();
albTileImage = new Image();

inventory = [];

invWarp = new Image();

blockType = { 0: longGrassImage, 10:invWarp, 11: arfTileImage, 12: artTileImage, 13: arbTileImage, 14: alfTileImage, 15: altTileImage, 16: albTileImage }

items = [{
    0: { "name": "Health" },
    1: { "name": "Magic" }
}
]

blank = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]

levels = {

    1:
    {
        "level": [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0],
            [7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 9, 0, 0, 0],
            [5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0],
            [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0],
            [0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 4, 0, 4, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 0, 0, 9, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 2, 11, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ],
        "warps": [{ "x": 19, "y": 7, "l": 2, "nx": 1, "ny": 7 }, { "x": 19, "y": 8, "l": 2, "nx": 1, "ny": 8 }, { "x": 19, "y": 9, "l": 2, "nx": 1, "ny": 9 }],
        "pickups": [{ "x": 0, "y": 0, "i": 0, "q": 1 }, { "x": 18, "y": 12, "i": 0, "q": 1 }],
        "interactiveBlocks": [{ "x": 4, "y": 6, "a": 0 }, { "x": 5, "y": 7, "a": 0 }, { "x": 19, "y": 7, "a": 12 }, { "x": 19, "y": 8, "a": 11 }, { "x": 19, "y": 9, "a": 13 }],
        "wildEncounters": [{"which": "Charmander", "chance": 50}, {"which": "Bulbasaur", "chance": 50}, {"which": "Mewwo", "chance": 10}]
    },

    2:
    {
        "level": [
            [2, 0, 2, 0, 2, 0, 2, 0, 2, 3, 2, 3, 2, 3, 2, 0, 2, 0, 2, 0],
            [7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 9, 0, 0, 0],
            [5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0],
            [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0],
            [0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 4, 0, 4, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 0, 0, 9, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 13, 15, 13, 15, 0, 0, 0],
            [0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 15, 14, 15, 13, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 2, 11, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ],
        "warps": [{ "x": 0, "y": 7, "l": 1, "nx": 18, "ny": 7 }, { "x": 0, "y": 8, "l": 1, "nx": 18, "ny": 8 }, { "x": 0, "y": 9, "l": 1, "nx": 18, "ny": 9 }, { "x":14, "y":10, "l": 51, "nx": 1, "ny": 1 }],
        "pickups": [],
        "interactiveBlocks": [{ "x": 0, "y": 7, "a": 15 }, { "x": 0, "y": 8, "a": 14 }, { "x": 0, "y": 9, "a": 16 }, {"x":14, "y":10, "a":10}]
    },
    51:
    {
        "level": 
        [
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,2,2,2,0,2,2,2,0,0,0,0,0,0,0],[0,0,0,0,0,0,2,2,2,0,2,2,2,0,0,0,0,0,0,0],[0,0,0,0,0,0,2,2,1,1,1,1,2,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,2,2,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,2,2,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,2,2,1,1,1,1,2,2,0,0,0,0,0,0],[0,0,0,0,0,0,2,2,2,0,0,2,2,2,0,0,0,0,0,0],[0,0,0,0,0,2,2,2,2,0,0,2,2,2,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        ],
        "warps": [],
        "pickups": [],
        "interactiveBlocks": []
    }

}
if (sessionStorage.getItem("customMap") != null){
    levels[51]["level"] = JSON.parse(sessionStorage.getItem("customMap"));
}


level = levels[1]
tiles = level["level"];
warps = level["warps"]
pickups = level["pickups"]
interactiveBlocks = level["interactiveBlocks"]

















tiletype = [
    grassImage,
    waterImage,
    sandImage,
    shurbImage,
    grassPinkImage,
    treeBaseImage,
    grassImage,
    treeTopImage,
    grassImage,
    grassBoulderImage,
    grassImage,
    sandBoulderImage,
    grassImage,
    brickWallImage,
    brickWallSDoor,
    brickWindowImage,
    grassImage,
    brickWindowImage,
]

function generateTiles() {
    for (var x = 0; x < tc; x++) {
        for (var y = 0; y < tc; y++) {
            ctx.drawImage(tiletype[(tiles[y][x])], x * gs, y * gs, gs, gs);


        }

    }
    for (var i = 0; i < pickups.length; i++) {
        ctx.drawImage(pickupImage, pickups[i]["x"] * gs, pickups[i]["y"] * gs, gs, gs);
    }

}

function animateHero() {
    switch (animtionState) {
        case 0:
            imageDrawn = heroImage;
            break
        case 99:
            switch (animationFrame) {
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
            if (animationFrame == 11) {
                animationFrame = 0;
                animtionState = 0;
            }
            break;

    }

    ctx.drawImage(imageDrawn, px * gs, py * gs, gs, gs);
}

function gridWarp(x, y) {
    for (var i = 0; i < warps.length; i++) {
        if ((warps[i]["x"] == x) && (warps[i]["y"] == y)) {
            level = levels[warps[i]["l"]];
            px = warps[i]["nx"];
            py = warps[i]["ny"];
            console.log(py);
            tiles = level["level"];
            warps = level["warps"];
            pickups = level["pickups"];
            interactiveBlocks = level["interactiveBlocks"];

        }
    }


}

function game() {
    generateTiles();
    nx = px + xv;
    ny = py + yv;
    if (tiles[ny][nx] % 2 == 0) {

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

    for (var i = 0; i < interactiveBlocks.length; i++) {
        
        ctx.drawImage(blockType[interactiveBlocks[i]["a"]], interactiveBlocks[i]["x"] * gs, interactiveBlocks[i]["y"] * gs, gs, gs);
        
        if (interactiveBlocks[i]["x"] == px && interactiveBlocks[i]["y"] == py) {
            if (interactiveBlocks[i]["a"] >= 10 && interactiveBlocks[i]["a"] < 20) {
                interaction = true;
                gridWarp(interactiveBlocks[i]["x"], interactiveBlocks[i]["y"]);
                console.log("You triggered something");
            }
            if (interactiveBlocks[i]["a"]==0){
                console.log("Trying to initiate Battle");
                if(Math.round(Math.random() * 10) > 3){
                    console.log("Found a wild Pokemon");
                    initateBattle();
                    wildBattleRandom();
                    
                }
            }

        }
    }



}

function initateBattle(){
    clearInterval(overwolrdInterval);
    document.removeEventListener("keydown", keyPush);
    document.removeEventListener("keydown", keyUp);
}

function wildBattleRandom(){
    var figure = 0;
    var encountered = "";
    for(var i = 0; i < level["wildEncounters"].length; i++){
        figure += level["wildEncounters"][i]["chance"];
    }
    var gotten = Math.round(Math.random() * figure);
    console.log(gotten);
    console.log(figure);
    figure = 0;

    for(var i = 0; i < level["wildEncounters"].length; i++){
        figure += level["wildEncounters"][i]["chance"];
        console.log(figure);
        console.log(gotten);
        if (gotten > figure){
            encountered = level["wildEncounters"][i]["which"];
            console.log("Encountered "+level["wildEncounters"][i]["which"]);

        }
    }
    console.log(encountered);
}

function keyPush(evt) {
    if (!is_key_down) {
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
                animtionState = 99;
                animationFrame = 0;
                break;
        }
    }
}
function keyUp(evt) {
    is_key_down = false;
    xv = 0;
    yv = 0;

}

function loadImages() {
    heroImage.src = "images/hero.png";
    cakeImage.src = "images/cake.png";
    waterImage.src = "images/water.png";
    grassImage.src = "images/grass.png";
    sandImage.src = "images/sand.png";
    shurbImage.src = "images/shrub.png";
    treeBaseImage.src = "images/treebase.png";
    treeTopImage.src = "images/treetop.png";
    grassBoulderImage.src = "images/grassBoulder.png";
    grassPinkImage.src = "images/grassPink.png";
    sandBoulderImage.src = "images/sandBoulder.png";

    dance01.src = "images/dance1.png";
    dance02.src = "images/dance2.png";
    dance03.src = "images/dance3.png";
    dance04.src = "images/dance4.png";

    pickupImage.src = "images/pickup.png";
    longGrassImage.src = "images/longGrass.png";
    arfTileImage.src = "images/accessRF.png";
    artTileImage.src = "images/accessRT.png";
    arbTileImage.src = "images/accessRB.png";
    alfTileImage.src = "images/accessLF.png";
    altTileImage.src = "images/accessLT.png";
    albTileImage.src = "images/accessLB.png";

    brickWallImage.src = "images/brickWall.png";
    brickWallSDoor.src = "images/brickSDoor.png";
    brickWindowImage.src = "images/brickWindow.png";
    invWarp.src = "images/brickSDoor.png";
}


