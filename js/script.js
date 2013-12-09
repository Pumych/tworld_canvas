// TODO: Simple map editor
// http://www.lgdb.org/sites/default/files/node_images/1402/3056.jpg - M.A.X. image

var debug = true;

function log(msg){
    if(debug) console.log(msg);
}

//GameDraw.init();











//
//var grassImg = new Image();
//grassImg.src = 'images/grass.jpg';
//
//var stage  = new Kinetic.Stage({
//    container:  'container',
//    width:      500,
//    height:     500
//});
//
//var main_Layer = new Kinetic.Layer();
//
//var imageUnit = new Kinetic.Image({
//    y:      10,
//    x:      10,
//    image : grassImg,
//    width:  30,
//    height: 30
//});
//
//main_Layer.add(imageUnit);
//
//window.onload = function(){
//    stage.add(main_Layer);
//
//
//    imageUnit.x = 110;
//    main_Layer.draw();
//}

// Animal on the bitch: http://www.html5canvastutorials.com/labs/html5-canvas-animals-on-the-beach-game-with-kineticjs/

//c1.insertUnit('main', u1);
//console.log(c1.getUnit());

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