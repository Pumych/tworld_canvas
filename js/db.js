///**
// * Replaces DB - layouts
// */
(function(){
    var GameData = function(){
        var _that = this;

        var settings = {
            leftTopX: 22          // Block of visible cells
            , leftTopY: 9
            , rightBottomX: 32
            , rightBottomY: 20
        }

        var layers = {
            grassWater: [
                //                     1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 3 3 3 4 4 4 4 4 4 4 4 4
                // 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9
                [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],  // 0
                [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],  // 1
                [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],  // 2
                [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],  // 3
                [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],  // 4
                [1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],  // 5
                [1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],  // 6
                [1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],  // 7
                [1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],  // 8
                [1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],  // 9
                [1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],  // 10
                [1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],  // 11
                [1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],  // 12
                [1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],  // 13
                [1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],  // 14
                [1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],  // 15
                [1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],  // 16
                [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],  // 17
                [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],  // 18
                [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],  // 19
                [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],  // 20
                [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],  // 21
                [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],  // 22
                [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],  // 23
                [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],  // 24
                [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],  // 25
                [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],  // 26
                [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],  // 27
                [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],  // 28
                [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]   // 29
            ],
            // Contains unit/building ID in HEX
            mainID: [
                // 0     1    2    3     4     5     6     7     8     9     0     1     2     3     4     5     6     7     8     9     0     1     2     3     4     5     6     7     8     9     0     1     2     3     4     5     6     7     8     9     0     1     2     3     4     5     6     7     8     9
                ['000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000'],  // 0
                ['000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000'],  // 0
                ['000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000'],  // 0
                ['000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000'],  // 0
                ['000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000'],  // 0
                ['000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000'],  // 0
                ['000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000'],  // 0
                ['000','000','000','000','001','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000'],  // 0
                ['000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000'],  // 0
                ['000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000'],  // 0
                ['000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000'],  // 0
                ['000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000'],  // 0
                ['000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000'],  // 0
                ['000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000'],  // 0
                ['000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000'],  // 0
                ['000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000'],  // 0
                ['000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000'],  // 0
                ['000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000'],  // 0
                ['000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000'],  // 0
                ['000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000'],  // 0
                ['000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000'],  // 0
                ['000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000'],  // 0
                ['000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000'],  // 0
                ['000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000'],  // 0
                ['000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000'],  // 0
                ['000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000'],  // 0
                ['000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000'],  // 0
                ['000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000'],  // 0
                ['000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000'],  // 0
                ['000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000','000'],  // 0
            ]
        }

        var units = {
            '000': {
                ID: 0
            },
            '001': {
                    ID:     0x001
                ,   name:   'Tank'
                ,   speed:  5
                ,   radar:  10
            }
        }

        this.getUnitData = function(unitID){
            return units[unitID];
        }

        this.getCellData = function(coors){
            return cellData = {
                ground : (layers.grassWater[coors.x][coors.y] == 1) ? 'grass' : 'water',
                unit: _that.getUnitData(layers.mainID[coors.x][coors.y])
            }
        }



        this.getSettings = function(){
            return settings;
        }

        this.getLayer = function(layerName){
            return layers[layerName];
        }
    } // var GameData

    window.GameData = new GameData();
})();