$(document).ready(function(){







    function writeMessage(message) {
        text.setText(message);
        layer.draw();
    }
    var stage = new Kinetic.Stage({
        container: 'container',
        width: 578,
        height: 200
    });
    var layer = new Kinetic.Layer();

    var triangle = new Kinetic.RegularPolygon({
        x: 190,
        y: 120,
        sides: 3,
        radius: 80,
        fill: '#00D2FF',
        stroke: 'black',
        strokeWidth: 4
    });

    var text = new Kinetic.Text({
        x: 10,
        y: 10,
        fontFamily: 'Calibri',
        fontSize: 24,
        text: '',
        fill: 'black'
    });

    triangle.on('mouseout', function() {
        writeMessage('Mouseout triangle');
    });

    triangle.on('mousemove', function() {
        var mousePos = stage.getPointerPosition();
        var x = mousePos.x - 190;
        var y = mousePos.y - 40;
        writeMessage('x: ' + x + ', y: ' + y);
    });

    var circle = new Kinetic.Circle({
        x: 380,
        y: stage.getHeight() / 2,
        radius: 70,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 4
    });

    circle.on('mouseover', function() {
        writeMessage('Mouseover circle');
    });
    circle.on('mouseout', function() {
        writeMessage('Mouseout circle');
    });
    circle.on('mousedown', function() {
        writeMessage('Mousedown circle');
    });
    circle.on('mouseup', function() {
        writeMessage('Mouseup circle');
    });

    layer.add(triangle);
    layer.add(circle);
    layer.add(text);
    stage.add(layer);
});



