"use strict";var _createClass=function(){function a(b,e){for(var g,f=0;f<e.length;f++)g=e[f],g.enumerable=g.enumerable||!1,g.configurable=!0,"value"in g&&(g.writable=!0),Object.defineProperty(b,g.key,g)}return function(b,e,f){return e&&a(b.prototype,e),f&&a(b,f),b}}(),_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a};function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var __decorate=function(a,b,e,f){var j,g=arguments.length,h=3>g?b:null===f?f=Object.getOwnPropertyDescriptor(b,e):f;if("object"===("undefined"==typeof Reflect?"undefined":_typeof(Reflect))&&"function"==typeof Reflect.decorate)h=Reflect.decorate(a,b,e,f);else for(var l=a.length-1;0<=l;l--)(j=a[l])&&(h=(3>g?j(h):3<g?j(b,e,h):j(b,e))||h);return 3<g&&h&&Object.defineProperty(b,e,h),h},__metadata=function(a,b){if("object"===("undefined"==typeof Reflect?"undefined":_typeof(Reflect))&&"function"==typeof Reflect.metadata)return Reflect.metadata(a,b)},core_1=require("@angular/core"),SlideCheckboxComponent=function(){function a(){_classCallCheck(this,a),this.readonly=!1,this.checked=!1,this.ComponentClass=!0,this.CheckedChange=new core_1.EventEmitter(!0)}return _createClass(a,[{key:"onClick",value:function(){this.readonly||(this.checked=!this.checked,this.CheckedChange.emit(this.checked))}},{key:"Checked",set:function(e){this.checked=e}}]),a}();__decorate([core_1.Input(),__metadata("design:type",Boolean)],SlideCheckboxComponent.prototype,"readonly",void 0),__decorate([core_1.HostListener("click"),__metadata("design:type",Function),__metadata("design:paramtypes",[]),__metadata("design:returntype",void 0)],SlideCheckboxComponent.prototype,"onClick",null),__decorate([core_1.HostBinding("class.ui-checkbox-slide"),__metadata("design:type",Boolean)],SlideCheckboxComponent.prototype,"ComponentClass",void 0),__decorate([core_1.Input("ui-checkbox-slide"),__metadata("design:type",Boolean),__metadata("design:paramtypes",[Boolean])],SlideCheckboxComponent.prototype,"Checked",null),__decorate([core_1.Output("ui-checkbox-slideChange"),__metadata("design:type",core_1.EventEmitter)],SlideCheckboxComponent.prototype,"CheckedChange",void 0),SlideCheckboxComponent=__decorate([core_1.Component({selector:"ui-checkbox-slide,[ui-checkbox-slide]",template:" <svg viewBox=\"0 0 50 30\" [class.checked]=\"checked\" [class.readonly]=\"readonly\"> <rect x=\"3\" y=\"3\" width=\"44\" height=\"24\" rx=\"12\" ry=\"12\" stroke-width=\"3\" stroke=\"black\" fill=\"#888\"></rect> <circle id=\"unchecked\" cx=\"15\" cy=\"15\" r=\"12\" stroke-width=\"3\" fill-opacity=\"1\" stroke-opacity=\"1\" stroke=\"black\" fill=\"white\"></circle> <circle id=\"checked\" cx=\"35\" cy=\"15\" r=\"12\" stroke-width=\"3\" fill-opacity=\"0\" stroke-opacity=\"0\" stroke=\"black\" fill=\"white\"></circle> </svg>",styles:[":host{cursor:pointer}:host>svg.checked>rect{fill:green}:host>svg.checked>circle#unchecked{fill-opacity:0;stroke-opacity:0}:host>svg.checked>circle#checked{fill-opacity:1;stroke-opacity:1}:host>svg.readonly>rect{fill:#ccc}"],encapsulation:core_1.ViewEncapsulation.Emulated})],SlideCheckboxComponent),exports.SlideCheckboxComponent=SlideCheckboxComponent;