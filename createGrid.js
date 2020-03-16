console.log("THis");
var tileLocations =document.getElementById("theTiles");
var tileSelectors =document.getElementById("selectors");

var numX=20;
var numY=20;

var tileSelected = 0;

var id=0;

var selectedValue = 0;

for(var y = 0; y < numY; y++){
    var yBreak = document.createElement("BR")
    for(var x = 0; x<numX; x++){
        var btn = document.createElement("BUTTON");
        btn.setAttribute("id", id);
        btn.setAttribute("onclick", "call(" + id +")");
        btn.className = "a"+selectedValue;
                  
                // appending button to div 
        tileLocations.appendChild(btn);
        id = id+1;
    }
    tileLocations.appendChild(yBreak);

}

var loopValue2 = 0;

for(var y = 0; y < numY; y++){
    var yBreak = document.createElement("BR")
    for(var x = 0; x<numX; x++){
        var btn = document.createElement("BUTTON");
        btn.setAttribute("onclick", "setSelectedValue(" + loopValue2 +")");
        tileSelectors.appendChild(btn);
        loopValue2++;
    }
    tileSelectors.appendChild(yBreak);

}

function call(tile){
    var target = document.getElementById(tile);
    target.className = '';
    target.className = "a"+selectedValue;

}

function setSelectedValue(selecterValue){
    console.log(selecterValue);
    selectedValue = selecterValue;
}

function generate(){
    console.log("Creating Cells");
    var outer = [];
    var inner = [];
    var i = 0;
    for(i = 0; i < (numX*numY); i++){
        var tileGetter = document.getElementById(i);
        theID = tileGetter.getAttribute("class").substring(1);
        inner.push(parseInt(theID));
        if(inner.length % 20 == 0){
            outer.push(inner);
            inner = [];
        }




    }
    outer = JSON.stringify(outer);
    console.log(outer);
    sessionStorage.setItem("customMap", outer);
}



var tiles = {
    0: "grass",
    1: "water",
    2: "sand"

}




