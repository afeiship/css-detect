(function () {

  var global = global || this;
  var element = document.createElement('cssdetect');
  var style = element.style;
  var CSS_PREFIXS = ['-webkit-', '-moz-', '-ms-', '-o-', ''];

  function cssDetect (inProperty,inValue,inNoPrefix){
    var property =  inProperty + ':';
    if(!inNoPrefix){
      style.cssText = property + CSS_PREFIXS.join( inValue + ';' +property) + inValue + ';';
    }else{
      style.cssText = property + inValue;
    }
    return style[inProperty].indexOf(inValue) !== -1;
  }

  global.cssDetect = cssDetect;

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = cssDetect;
  }

}());
