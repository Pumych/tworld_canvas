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
// TODO: 1.Draw units from mainID matrix
// TODO: 2.Info tooltip near clicked cell about the cell (unit/cell menu: move, build, destroy etc.)
// TODO: 3.Select unit in cell, move unit to another cell (find moving path)

(function(){
    var GameDraw = function(){
        var _that = this;
        var stage;


        // Drawing settings
        var settings = {
            container: 'container'  // Container ID
            ,   width:      1200        // Container width
            ,   height:     600         // Container height
            ,   cellWidth:  30          // One cell width
            ,   cellHeight: 30          // One cell height
            ,   cellStroke: '#999'
            ,   gridStroke: ''
            ,   imagesPath: 'images/'   // Path to images folder
            ,   showCoors : {
                    x1: 0,
                    y1: 0,
                    x2: 100,
                    y2: 100
            }
        }

        // Game layer by order from top to bottom
        var layers = {
                grid_Layer:         ''
            ,   msg_Layer:          ''
            ,   sky_Layer:          ''
            ,   connectors_Layer:   ''
            ,   main_Layer:         ''
            ,   roads_Layer:        ''
            ,   ground_Layer:       ''
            ,   water_Layer:        ''
            ,   under_Layer:        ''
        };

        var tooltips = {
            cell: ''
        }

        // Images
        var images = {
            grassSrc:   settings.imagesPath + 'grass.jpg',
            waterSrc:   settings.imagesPath + 'water.jpg',
            testGif:    settings.imagesPath + 'gif.gif',
            tankSrc:    settings.imagesPath + 'tank.ico'
        }

        this.init = function(){
            _that.initStage();
            _that.initLayers();
            _that.initImages();
            _that.buildGrid();
            _that.initMessages();
            window.onload = function(){
                _that.stage.add(layers.ground_Layer);
                _that.stage.add(layers.main_Layer);
                _that.stage.add(layers.msg_Layer);
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
            layers.ground_Layer = new Kinetic.Layer();
            layers.main_Layer = new Kinetic.Layer();
            layers.msg_Layer = new Kinetic.Layer();
            layers.grid_Layer = new Kinetic.Layer();
        }

        // Init images
        this.initImages = function(){
            images.grass = new Image();
            images.water = new Image();
            images.testgif = new Image();
            images.tank = new Image();
            images.grass.src = images.grassSrc;
            images.water.src = images.waterSrc;
            images.testgif.src = images.testGif;
            images.tank.src = images.tankSrc;
        }

        // Draw the map with units from layers
        this.buildGrid = function(){
            var grassWaterLayer = GameData.getLayer('grassWater');
            var mainLayer = GameData.getLayer('mainID');
            for(var col=settings.showCoors.x1; col < Math.min(grassWaterLayer[0].length, settings.showCoors.x2); col++){
                for(var row=settings.showCoors.y1; row < Math.min(grassWaterLayer.length, settings.showCoors.y2); row++){

                    // Grass/water
                    var grass = new Kinetic.Image({
                        y:      col * settings.cellWidth,
                        x:      row * settings.cellHeight,
                        image : (grassWaterLayer[row][col] == 1) ? images.grass : images.water,
                        width:  settings.cellWidth,
                        height: settings.cellHeight,
                        stroke: settings.cellStroke
                    });

                    // If not '000' - if not empty, so draw the unit
                    if(mainLayer[row][col] != '000'){
                        var mainUnit = new Kinetic.Image({
                            y:      col * settings.cellWidth,
                            x:      row * settings.cellHeight,
                            image : images.tank,
                            width:  settings.cellWidth,
                            height: settings.cellHeight,
                            stroke: settings.cellStroke
                        });
                        layers.main_Layer.add(mainUnit);
                    }

                    // Grid for click events on grid layer
                    var grid = new Kinetic.Rect({
                        x:      col * settings.cellWidth,
                        y:      row * settings.cellHeight,
                        width:  settings.cellWidth,
                        height: settings.cellHeight,
                        xCoor:  col,
                        yCoor:  row,
                        stroke: settings.gridStroke
                    });

                    layers.ground_Layer.add(grass);
                    layers.grid_Layer.add(grid);
                    grid.on('click', _that.cellSelect);
                }
            }
        }


        // Outputs to console info about clicked cell, coordinates, units, ground
        this.cellSelect = function(){
            var _xCoor = this.attrs.xCoor;
            var _yCoor = this.attrs.yCoor;
            var unitID = GameData.getLayer('mainID')[_xCoor][_yCoor];
            console.log(_xCoor+':'+_yCoor);
            console.log(GameData.getCellData({x:_xCoor, y:_yCoor }));
            _that.createCellTooltip(_xCoor, _yCoor);
        }

        this.initCellTooltip = function(){

        }

        this.createCellTooltip = function(x, y){

//            layers.msg_Layer.remove(tooltips.cell);

            tooltips.cell = new Kinetic.Text({
                x: x,
                y: y,
                text: 'Cell Tooltip',
                fontSize: 20,
                fontFamily: 'Tahoma',
                fill: 'blue'
            });


            layers.msg_Layer.add(tooltips.cell);
            layers.msg_Layer.draw();
        }

        // Adds message to grid layer
        this.message = function(text, x, y, fontSize, fontFamily, fill){
            var text = new Kinetic.Text({
                x: x,
                y: y,
                text: text,
                fontSize: fontSize,
                fontFamily: fontFamily,
                fill: fill
            });

            layers.msg_Layer.add(text);
        }


        this.initMessages = function(){
            _that.message('Test text', 900, 20, 20, 'Tahoma', 'black');
        }


    } // var GameDraw

    window.GameDraw = new GameDraw();
})();
