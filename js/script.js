// TODO: Simple map editor


/**
 * 0. Grid layer - selected cell, tooltips, info boxes etc.
 * 1. Sky layer - airplanes
 * 2. Connectors layer - buildings (top), connectors
 * 3  Main layer - buildings (bottom), vehicles, boats (only if no Road and Ground layers exists)
 * 4. Roads layer - roads
 * 5. Ground layer - earth
 * 6. Water layer - water
 * 7. Underwater layer - submarines
 */

GameDraw.initImages();
GameDraw.images.grass.onload = function(){
    GameDraw.init();
}
//
//var map = {
//    cellWidth: 20,
//    cellHeight: 20,
//    maxCols: 50,
//    maxRows: 50,
//    currSelected: {
//        xCoor: 0,
//        yCoor: 0
//    }
//}
//
//var stage = new Kinetic.Stage({
//    container: 'container',
//    width: 1200,
//    height:600
//});
//
//var earth_Layer = new Kinetic.Layer();
//var ground_Layer = new Kinetic.Layer();
//var sky_Layer = new Kinetic.Layer();
//var grid_Layer = new Kinetic.Layer();
//
//var imageObj = new Image();
//imageObj.src = 'images/grass.jpg';
//
//
//var cells = new Array();
//var grass = new Array();
//for(var col=0; col < map.maxCols; col++){
//    cells[col] = new Array();
//    grass[col] = new Array();
//    for(var row=0; row < map.maxRows; row++){
//        cells[col][row] = new Kinetic.Rect({
//            x: col * map.cellWidth,
//            y: row * map.cellHeight,
//            width: map.cellWidth,
//            height: map.cellHeight,
//            stroke: '#aaa',
//            strokeWidth: 0.1,
//            xCoor: col,
//            yCoor: row
//        });
//
//        grass[col][row] = new Kinetic.Image({
//            x: col * map.cellWidth,
//            y: row * map.cellHeight,
//            image : imageObj,
//            width: 20,
//            height:20
//        });
//
//        grid_Layer.add(cells[col][row]);
//        earth_Layer.add(grass[col][row]);
//        cells[col][row].on('click', cellSelect);
//    }
//}
//
//
//
//
//
//var circle_blue = new Kinetic.Circle({
//    radius: 5,
//    fill: 'blue',
//    stroke: 'black',
//    strokeWidth: 1,
//    x: getX(1),
//    y: getY(1)
//});
//
//var circle_red = new Kinetic.Circle({
//    radius: 5,
//    fill: 'red',
//    stroke: 'black',
//    strokeWidth: 1,
//    x: getX(3),
//    y: getY(1)
//});


//imageObj.onload = function(){
//
//    earth_Layer.add(circle_blue);
//    earth_Layer.add(circle_red);
//
//
//    stage.add(earth_Layer);
//    stage.add(grid_Layer);
//}

/**********************************************************************
 * Functions
 */

////
//function cellSelect(){
//    console.log(this.attrs.xCoor+':'+this.attrs.yCoor);
//    this.attrs.strokeWidth = 1;
//    this.attrs.stroke = 'red';
//    cells[map.currSelected.xCoor][map.currSelected.yCoor].attrs.strokeWidth = 0.1;
//    cells[map.currSelected.xCoor][map.currSelected.yCoor].attrs.stroke = '#aaa';
//    map.currSelected.xCoor = this.attrs.xCoor;
//    map.currSelected.yCoor = this.attrs.yCoor;
//    grid_Layer.draw();
//}
//
//function getX(xCell){
//    return xCell * map.cellWidth + (map.cellWidth/2);
//}
//
//function getY(yCell){
//    return yCell * map.cellHeight + (map.cellHeight/2);
//}
//
//var scale = 1;
//var min_scale = 0.5;
//var max_scale = 3;
//$(document).ready(function(){
//    $('#zoom').bind('mousewheel', onMouseWheel);
//});
//
//function onMouseWheel(e, delta) {
//    delta = e.originalEvent.wheelDelta;
//    //prevent only the actual wheel movement
//    if (delta !== 0) {
//        e.preventDefault();
//    }
//
//    var cur_scale;
//    if (delta > 0) {
//        cur_scale = scale + Math.abs(delta / 640);
//    } else {
//        cur_scale = scale - Math.abs(delta / 640);
//    }
//
//    //check for minimum scale limit
//    if (cur_scale > min_scale && cur_scale < max_scale) {
//
//        var d=document.getElementById('graph');
//        var cnvsPos=getPos(d);
//
//        var Apos = stage.getAbsolutePosition();
//
//        var mousePos = stage.getPointerPosition();
//
//        var smallCalc  = (e.pageX - Apos.x - cnvsPos.x)/scale;
//        var smallCalcY = (e.pageY - Apos.y - cnvsPos.y)/scale;
//
//        var endCalc = (e.pageX - cnvsPos.x) - cur_scale*smallCalc;
//        var endCalcY = (e.pageY - cnvsPos.y) - cur_scale*smallCalcY;
//
//        scale = cur_scale;
//
//        stage.setPosition( endCalc, endCalcY);
//
//
//        earth_Layer.setScale(cur_scale);
//        grid_Layer.setScale(cur_scale);
//        earth_Layer.draw();
//        grid_Layer.draw();
//    }
//
//}
//
//function getPos(el){
//    for (var lx=0, ly=0;
//         el != null;
//         lx += el.offsetLeft, ly += el.offsetTop, el = el.offsetParent);
//    return {x: lx,y: ly};
//}