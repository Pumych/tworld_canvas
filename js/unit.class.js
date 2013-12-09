var Debugger = function(){};
Debugger.log = function(message){
    try{
        console.log(message);
    } catch (exception){
        return;
    }
};

var Unit = function(settings){

    var errCounter = 0;
    if(typeof settings === 'undefined'){ Debugger.log('>> Unit() - must have an argument.\n>> Unit() - INTERRUPT'); return; }
    if(typeof settings.ID === 'undefined'){ Debugger.log('>> Unit::ID - not defined.'); errCounter++; }
    if(typeof settings.x === 'undefined' || typeof settings.y === 'undefined'){ Debugger.log('>> Unit:: - must have coordinates. ({x:n, y:m})'); errCounter++; }
    if(typeof settings.type === 'undefined'){ Debugger.log('>> Unit::type - not defined.'); errCounter++; }
    if(errCounter) { Debugger.log('>> Unit() - INTERRUPT'); return; }

    var _settings = {
        x: -1,          // X coordinate on current canvas
        y: -1,          // Y coordinate on current canvas
        imageSrc: -1,
        layer: -1,

        ID: -1,
        type: -1,
        attack: -1,
        shoots: -1,
        range: -1,
        ammo: -1,
        armor: -1,
        hits: -1,
        scan: -1,
        speed: -1
    };  //<<<<<<<<<<<<<<<<< Object must end with ";" !!!!!!!!!!!!!1

    // Constructor
    (function(){
        _settings = settings;
        _settings.image = new Image();
        _settings.image.src = _settings.imageSrc;
//        _settings.image.onload = function(){
//            console.log(_settings);
//            _settings.layer.clearRect(_settings.x, _settings.y, _settings.x+30, _settings.y+30);
//            _settings.layer.drawImage(_settings.image , _settings.x, _settings.y);
//        }
    })();

    this.toString = function(){ console.log(_settings); }
    this.getSettings = function(){ return _settings; }
    this.getCoors = function(){ return {x:_settings.x, y:_settings.y}; }



    this.updateXY = function(x, y){
        _settings.x = x;
        _settings.y = y;
    }

    this.getImage = function(){
        return _settings.image;
    }
};


