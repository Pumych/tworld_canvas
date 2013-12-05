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
    var GameDraw = function(){
        var _that = this;
        var stage;



        // Drawing settings
        var settings = {
            container: 'container'  // Container ID
            ,   width:      1200        // Container width
            ,   height:     600         // Container height
            ,   cellWidth:  20          // One cell width
            ,   cellHeight: 20          // One cell height
            ,   cellStroke: '#aaa'
            ,   imagesPath: 'images/'   // Path to images folder
            ,   showCoors : {
                    x1: 10,
                    y1: 0,
                    x2: 40,
                    y2: 30
            }
        }

        // Game layer by order from top to bottom
        var layers = {
                grid_Layer:         ''
            ,   sky_Layer:          ''
            ,   connectors_Layer:   ''
            ,   main_Layer:        ''
            ,   roads_Layer:        ''
            ,   ground_Layer:       ''
            ,   water_Layer:        ''
            ,   under_Layer:        ''
        };

        // Images
        var images = {
            grassSrc:   settings.imagesPath + 'grass.jpg',
            waterSrc:   settings.imagesPath + 'water.jpg',
            testGif:    settings.imagesPath + 'gif.gif'
        }

        this.init = function(){
            _that.initStage();
            _that.initLayers();
            _that.initImages();
            _that.buildGrid();
            _that.initMessages();
            window.onload = function(){
                _that.stage.add(layers.main_Layer);
                _that.stage.add(layers.grid_Layer);
            }
        }

        // Init Stage of all layers
        this.initStage = function(){
            _that.stage = new Kinetic.Stage({
                container:  settings.container,
                width:      settings.width,
                height:     settings.height
            });
        }

        // Init layers
        this.initLayers = function(){
            layers.main_Layer = new Kinetic.Layer();
            layers.grid_Layer = new Kinetic.Layer();
        }

        // Init images
        this.initImages = function(){
            images.grass = new Image();
            images.water = new Image();
            images.testgif = new Image();
            images.grass.src = images.grassSrc;
            images.water.src = images.waterSrc;
            images.testgif.src = images.testGif;
        }

        // Building
        this.buildGrid = function(){
            var grassWaterLayer = GameData.getLayer('grassWater');
            for(var col=settings.showCoors.x1; col < Math.min(grassWaterLayer[0].length, settings.showCoors.x2); col++){
                for(var row=settings.showCoors.y1; row < Math.min(grassWaterLayer.length, settings.showCoors.y2); row++){
                    var grass = new Kinetic.Image({
                        x:      col * settings.cellWidth,
                        y:      row * settings.cellHeight,
                        image : (grassWaterLayer[row][col] == 1) ? images.grass : images.water,
                        width:  settings.cellWidth,
                        height: settings.cellHeight,
                        stroke: settings.cellStroke
                    });
                    layers.main_Layer.add(grass);
                }
            }
        }



        this.message = function(text, x, y, fontSize, fontFamily, fill){
            var text = new Kinetic.Text({
                x: x,
                y: y,
                text: text,
                fontSize: fontSize,
                fontFamily: fontFamily,
                fill: fill
            });

            layers.main_Layer.add(text);
        }

        this.initMessages = function(){
            _that.message('Test text', 100, 20);
        }

        this.showText = function(){

        }


    } // var GameDraw

    window.GameDraw = new GameDraw();
})();
