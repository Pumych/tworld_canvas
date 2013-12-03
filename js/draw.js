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

(function(){
    var GameDraw = {};

    GameDraw.settings = {
        container: 'container',   // Container ID
        width:      1200,           // Container width
        height:     600,            // Container height
        cellWidth: 20,
        cellHeight: 20
    }

    GameDraw.layers = {
        earth_Layer: ''
    }

    GameDraw.images = {
        grassSrc: 'images/grass.jpg',
        waterSrc: 'images/water.jpg'
    }

    GameDraw.initStage = function(){
        GameDraw.stage = new Kinetic.Stage({
            container:  GameDraw.settings.container,
            width:      GameDraw.settings.width,
            height:     GameDraw.settings.height
        });
    }

    GameDraw.initLayers = function(){
        GameDraw.layers.earth_Layer = new Kinetic.Layer();
    }

    GameDraw.initImages = function(){
        GameDraw.images.grass = new Image();
        GameDraw.images.grass.src = GameDraw.images.grassSrc;
        GameDraw.images.water = new Image();
        GameDraw.images.water.src = GameDraw.images.waterSrc;
    }

    GameDraw.buildGrid = function(){
        var grass = new Array();

        for(var col=0; col < GameData.layers.grassWater[0].length; col++){
            grass[col] = new Array();
            for(var row=0; row < GameData.layers.grassWater.length; row++){
                grass[col][row] = new Kinetic.Image({
                    x: col * GameDraw.settings.cellWidth,
                    y: row * GameDraw.settings.cellHeight,
                    image : (GameData.layers.grassWater[row][col] == 1) ? GameDraw.images.grass : GameDraw.images.water,
                    width: 20,
                    height:20,
                    stroke: '#aaa'
                });
                GameDraw.layers.earth_Layer.add(grass[col][row]);
            }
        }
    }

    GameDraw.init = function(){
        GameDraw.initStage();
        GameDraw.initLayers();
        GameDraw.initImages();
        GameDraw.buildGrid();

        GameDraw.stage.add(GameDraw.layers.earth_Layer);


    }

    window.GameDraw = GameDraw;
})();