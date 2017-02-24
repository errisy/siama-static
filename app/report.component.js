"use strict";var _createClass=function(){function a(b,f){for(var h,g=0;g<f.length;g++)h=f[g],h.enumerable=h.enumerable||!1,h.configurable=!0,"value"in h&&(h.writable=!0),Object.defineProperty(b,h.key,h)}return function(b,f,g){return f&&a(b.prototype,f),g&&a(b,g),b}}(),_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a};function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var __decorate=function(a,b,f,g){var l,h=arguments.length,j=3>h?b:null===g?g=Object.getOwnPropertyDescriptor(b,f):g;if("object"===("undefined"==typeof Reflect?"undefined":_typeof(Reflect))&&"function"==typeof Reflect.decorate)j=Reflect.decorate(a,b,f,g);else for(var m=a.length-1;0<=m;m--)(l=a[m])&&(j=(3>h?l(j):3<h?l(b,f,j):l(b,f))||j);return 3<h&&j&&Object.defineProperty(b,f,j),j},__metadata=function(a,b){if("object"===("undefined"==typeof Reflect?"undefined":_typeof(Reflect))&&"function"==typeof Reflect.metadata)return Reflect.metadata(a,b)},__awaiter=function(a,b,f,g){return new(f||(f=Promise))(function(h,j){function l(o){try{n(g.next(o))}catch(p){j(p)}}function m(o){try{n(g["throw"](o))}catch(p){j(p)}}function n(o){o.done?h(o.value):new f(function(p){p(o.value)}).then(l,m)}n((g=g.apply(a,b||[])).next())})};try{require.resolve("errisy-task")&&function(){var a=require("errisy-task");__awaiter=function(b,f,g,h){return new(g||(g=a))(function(j,l,m){m?function(){var n=function(s){try{m.cancelled||p(h.next(s))}catch(u){l(u)}},o=function(s){try{m.cancelled||p(h["throw"](s))}catch(u){l(u)}},p=function(s){m.clear(),s.done?j(s.value):m.append(new g(function(u){u(s.value)})).then(n,o)};p((h=h.apply(b,f||[])).next())}():function(){var n=function(s){try{p(h.next(s))}catch(u){l(u)}},o=function(s){try{p(h["throw"](s))}catch(u){l(u)}},p=function(s){s.done?j(s.value):new g(function(u){u(s.value)}).then(n,o)};p((h=h.apply(b,f||[])).next())}()})}}()}catch(a){}var core_1=require("@angular/core"),app_client_1=require("app/app.client"),util=require("errisy-util"),ReportComponent=function(){function a(b,f){_classCallCheck(this,a),this.appService=b,this.changeDetectorRef=f,this.readonly=!0,this.report={}}return _createClass(a,[{key:"showError",value:function(f){this.errorTask&&this.errorTask.cancel(),this.errorTask=this.showErrorTask(f)}},{key:"showErrorTask",value:function(f){return __awaiter(this,void 0,void 0,regeneratorRuntime.mark(function g(){return regeneratorRuntime.wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return this.error=f,j.next=3,util.wait(1500);case 3:this.error="",this.changeDetectorRef.detectChanges();case 5:case"end":return j.stop();}},g,this)}))}},{key:"ngAfterContentInit",value:function(){return __awaiter(this,void 0,void 0,regeneratorRuntime.mark(function f(){var g;return regeneratorRuntime.wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.prev=0,j.next=3,this.appService.loadReport("id");case 3:g=j.sent,this.report=g,j.next=10;break;case 7:j.prev=7,j.t0=j["catch"](0),this.showError(j.t0.reason);case 10:case"end":return j.stop();}},f,this,[[0,7]])}))}},{key:"onImageChange",value:function(f){return __awaiter(this,void 0,void 0,regeneratorRuntime.mark(function g(){var h,j;return regeneratorRuntime.wrap(function(m){for(;;)switch(m.prev=m.next){case 0:if(h=f.target.files,void 0!=h&&0!=h.length){m.next=3;break}return m.abrupt("return");case 3:if(j=h.item(0),!(2097152<j.size)){m.next=8;break}this.error="Image is greater than 2M!",m.next=18;break;case 8:return m.prev=8,m.next=11,this.appService.upload(j);case 11:this.report.Image=m.sent,this.changeDetectorRef.detectChanges(),m.next=18;break;case 15:m.prev=15,m.t0=m["catch"](8),this.showError(m.t0.reason);case 18:case"end":return m.stop();}},g,this,[[8,15]])}))}},{key:"Clear",value:function(){this.report={}}},{key:"Delete",value:function(){return __awaiter(this,void 0,void 0,regeneratorRuntime.mark(function f(){return regeneratorRuntime.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.prev=0,h.next=3,this.appService.deleteReport(this.report.InspectionNumber);case 3:if(!h.sent){h.next=5;break}this.report={};case 5:h.next=10;break;case 7:h.prev=7,h.t0=h["catch"](0),this.showError(h.t0.reason);case 10:case"end":return h.stop();}},f,this,[[0,7]])}))}},{key:"checkError",value:function(){if(!this.report)return this.showError("Invalid report!"),this.report={},!0;var f=this.report;return f.InspectionNumber&&/^\w+$/ig.test(f.InspectionNumber)?f.InspectionDate&&/^\d{2}\/\d{2}\/\d+$/ig.test(f.InspectionDate)?f.StructureNumber&&/^\d+$/ig.test(f.StructureNumber)?!1:(this.showError("Invalid Structure Number! It must be digits only."),!0):(this.showError("Invalid Inspection Date! It must be DD/MM/YYYY format."),!0):(this.showError("Invalid Inspection Number!"),!0)}},{key:"Submit",value:function(){return __awaiter(this,void 0,void 0,regeneratorRuntime.mark(function f(){return regeneratorRuntime.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:if(!this.checkError()){h.next=2;break}return h.abrupt("return");case 2:return console.log("no error"),h.prev=3,h.next=6,this.appService.saveReport(this.report);case 6:h.next=11;break;case 8:h.prev=8,h.t0=h["catch"](3),this.showError(h.t0.reason);case 11:case"end":return h.stop();}},f,this,[[3,8]])}))}}]),a}();ReportComponent=__decorate([core_1.Component({selector:"ui-report,[ui-report]",template:" <form> <fieldset> <legend>Inspection Report</legend> <div class=\"operations\"> <div class=\"edit\" (click)=\"readonly=!readonly\"> <span>Edit</span> <div class=\"btn-edit\"></div> </div> </div> <div class=\"fields\"> <div class=\"field\"> <label for=\"InspectionNumber\">Inspection No:</label> <input name=\"InspectionNumber\" type=\"text\" required [(ngModel)]=\"report.InspectionNumber\" pattern=\"/^\\w+$/ig\" [readonly]=\"readonly\"> </div> <div class=\"field\"> <label for=\"InspectionDate\">Inspection Date:</label> <input name=\"InspectionDate\" [(ngModel)]=\"report.InspectionDate\" [readonly]=\"readonly\" required pattern=\"/^\\d{2}\\/\\d{2}\\/\\d+$/ig\" type=\"text\"> <div [(ui-datepicker)]=\"report.InspectionDate\" [readonly]=\"readonly\"></div> </div> <div class=\"field\"> <label for=\"StructureNumber\">Structure No:</label> <input name=\"StructureNumber\" [(ngModel)]=\"report.StructureNumber\" required type=\"number\" [readonly]=\"readonly\"> </div> <div class=\"field\"> <label for=\"DeckType\">Deck Type:</label> <select name=\"DeckType\" [(ngModel)]=\"report.DeckType\" [disabled]=\"readonly\"> <option value=\"Concrete\">Concrete</option> <option value=\"Steel\">Steel</option> <option value=\"Sealed\">Sealed</option> <option value=\"Wood\">Wood</option> <option value=\"Earth\">Earth</option> </select> </div> <div class=\"field\"> <label for=\"MaintenanceRequest\">Maintenance Req:</label> <div [(ui-checkbox-slide)]=\"report.MaintenanceRequest\" [readonly]=\"readonly\"></div> </div> <div class=\"field\"> <label for=\"HighwayBridge\">Highway Bridge:</label> <div [(ui-checkbox-tick)]=\"report.HighwayBridge\" [readonly]=\"readonly\"></div> </div> </div> <div class=\"uploader\"> <div class=\"title\">Upload an image.</div> <div class=\"input\"> <input name=\"BridgeImage\" type=\"file\" accept=\"image/*\" (change)=\"onImageChange($event)\" [disabled]=\"readonly\"> <label for=\"BridgeImage\">(max 2MB)</label> </div> </div> <div class=\"image\" [style.background-image]=\"report.Image?('url('+report.Image+')'):''\"> </div> <div class=\"error\">{{error}}</div> <div class=\"buttons\"> <div class=\"btn\" (click)=\"Clear()\">Clear</div> <div class=\"btn\" (click)=\"Delete()\">Delete</div> <div class=\"btn\" (click)=\"Submit()\">Submit</div> </div> </fieldset> </form>",styles:[":host{display:flex;flex:1 1 auto;padding:15px;flex-direction:column;align-items:stretch}:host>form{display:flex;flex-direction:column;align-items:stretch}:host>form>fieldset>div.operations{display:flex;flex-direction:row;justify-content:flex-end;margin:10px 0 10px 0}:host>form>fieldset>div.operations>div.edit{flex:0 0 auto;display:flex;flex-direction:row;align-items:center;cursor:pointer;padding:4px;border-radius:4px}:host>form>fieldset>div.operations>div.edit:hover{background-color:#fc8}:host>form>fieldset>div.operations>div.edit:active{background-color:#fa3}:host>form>fieldset>div.operations>div.edit>span{margin:0 5px 0 5px}:host>form>fieldset>div.operations>div.edit>div.btn-edit{flex:0 0 24px;width:24px;height:24px;background-image:url(svg/edit.svg);background-position:center center;background-repeat:no-repeat;background-size:contain}:host>form>fieldset>div.fields{display:flex;flex-direction:row;flex-wrap:wrap;position:relative;justify-content:space-around}:host>form>fieldset>div.fields>div.field{display:flex;margin:10px 0 10px 0;align-items:center}@media screen and (max-width:450px){:host>form>fieldset>div.fields>div.field{flex:0 0 100%;flex-direction:column}}@media screen and (min-width:450px) and (max-width:750px){:host>form>fieldset>div.fields>div.field{flex:0 0 100%;flex-direction:row}}@media screen and (min-width:750px) and (max-width:1100px){:host>form>fieldset>div.fields>div.field{flex:0 0 50%;flex-direction:row}}@media screen and (min-width:1100px){:host>form>fieldset>div.fields>div.field{flex:0 0 33%;flex-direction:row}}:host>form>fieldset>div.fields>div.field>label{margin-right:8px}:host>form>fieldset>div.fields>div.field>div.ui-checkbox-slide{flex:0 0 40px;width:40px}:host>form>fieldset>div.fields>div.field>div.ui-checkbox-tick{flex:0 0 20px;width:20px}:host>form>fieldset>div.uploader{flex:0 0 auto;display:flex;align-items:stretch;flex-direction:column;margin:20px 0 10px 0}:host>form>fieldset>div.uploader>div.title{flex:0 0 auto;font-size:28px;margin:5px 0 5px 0}:host>form>fieldset>div.uploader>div.input{flex:0 0 auto;display:flex;flex-direction:row}:host>form>fieldset>div.image{flex:0 0 120px;width:300px;height:120px;border:1px solid #ccc;background-position:center center;background-repeat:no-repeat;background-size:contain}:host>form>fieldset>div.error{flex:0 0 32px;height:32px;color:red}:host>form>fieldset>div.buttons{flex:0 0 auto;display:flex;flex-direction:row;justify-content:flex-end}:host>form>fieldset>div.buttons>div.btn{padding:4px 12px 4px 12px;box-shadow:rgba(48,48,48,.4) 2px 2px 4px;border:1px solid #000;cursor:pointer;user-select:none;margin:0 5px 0 5px}:host>form>fieldset>div.buttons>div.btn:hover{background-color:#fc8}:host>form>fieldset>div.buttons>div.btn:active{background-color:#fa3}:host>form>fieldset>div.buttons>div.btn:last-child{margin-left:25px}:host>form>fieldset>div.buttons>div.btn:active{box-shadow:rgba(48,48,48,.4) 1px 1px 2px}@media screen and (max-width:750px){.narrow>:host>form>fieldset>div.fields>div.field{flex:0 0 100%;flex-direction:column}}@media screen and (min-width:750px) and (max-width:960px){.narrow>:host>form>fieldset>div.fields>div.field{flex:0 0 100%;flex-direction:row}}@media screen and (min-width:960px) and (max-width:1440px){.narrow>:host>form>fieldset>div.fields>div.field{flex:0 0 50%;flex-direction:row}}@media screen and (min-width:1440px){.narrow>:host>form>fieldset>div.fields>div.field{flex:0 0 33%;flex-direction:row}}"],encapsulation:core_1.ViewEncapsulation.Emulated,providers:[app_client_1.AppService]}),__metadata("design:paramtypes",[app_client_1.AppService,core_1.ChangeDetectorRef])],ReportComponent),exports.ReportComponent=ReportComponent;