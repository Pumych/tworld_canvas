var Debugger = function(){};
Debugger.log = function(message){
    try{
        console.log(message);
    } catch (exception){
        return;
    }
};




var canvasID = 1;
var wrapper = document.getElementById("viewport");

var grassImage = new Image();
grassImage.src = 'images/grass.jpg';



grassImage.onload = function(){
    var canvasArr = new Array();
    for(var col=0; col < 30; col++){
        canvasArr[col] = new Array();
        for(var row=0; row < 10; row++){
            var canvas = document.createElement('canvas');
            canvas.setAttribute('id', 'canvas_' + canvasID);
            canvas.setAttribute('style', 'z-index:' + canvasID);
            wrapper.appendChild(canvas);

            canvasArr[col][row] = canvas.getContext("2d");
            canvasArr[col][row].drawImage(grassImage, col*10, row*10, 10, 10);
            canvasID++;
        }
    }

    canvasArr[5][5].clearRect(0,0,900, 600);
}





window.onload = canvasApp;

function canvasApp(){
    var theCanvas = document.getElementById("canvasOne");
    if(!theCanvas || !theCanvas.getContext) return;
    var context = theCanvas.getContext("2d");

    function drawScreen(){


//        context.fillStyle = '#ffffaa';
//        context.lineWidth = 1;
//        context.fillRect(0,0, 500, 300);
//
//        context.fillStyle = "#000000";
//        context.font = "20px Sans-Serif";
//        context.textBaseline = "top";
//        context.fillText("Hello World!", 195, 80);

//        var helloImage = new Image();
//        helloImage.onload = function(){
//            context.drawImage(helloImage, 160, 130);
//        }
//        helloImage.src = 'images/tank.png';
//
//        context.strokeStyle = "#000000";
//        context.strokeRect(5, 5, 490, 290);



        var u1 = new Unit({
            ID:1,
            x:10,
            y:50,
            type: 'tank',
            imageSrc: 'images/tank.png'
        });

        var intervalID = setInterval(function(){
            context.clearRect(0,0,theCanvas.width, theCanvas.height);
            u1.updateXY(u1.getCoors().x+1, u1.getCoors().y);
            console.log(u1.getCoors());
            context.drawImage(u1.getImage() , u1.getCoors().x, u1.getCoors().y);
            if(u1.getCoors().x > 100){
                clearInterval(intervalID);
            }

        }, 10);




    }

    drawScreen();
}

