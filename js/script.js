// TODO: Simple map editor

var map = {
    cellWidth: 20,
    cellHeight: 20,
    maxCols: 60,
    maxRows: 30,
    currSelected: {
        xCoor: 0,
        yCoor: 0
    }
}

var stage = new Kinetic.Stage({
    container: 'container',
    width: 1200,
    height:600
});

var layer = new Kinetic.Layer();

var cells = new Array();
for(var col=0; col < map.maxCols; col++){
    cells[col] = new Array();
    for(var row=0; row < map.maxRows; row++){
        cells[col][row] = new Kinetic.Rect({
            x: col * map.cellWidth,
            y: row * map.cellHeight,
            width: map.cellWidth,
            height: map.cellHeight,
            stroke: '#aaa',
            strokeWidth: 0.1,
            xCoor: col,
            yCoor: row
        });
        layer.add(cells[col][row]);
        cells[col][row].on('click', cellSelect);
    }
}

stage.add(layer);

/**********************************************************************
 * Functions
 */

function cellSelect(){
    console.log(this.attrs.xCoor+':'+this.attrs.yCoor);
    this.attrs.strokeWidth = 1;
    this.attrs.stroke = 'red';
    cells[map.currSelected.xCoor][map.currSelected.yCoor].attrs.strokeWidth = 0.1;
    cells[map.currSelected.xCoor][map.currSelected.yCoor].attrs.stroke = '#aaa';
    map.currSelected.xCoor = this.attrs.xCoor;
    map.currSelected.yCoor = this.attrs.yCoor;
    layer.draw();
}