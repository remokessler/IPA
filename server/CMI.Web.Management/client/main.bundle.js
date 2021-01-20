webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var root_component_1 = __webpack_require__("../../../../../src/app/root/root.component.ts");
var navigation_component_1 = __webpack_require__("../../../../../src/app/navigation/navigation.component.ts");
var footer_component_1 = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
var headerContent_component_1 = __webpack_require__("../../../../../src/app/header/content/headerContent.component.ts");
var header_component_1 = __webpack_require__("../../../../../src/app/header/header.component.ts");
var navigationContent_component_1 = __webpack_require__("../../../../../src/app/navigation/content/navigationContent.component.ts");
var blocker_component_1 = __webpack_require__("../../../../../src/app/ui/blocker/blocker.component.ts");
var loader_component_1 = __webpack_require__("../../../../../src/app/ui/loader/loader.component.ts");
var spinner_component_1 = __webpack_require__("../../../../../src/app/ui/spinner/spinner.component.ts");
var progressbar_component_1 = __webpack_require__("../../../../../src/app/ui/progressbar/progressbar.component.ts");
var footerContent_component_1 = __webpack_require__("../../../../../src/app/footer/content/footerContent.component.ts");
var client_module_1 = __webpack_require__("../../../../../src/app/client.module.ts");
var parameter_component_1 = __webpack_require__("../../../../../src/app/parameterManager/parameter/parameter.component.ts");
var parameterList_component_1 = __webpack_require__("../../../../../src/app/parameterManager/parameterList/parameterList.component.ts");
var highlight_component_1 = __webpack_require__("../../../../../src/app/highlight/highlight.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                root_component_1.RootComponent,
                navigation_component_1.NavigationComponent,
                navigationContent_component_1.NavigationContentComponent,
                footer_component_1.FooterComponent,
                footerContent_component_1.FooterContentComponent,
                header_component_1.HeaderComponent,
                headerContent_component_1.HeaderContentComponent,
                blocker_component_1.BlockerComponent,
                loader_component_1.LoaderComponent,
                spinner_component_1.SpinnerComponent,
                progressbar_component_1.ProgressbarComponent,
                parameter_component_1.ParameterComponent,
                parameterList_component_1.ParameterListComponent,
                highlight_component_1.HighlightComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                client_module_1.ClientModule.forRoot(),
            ],
            bootstrap: [root_component_1.RootComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "../../../../../src/app/client.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var animations_1 = __webpack_require__("../../../platform-browser/esm5/animations.js");
var parameterService_1 = __webpack_require__("../../../../../src/app/services/parameterService.ts");
var httpService_1 = __webpack_require__("../../../../../src/app/services/httpService.ts");
var ClientModule = /** @class */ (function () {
    function ClientModule() {
    }
    ClientModule_1 = ClientModule;
    ClientModule.forRoot = function () {
        return {
            ngModule: ClientModule_1,
            providers: [
                httpService_1.HttpService,
                parameterService_1.ParameterService,
            ]
        };
    };
    ClientModule = ClientModule_1 = __decorate([
        core_1.NgModule({
            declarations: [],
            exports: [
                router_1.RouterModule,
                animations_1.BrowserAnimationsModule,
            ],
            imports: [
                router_1.RouterModule,
                http_1.HttpClientModule,
                animations_1.BrowserAnimationsModule,
            ]
        }),
        __metadata("design:paramtypes", [])
    ], ClientModule);
    return ClientModule;
    var ClientModule_1;
}());
exports.ClientModule = ClientModule;


/***/ }),

/***/ "../../../../../src/app/footer/content/footerContent.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n\t<hr class=\"footer-line visible-xs\">\r\n\t<img class=\"visible-xs\" src=\"./assets/img/logo-CH.svg\"\r\n\t\t onerror=\"this.onerror = null; this.src = './assets/img/logo-CH.png'\" alt=\"back to home\">\r\n</div>\r\n\r\n<address>\r\n\t<span class=\"hidden-xs\">Schweizerisches Bundesarchiv BAR</span>\r\n\t<!--nav class=\"pull-right\">\r\n        <ul>\r\n            <li><a href=\"#{{ '/de/rechtliches' | localizeLink }}\">{{ 'Rechtliches' | translate:'navigation.legal' }}</a></li>\r\n            <li><a href=\"#{{ '/de/nutzungsbestimmungen' | localizeLink }}\">{{ 'Nutzungsbestimmungen' | translate:'navigation.termsOfUse' }}</a></li>\r\n            <li><a href=\"#{{ '/de/kontakt' | localizeLink }}\">{{ 'Kontakt' | translate:'navigation.contact' }}</a></li>\r\n        </ul>\r\n    </nav-->\r\n</address>\r\n"

/***/ }),

/***/ "../../../../../src/app/footer/content/footerContent.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var FooterContentComponent = /** @class */ (function () {
    function FooterContentComponent(_elemRef) {
        this._elemRef = _elemRef;
        this._elem = this._elemRef.nativeElement;
    }
    FooterContentComponent.prototype.ngOnInit = function () {
    };
    FooterContentComponent.prototype.ngAfterViewInit = function () {
    };
    Object.defineProperty(FooterContentComponent.prototype, "language", {
        get: function () {
            return '';
        },
        enumerable: true,
        configurable: true
    });
    FooterContentComponent = __decorate([
        core_1.Component({
            selector: 'cmi-viaduc-footer-content',
            template: __webpack_require__("../../../../../src/app/footer/content/footerContent.component.html")
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], FooterContentComponent);
    return FooterContentComponent;
}());
exports.FooterContentComponent = FooterContentComponent;


/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer>\r\n\t<cmi-viaduc-footer-content *ngIf=\"!reload\"></cmi-viaduc-footer-content>\r\n</footer>\r\n"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.reload = false;
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.prototype.ngOnDestroy = function () {
    };
    FooterComponent = __decorate([
        core_1.Component({
            selector: 'cmi-viaduc-footer',
            template: __webpack_require__("../../../../../src/app/footer/footer.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());
exports.FooterComponent = FooterComponent;


/***/ }),

/***/ "../../../../../src/app/header/content/headerContent.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"clearfix\">\r\n\t<section class=\"nav-services clearfix\">\r\n\t\t<div *ngIf=\"versionInfo\" class=\"versioninfo\">{{versionInfo}}</div>\r\n\r\n\t\t<h2 class=\"sr-only\">Sprachwahl</h2>\r\n\t\t<nav class=\"nav-lang\">\r\n\t\t\t<ul>\r\n\t\t\t\t<li *ngFor=\"let lang of languages\">\r\n\t\t\t\t\t<a (click)=\"setLanguage(lang)\" href=\"javascript:void(0)\" [lang]=\"lang.key\" [title]=\"lang.label\"\r\n\t\t\t\t\t   [attr.aria-label]=\"lang.label\" [ngClass]=\"{ 'active': lang.active }\">{{lang.short}}</a>\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n\t\t</nav>\r\n\t\t<nav class=\"nav-service\">\r\n\t\t\t<ul class=\"download-link\">\r\n\t\t\t\t<li>&nbsp;\r\n\t\t\t\t\t<a href=\"javascript:void(0)\"><span>Anmelden</span></a>\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n\t\t</nav>\r\n\t</section>\r\n</div>\r\n\r\n<div class=\"clearfix\">\r\n\t<a href=\"#/{{language}}\" class=\"brand hidden-xs\">\r\n\t\t<img src=\"./assets/img/logo-CH.svg\" onerror=\"this.onerror = null; this.src = './assets/img/logo-CH.png'\"\r\n\t\t\t alt=\"Logo der Schweizerischen Eidgenossenschaft – zur Startseite\"/>\r\n\t\t<h1>Management-Client des Bundesarchivs</h1>\r\n\t</a>\r\n</div>\r\n\r\n<div class=\"logininfo\">\r\n<span>\r\n    <span>Sie sind nicht angemeldet</span>\r\n    \t<a class=\"glyphicon glyphicon-info-sign infoicon\" data-toggle=\"tooltip\" data-placement=\"bottom\"\r\n\t   \t\ttitle=\"Melden Sie sich an, um die Management-Funktionen verwenden zu können.\"></a>\r\n\t</span>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/header/content/headerContent.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var HeaderContentComponent = /** @class */ (function () {
    function HeaderContentComponent(_elemRef) {
        this._elemRef = _elemRef;
        this._elem = this._elemRef.nativeElement;
    }
    HeaderContentComponent.prototype.ngOnInit = function () {
    };
    HeaderContentComponent.prototype.ngAfterViewInit = function () {
    };
    HeaderContentComponent.prototype.refresh = function () {
    };
    Object.defineProperty(HeaderContentComponent.prototype, "versionInfo", {
        get: function () {
            return '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeaderContentComponent.prototype, "languages", {
        get: function () {
            this.refresh();
            return this._languages;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeaderContentComponent.prototype, "language", {
        get: function () {
            return 'de';
        },
        enumerable: true,
        configurable: true
    });
    HeaderContentComponent.prototype.setLanguage = function (lang) {
    };
    HeaderContentComponent = __decorate([
        core_1.Component({
            selector: 'cmi-viaduc-header-content',
            template: __webpack_require__("../../../../../src/app/header/content/headerContent.component.html")
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], HeaderContentComponent);
    return HeaderContentComponent;
}());
exports.HeaderContentComponent = HeaderContentComponent;


/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\r\n\t<cmi-viaduc-header-content *ngIf=\"!reload\"></cmi-viaduc-header-content>\r\n</header>\r\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this._contextSubscription = null;
        this.reload = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        this._contextSubscription = null;
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'cmi-viaduc-header',
            template: __webpack_require__("../../../../../src/app/header/header.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;


/***/ }),

/***/ "../../../../../src/app/highlight/highlight.component.html":
/***/ (function(module, exports) {

module.exports = "<span [innerHTML]=\"getInnerHTML()\">\r\n\r\n</span>\r\n"

/***/ }),

/***/ "../../../../../src/app/highlight/highlight.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/highlight/highlight.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var HighlightComponent = /** @class */ (function () {
    function HighlightComponent() {
    }
    HighlightComponent.prototype.getInnerHTML = function () {
        if (this.text && this.highlight) {
            var position = this.text.toLowerCase().indexOf(this.highlight.toLowerCase());
            if (position !== -1) {
                var innerHTML = '', replaceString = this.text.substr(position, this.highlight.length), split = this.text.split(replaceString), last = split.pop();
                for (var _i = 0, split_1 = split; _i < split_1.length; _i++) {
                    var s = split_1[_i];
                    innerHTML += s;
                    innerHTML += '<ins>' + replaceString + '</ins>';
                }
                innerHTML += last;
                return innerHTML;
            }
        }
        return this.text;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], HighlightComponent.prototype, "highlight", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], HighlightComponent.prototype, "text", void 0);
    HighlightComponent = __decorate([
        core_1.Component({
            selector: 'cmi-viaduc-highlight',
            template: __webpack_require__("../../../../../src/app/highlight/highlight.component.html"),
            styles: [__webpack_require__("../../../../../src/app/highlight/highlight.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], HighlightComponent);
    return HighlightComponent;
}());
exports.HighlightComponent = HighlightComponent;


/***/ }),

/***/ "../../../../../src/app/navigation/content/navigationContent.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"sr-only\">Navigation</h2>\r\n<!-- The mobile navigation -->\r\n<section [ngClass]=\"getMainMobileNavCss()\">\r\n\t<div class=\"table-row\">\r\n\t\t<div class=\"nav-mobile-header\">\r\n\t\t\t<div [ngClass]=\"getMainTableNavCss()\">\r\n                    <span class=\"nav-mobile-logo\">\r\n                        <img src=\"./assets/img/swiss.svg\"\r\n\t\t\t\t\t\t\t onerror=\"this.onerror = null; this.src = './assets/img/swiss.png'\"\r\n\t\t\t\t\t\t\t alt=\"Logo der Schweizerischen Eidgenossenschaft – zur Startseite\"/>\r\n                    </span>\r\n\t\t\t\t<h1><a href=\"#/\">Management-Client des Bundesarchivs</a></h1>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div [ngClass]=\"getUserTableCellNavCss()\">\r\n\t\t\t<a class=\"nav-mobile-menu dropdown-toggle\" (click)=\"toggleUserMobileNav()\"><span\r\n\t\t\t\tclass=\"glyphicon glyphicon-user more-pad\"></span></a>\r\n\t\t\t<div class=\"drilldown dropdown-menu\" role=\"menu\">\r\n\t\t\t\t<div class=\"drilldown-container\" [style.height]=\"drillDownCointainerHeight\">\r\n\t\t\t\t\t<nav class=\"nav-page-list\">\r\n\t\t\t\t\t\t<ul role=\"menu\">\r\n\t\t\t\t\t\t\t<li class=\"infoicon-container\" role=\"presentation\">\r\n\t\t\t\t\t\t\t\t<span>Sie sind nicht angemeldet</span>\r\n\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-info-sign infoicon\" data-toggle=\"tooltip\"\r\n\t\t\t\t\t\t\t\t\t  data-placement=\"bottom\"\r\n\t\t\t\t\t\t\t\t\t  title=\"Melden Sie sich an, um die Management-Funktionen verwenden zu können.'\"></span>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li role=\"presentation\">\r\n\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" role=\"menuitem\">Anmelden</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t<a class=\"yamm-close-bottom\"><span class=\"icon icon--top\" (click)=\"toggleUserMobileNav()\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t   aria-hidden=\"true\"></span></a>\r\n\t\t\t\t\t</nav>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/navigation/content/navigationContent.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".infoicon-container {\n  padding: 10px;\n}\n.more-pad {\n  padding-right: 15px;\n}\n.no-icon:after {\n  content: none !important;\n}\n.search-icon-plus {\n  position: absolute;\n  margin-left: 5px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navigation/content/navigationContent.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var NavigationContentComponent = /** @class */ (function () {
    function NavigationContentComponent(_elemRef) {
        this._elemRef = _elemRef;
        this.mobileMainNavOpen = false;
        this.mobileUserNavOpen = false;
        this.onMobileNavOpen = new core_1.EventEmitter();
        this._elem = this._elemRef.nativeElement;
    }
    NavigationContentComponent.prototype.ngAfterViewInit = function () {
    };
    Object.defineProperty(NavigationContentComponent.prototype, "language", {
        get: function () {
            return '';
        },
        enumerable: true,
        configurable: true
    });
    NavigationContentComponent.prototype.toggleMainMobileNav = function () {
        this.mobileMainNavOpen = !this.mobileMainNavOpen;
        if (this.mobileUserNavOpen) {
            this.mobileUserNavOpen = false;
            this.onMobileNavOpen.emit(this.mobileUserNavOpen);
        }
        this.onMobileNavOpen.emit(this.mobileMainNavOpen);
    };
    NavigationContentComponent.prototype.getMainMobileNavCss = function () {
        return (this.mobileMainNavOpen || this.mobileUserNavOpen) ? 'nav-mobile nav-open' : 'nav-mobile nav';
    };
    NavigationContentComponent.prototype.getMainTableNavCss = function () {
        return this.mobileMainNavOpen ? 'table-row nav-open' : 'table-row nav';
    };
    NavigationContentComponent.prototype.getMainTableCellNavCss = function () {
        return this.mobileMainNavOpen ? 'table-cell dropdown open' : 'table-cell dropdown';
    };
    NavigationContentComponent.prototype.toggleUserMobileNav = function () {
        this.mobileUserNavOpen = !this.mobileUserNavOpen;
        if (this.mobileMainNavOpen) {
            this.mobileMainNavOpen = false;
            this.onMobileNavOpen.emit(this.mobileMainNavOpen);
        }
        this.onMobileNavOpen.emit(this.mobileUserNavOpen);
    };
    NavigationContentComponent.prototype.getUserTableCellNavCss = function () {
        return this.mobileUserNavOpen ? 'table-cell dropdown open' : 'table-cell dropdown';
    };
    Object.defineProperty(NavigationContentComponent.prototype, "drillDownCointainerHeight", {
        get: function () {
            var dropdownHeight = (window.screen.height) - 91;
            return (this.mobileUserNavOpen || this.mobileMainNavOpen) ? dropdownHeight + 'px' : 'auto';
        },
        enumerable: true,
        configurable: true
    });
    NavigationContentComponent.prototype.nullifyClick = function (event) {
        var senderElementName = event.target.tagName.toLowerCase();
        if (senderElementName !== 'a') {
            event.stopPropagation();
        }
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], NavigationContentComponent.prototype, "onMobileNavOpen", void 0);
    NavigationContentComponent = __decorate([
        core_1.Component({
            selector: 'cmi-viaduc-nav-content',
            template: __webpack_require__("../../../../../src/app/navigation/content/navigationContent.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navigation/content/navigationContent.component.less")]
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], NavigationContentComponent);
    return NavigationContentComponent;
}());
exports.NavigationContentComponent = NavigationContentComponent;


/***/ }),

/***/ "../../../../../src/app/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<nav [ngClass]=\"getNavCss()\" id=\"main-navigation\">\r\n\t<cmi-viaduc-nav-content (onMobileNavOpen)=\"onMobileNavToggle($event)\" *ngIf=\"!reload\"></cmi-viaduc-nav-content>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/navigation/navigation.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nav-mobile {\n  z-index: 99;\n}\n.nav-main.yamm .nav {\n  margin: 0;\n}\n.yamm-content .container-fluid > i {\n  font-size: 2em;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navigation/navigation.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
        this._mobileNavOpen = false;
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent.prototype.ngOnDestroy = function () {
    };
    NavigationComponent.prototype.onMobileNavToggle = function (open) {
        this._mobileNavOpen = open;
    };
    NavigationComponent.prototype.getNavCss = function () {
        return this._mobileNavOpen ? 'nav-main yamm navbar nav-open' : 'nav-main yamm navbar';
    };
    NavigationComponent = __decorate([
        core_1.Component({
            selector: 'cmi-viaduc-nav',
            template: __webpack_require__("../../../../../src/app/navigation/navigation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navigation/navigation.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());
exports.NavigationComponent = NavigationComponent;


/***/ }),

/***/ "../../../../../src/app/parameterManager/parameter/parameter.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"parameter\" [class]=\"getErrorClass()\" [title]=\"parameter.description ? parameter.description : ''\">\r\n\t<div class=\"col-md-3\">\r\n\t\t<cmi-viaduc-highlight [text]=\"parameter.name\" [highlight]=\"searchString\"></cmi-viaduc-highlight>\r\n\t</div>\r\n\t<var class=\"col-md-3\">\r\n\t\t{{parameter.default}}\r\n\t</var>\r\n\t<div class=\"col-md-4\">\r\n\t\t<input [class]=\"getInputClass()\" [type]=\"parameter.type\" (focus)=\"onFocus()\" (change)=\"onValueChanged($event)\" [checked]=\"checked\" [value]=\"value\">\r\n\t</div>\r\n\t<div *ngIf=\"active\" class=\"col-md-2\">\r\n\t\t<input type=\"button\" class=\"btn\" value=\"Speichern\" (click)=\"saveParameter()\">\r\n\t\t<input type=\"button\" class=\"btn\" value=\"Abbrechen\" (click)=\"cancelEdit()\">\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/parameterManager/parameter/parameter.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".parameter-list {\n  border-bottom: 1px solid #ddd;\n  border-top: 1px solid #ddd;\n  margin-left: 5px;\n  margin-right: 5px;\n}\n.parameter-list div .form-control[type='text'],\n.parameter-list var .form-control[type='text'],\n.parameter-list div .form-control[type='number'],\n.parameter-list var .form-control[type='number'] {\n  display: initial;\n}\n.parameter-list div .form-control[type='checkbox'],\n.parameter-list var .form-control[type='checkbox'] {\n  display: initial;\n  width: auto;\n}\n.parameter-list div .highlighted,\n.parameter-list var .highlighted {\n  background: #ff9;\n  color: #000;\n  text-decoration: none;\n}\n.parameter-list div[class*=col-],\n.parameter-list var[class*=col-] {\n  margin-top: 1em;\n  margin-bottom: 1em;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/parameterManager/parameter/parameter.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var parameterService_1 = __webpack_require__("../../../../../src/app/services/parameterService.ts");
var Subject_1 = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var ParameterComponent = /** @class */ (function () {
    function ParameterComponent(_paramService) {
        this._paramService = _paramService;
        this.validationEvent = new core_1.EventEmitter();
        this.active = false;
    }
    ParameterComponent_1 = ParameterComponent;
    ParameterComponent.prototype.ngOnInit = function () {
        var _this = this;
        ParameterComponent_1._onFocusChange.subscribe(function (name) {
            if (name !== _this.parameter.name) {
                _this.cancelEdit();
            }
        });
        this.validationEvent.subscribe(function () {
            if (_this.value) {
                _this.validationError = !_this._validateString(_this.value);
            }
            else {
                _this.validationError = !_this._isValid();
            }
        });
        this.value = this.parameter.value;
        this.checked = this.parameter.value === 'True';
    };
    ParameterComponent.prototype.onValueChanged = function (event) {
        if (this.parameter.type === 'checkbox') {
            this.checked = event.target.checked;
            if (this.checked === (this.parameter.value === 'True')) {
                this.active = false;
            }
        }
        else {
            this.value = event.target.value;
        }
    };
    ParameterComponent.prototype.onFocus = function () {
        ParameterComponent_1._onFocusChange.next(this.parameter.name);
        this.active = true;
    };
    ParameterComponent.prototype.saveParameter = function () {
        var _this = this;
        this.validationError = !this._validateString(this.value);
        if (this.validationError === false) {
            if (this.parameter.type === 'checkbox') {
                this.parameter.value = this.checked.toString();
            }
            else {
                this.parameter.value = this.value;
            }
            this._paramService.saveParameter(this.parameter).then(function (success) { return _this.validationError = !success; });
        }
    };
    ParameterComponent.prototype.cancelEdit = function () {
        this.value = this.parameter.value;
        if (this.parameter.type === 'checkbox') {
            this.checked = this.parameter.value === 'True';
        }
        else {
            this.value = this.parameter.value;
        }
        this.active = false;
    };
    ParameterComponent.prototype._isValid = function () {
        return this._validateString(this.parameter.value);
    };
    ParameterComponent.prototype._validateString = function (value) {
        if (!value && this.parameter.mandatory === true) {
            return false;
        }
        if (this.parameter && this.parameter.regexValidation && value) {
            var matches = value.match(this.parameter.regexValidation);
            return (matches && matches[0] !== null);
        }
        else {
            return true;
        }
    };
    ParameterComponent.prototype.getErrorClass = function () {
        return this.validationError ? 'parameter-list row alert-danger' : 'parameter-list row';
    };
    ParameterComponent.prototype.getInputClass = function () {
        if (this.value && this.searchString) {
            if (this.value.toLowerCase().indexOf(this.searchString.toLowerCase()) !== -1) {
                return 'form-control highlighted';
            }
        }
        return 'form-control';
    };
    ParameterComponent._onFocusChange = new Subject_1.Subject();
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ParameterComponent.prototype, "parameter", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", core_1.EventEmitter)
    ], ParameterComponent.prototype, "validationEvent", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ParameterComponent.prototype, "searchString", void 0);
    ParameterComponent = ParameterComponent_1 = __decorate([
        core_1.Component({
            selector: 'cmi-viaduc-parameter',
            template: __webpack_require__("../../../../../src/app/parameterManager/parameter/parameter.component.html"),
            styles: [__webpack_require__("../../../../../src/app/parameterManager/parameter/parameter.component.less")]
        }),
        __metadata("design:paramtypes", [parameterService_1.ParameterService])
    ], ParameterComponent);
    return ParameterComponent;
    var ParameterComponent_1;
}());
exports.ParameterComponent = ParameterComponent;


/***/ }),

/***/ "../../../../../src/app/parameterManager/parameterList/parameterList.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!loading\">\r\n\t<h1>Zentralisierte Parameterverwaltung</h1>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-4\">\r\n\t\t\t<input type=\"text\" class=\"form-control\" [value]=\"searchString\" (change)=\"onValueChanged($event)\"/>\r\n\t\t</div>\r\n\t\t<div class=\"col-md-1\">\r\n\t\t\t<input type=\"button\" (click)=\"searchParam()\" value=\"Suchen\" class=\"btn\"/>\r\n\t\t</div>\r\n\t\t<div class=\"col-md-6\">\r\n\r\n\t\t</div>\r\n\t\t<div class=\"col-md-1\">\r\n\t\t\t<input type=\"button\" (click)=\"emitValidationEvent()\" value=\"Validieren\" class=\"btn\"/>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<b class=\"col-md-3\">Name</b>\r\n\t\t<b class=\"col-md-3\">Standardwert</b>\r\n\t\t<b class=\"col-md-4\">Wert</b>\r\n\t</div>\r\n\t<div *ngFor=\"let param of filteredParameters\">\r\n\t\t<cmi-viaduc-parameter [searchString]=\"searchedStringUpToDate ? searchString : ''\" [parameter]=\"param\" [validationEvent]=\"validationEvent\"></cmi-viaduc-parameter>\r\n\t</div>\r\n</div>\r\n<div *ngIf=\"loading\">\r\n\t<cmi-blocker class=\"cmi-visible cmi-fixed cmi-center cmi-shadow\">\r\n\t\t<cmi-spinner></cmi-spinner>\r\n\t</cmi-blocker>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/parameterManager/parameterList/parameterList.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn {\n  margin-bottom: 1em;\n}\n.no-display {\n  display: none;\n}\n.row {\n  margin: 0;\n}\n.row .col-md-1 {\n  padding: 0;\n}\n.row .col-md-4 {\n  padding-right: 0;\n}\ncmi-blocker cmi-spinner {\n  width: 50%;\n  height: 50%;\n  overflow: auto;\n  margin: auto;\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 40%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/parameterManager/parameterList/parameterList.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var parameterService_1 = __webpack_require__("../../../../../src/app/services/parameterService.ts");
var ParameterListComponent = /** @class */ (function () {
    function ParameterListComponent(_params) {
        this._params = _params;
        this.loading = true;
        this.filteredParameters = [];
        this._allParameters = [];
        this.validationEvent = new core_1.EventEmitter();
        this.searchString = '';
        this.getAllParameters();
    }
    ParameterListComponent.prototype.getAllParameters = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this._params.getAllParameters().then(function (response) {
                    _this._allParameters = response;
                    _this.filteredParameters = _this._allParameters;
                    _this.loading = false;
                });
                return [2 /*return*/];
            });
        });
    };
    ParameterListComponent.prototype.onValueChanged = function (event) {
        this.searchString = event.target.value;
        if (this.searchString) {
            this.searchedStringUpToDate = false;
        }
    };
    ParameterListComponent.prototype.emitValidationEvent = function () {
        this.validationEvent.emit();
    };
    ParameterListComponent.prototype.searchParam = function () {
        var _this = this;
        this.filteredParameters = [];
        this.searchedStringUpToDate = true;
        if (this.searchString !== '') {
            this.filteredParameters = this._allParameters.filter(function (param) {
                return param.name.toLowerCase().indexOf(_this.searchString.toLowerCase()) !== -1 || param.value && param.value.toLowerCase().indexOf(_this.searchString.toLowerCase()) !== -1;
            });
        }
        else {
            console.log('search string not found!');
            this.filteredParameters = this._allParameters;
        }
    };
    ParameterListComponent = __decorate([
        core_1.Component({
            selector: 'cmi-viaduc-parameterList',
            template: __webpack_require__("../../../../../src/app/parameterManager/parameterList/parameterList.component.html"),
            styles: [__webpack_require__("../../../../../src/app/parameterManager/parameterList/parameterList.component.less")]
        }),
        __metadata("design:paramtypes", [parameterService_1.ParameterService])
    ], ParameterListComponent);
    return ParameterListComponent;
}());
exports.ParameterListComponent = ParameterListComponent;


/***/ }),

/***/ "../../../../../src/app/root/root.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container container-main\">\r\n\r\n  <cmi-viaduc-header></cmi-viaduc-header>\r\n\r\n  <cmi-viaduc-nav></cmi-viaduc-nav>\r\n\r\n  <div class=\"row root-content-wrapper\">\r\n    <div class=\"col-xs-12\">\r\n      <div id=\"content\" class=\"container-fluid\">\r\n        <cmi-viaduc-parameterList></cmi-viaduc-parameterList>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <cmi-viaduc-footer></cmi-viaduc-footer>\r\n\r\n  <cmi-loader *ngIf=\"preloading\" class=\"cmi-visible\"></cmi-loader>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/root/root.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html.cmi-boot,\n.cmi-boot body {\n  height: 100%;\n}\n.root-content-wrapper {\n  min-height: 400px;\n}\n.cmi-boot .cmi-loader h3 {\n  text-align: center;\n  padding-bottom: 15px;\n}\n.cmi-boot .cmi-loader .cmi-three-dots {\n  background-color: transparent;\n  margin-bottom: 25px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/root/root.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var RootComponent = /** @class */ (function () {
    function RootComponent() {
        this.preloading = true;
        this.preloading = false;
    }
    RootComponent = __decorate([
        core_1.Component({
            selector: 'cmi-viaduc-root',
            template: __webpack_require__("../../../../../src/app/root/root.component.html"),
            styles: [__webpack_require__("../../../../../src/app/root/root.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], RootComponent);
    return RootComponent;
}());
exports.RootComponent = RootComponent;


/***/ }),

/***/ "../../../../../src/app/services/httpService.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
        this.noCaching = { nonce: true };
    }
    HttpService.prototype._configureObservable = function (observable) {
        return observable;
    };
    /**
     * Requests a JSON from the provided url with HTTP method GET.
     * @param {string} url
     * @returns {Observable<T>}
     */
    HttpService.prototype.get = function (url, config) {
        return this._configureObservable(this._http.get(url));
    };
    HttpService.prototype.download = function (url) {
        var request = new http_1.HttpRequest('GET', url, { responseType: 'blob', reportProgress: true });
        return this._http.request(request);
    };
    /**
     * Sends request to provided url with HTTP method DELETE.
     * @param {string} url
     * @returns {Observable<T>}
     */
    HttpService.prototype.delete = function (url, config) {
        return this._configureObservable(this._http.delete(url));
    };
    /**
     * Sends a JSON to the provided url with HTTP method POST.
     * @param {string} url
     * @param {*} body
     * @returns {Observable<T>}
     */
    HttpService.prototype.post = function (url, body, config) {
        return this._configureObservable(this._http.post(url, body));
    };
    HttpService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], HttpService);
    return HttpService;
}());
exports.HttpService = HttpService;


/***/ }),

/***/ "../../../../../src/app/services/parameterService.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var httpService_1 = __webpack_require__("../../../../../src/app/services/httpService.ts");
var ParameterService = /** @class */ (function () {
    function ParameterService(_http) {
        this._http = _http;
    }
    ParameterService.prototype.getAllParameters = function () {
        return __awaiter(this, void 0, void 0, function () {
            var url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this._createBaseUrl() + '/GetAllParameters';
                        return [4 /*yield*/, this._http.get(url, this._http.noCaching).toPromise()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ParameterService.prototype.saveParameter = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            var url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this._createBaseUrl() + '/SaveParameter';
                        return [4 /*yield*/, this._http.post(url, param, this._http.noCaching).toPromise()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ParameterService.prototype._createBaseUrl = function () {
        var loc = window.location;
        var port = isNaN(parseInt(loc.port, 10)) ? undefined : parseInt(loc.port, 10);
        var baseUrl = '' + loc.protocol + '//' + loc.hostname + (port ? ':' + port : '') + '/ipa/Controllers';
        return baseUrl;
    };
    ParameterService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [httpService_1.HttpService])
    ], ParameterService);
    return ParameterService;
}());
exports.ParameterService = ParameterService;


/***/ }),

/***/ "../../../../../src/app/ui/blocker/blocker.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>"

/***/ }),

/***/ "../../../../../src/app/ui/blocker/blocker.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "cmi-blocker,\n.cmi-blocker {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(255, 255, 255, 0.6);\n  opacity: 0;\n  -webkit-transition: opacity .5s;\n  transition: opacity .5s;\n  z-index: 1000;\n}\ncmi-blocker.cmi-visible,\n.cmi-blocker.cmi-visible {\n  opacity: 1;\n}\ncmi-blocker.cmi-center > div,\n.cmi-blocker.cmi-center > div {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\ncmi-blocker.cmi-fixed > div,\n.cmi-blocker.cmi-fixed > div {\n  position: fixed;\n}\ncmi-blocker.cmi-shadow > div,\n.cmi-blocker.cmi-shadow > div {\n  -webkit-box-shadow: 1px 1px 8px 4px rgba(0, 0, 0, 0.25);\n          box-shadow: 1px 1px 8px 4px rgba(0, 0, 0, 0.25);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui/blocker/blocker.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var BlockerComponent = /** @class */ (function () {
    function BlockerComponent() {
        this.options = {};
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], BlockerComponent.prototype, "options", void 0);
    BlockerComponent = __decorate([
        core_1.Component({
            selector: 'cmi-blocker',
            template: __webpack_require__("../../../../../src/app/ui/blocker/blocker.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ui/blocker/blocker.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], BlockerComponent);
    return BlockerComponent;
}());
exports.BlockerComponent = BlockerComponent;


/***/ }),

/***/ "../../../../../src/app/ui/loader/loader.component.html":
/***/ (function(module, exports) {

module.exports = "<p *ngIf=\"options.hint\" class=\"cmi-hint\">{{ options.hint }}</p>\r\n<div class=\"cmi-three-dots\">\r\n\t<span></span><span></span><span></span>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/ui/loader/loader.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "cmi-loader,\n.cmi-loader {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(255, 255, 255, 0.6);\n  opacity: 0;\n  -webkit-transition: opacity .5s;\n  transition: opacity .5s;\n  z-index: 1000;\n  pointer-events: none;\n  cursor: not-allowed;\n}\ncmi-loader.cmi-visible,\n.cmi-loader.cmi-visible {\n  opacity: 1;\n}\ncmi-loader .cmi-hint,\n.cmi-loader .cmi-hint {\n  text-align: center;\n  margin: 10px 10px 0 10px;\n}\ncmi-loader .cmi-three-dots,\n.cmi-loader .cmi-three-dots {\n  padding: 10px 20px;\n  background-color: #fff;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100px;\n  margin: 0 auto;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\ncmi-loader .cmi-three-dots span,\n.cmi-loader .cmi-three-dots span {\n  width: 10px;\n  height: 10px;\n  background: #DC0018;\n  opacity: 0.2;\n}\ncmi-loader .cmi-three-dots span:nth-child(1),\n.cmi-loader .cmi-three-dots span:nth-child(1) {\n  -webkit-animation: lightUp 1.5s linear infinite;\n          animation: lightUp 1.5s linear infinite;\n}\ncmi-loader .cmi-three-dots span:nth-child(2),\n.cmi-loader .cmi-three-dots span:nth-child(2) {\n  -webkit-animation: lightUp 1.5s linear infinite 0.5s;\n          animation: lightUp 1.5s linear infinite 0.5s;\n}\ncmi-loader .cmi-three-dots span:nth-child(3),\n.cmi-loader .cmi-three-dots span:nth-child(3) {\n  -webkit-animation: lightUp 1.5s linear infinite 1s;\n          animation: lightUp 1.5s linear infinite 1s;\n}\n.page cmi-loader {\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n}\n.page cmi-loader .cmi-three-dots {\n  margin-top: 50px;\n}\n@-webkit-keyframes lightUp {\n  0% {\n    opacity: 0.2;\n  }\n  40% {\n    opacity: 1;\n  }\n  60% {\n    opacity: 0.2;\n  }\n  100% {\n    opacity: 0.2;\n  }\n}\n@keyframes lightUp {\n  0% {\n    opacity: 0.2;\n  }\n  40% {\n    opacity: 1;\n  }\n  60% {\n    opacity: 0.2;\n  }\n  100% {\n    opacity: 0.2;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui/loader/loader.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var LoaderComponent = /** @class */ (function () {
    function LoaderComponent() {
        this.options = {};
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], LoaderComponent.prototype, "options", void 0);
    LoaderComponent = __decorate([
        core_1.Component({
            selector: 'cmi-loader',
            template: __webpack_require__("../../../../../src/app/ui/loader/loader.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ui/loader/loader.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], LoaderComponent);
    return LoaderComponent;
}());
exports.LoaderComponent = LoaderComponent;


/***/ }),

/***/ "../../../../../src/app/ui/progressbar/progressbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"progress\">\r\n\t<div class=\"progress-bar viaduc\"\r\n\t\t role=\"progressbar\"\r\n\t\t [attr.aria-valuenow]=\"percentage\"\r\n\t\t [attr.aria-valuetext]=\"percentage + '%'\"\r\n\t\t aria-valuemin=\"0\"\r\n\t\t aria-valuemax=\"100\"\r\n\t\t [ngStyle]=\"{width: (percentage < 100 ? percentage : 100) + '%'}\">\r\n\t\t{{ percentage + '%'}}\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/ui/progressbar/progressbar.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".progress-bar .viaduc {\n  background-color: #a94442;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui/progressbar/progressbar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var ProgressbarComponent = /** @class */ (function () {
    function ProgressbarComponent() {
        this.percentage = 0;
    }
    ProgressbarComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], ProgressbarComponent.prototype, "percentage", void 0);
    ProgressbarComponent = __decorate([
        core_1.Component({
            selector: 'cmi-progressbar',
            template: __webpack_require__("../../../../../src/app/ui/progressbar/progressbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ui/progressbar/progressbar.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], ProgressbarComponent);
    return ProgressbarComponent;
}());
exports.ProgressbarComponent = ProgressbarComponent;


/***/ }),

/***/ "../../../../../src/app/ui/spinner/spinner.component.html":
/***/ (function(module, exports) {

module.exports = "<p *ngIf=\"hint\" class=\"cmi-hint\">{{ hint }}</p>\r\n<div class=\"cmi-three-dots\">\r\n\t<span></span><span></span><span></span>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/ui/spinner/spinner.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "cmi-spinner.cmi-visible,\n.cmi-spinner.cmi-visible {\n  opacity: 1;\n}\ncmi-spinner .cmi-hint,\n.cmi-spinner .cmi-hint {\n  text-align: center;\n  margin: 10px 10px 0 10px;\n}\ncmi-spinner .cmi-three-dots,\n.cmi-spinner .cmi-three-dots {\n  padding: 10px 20px;\n  background-color: #fff;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100px;\n  margin: 0 auto;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\ncmi-spinner .cmi-three-dots span,\n.cmi-spinner .cmi-three-dots span {\n  width: 10px;\n  height: 10px;\n  background: #DC0018;\n  opacity: 0.2;\n}\ncmi-spinner .cmi-three-dots span:nth-child(1),\n.cmi-spinner .cmi-three-dots span:nth-child(1) {\n  -webkit-animation: lightUp 1.5s linear infinite;\n          animation: lightUp 1.5s linear infinite;\n}\ncmi-spinner .cmi-three-dots span:nth-child(2),\n.cmi-spinner .cmi-three-dots span:nth-child(2) {\n  -webkit-animation: lightUp 1.5s linear infinite 0.5s;\n          animation: lightUp 1.5s linear infinite 0.5s;\n}\ncmi-spinner .cmi-three-dots span:nth-child(3),\n.cmi-spinner .cmi-three-dots span:nth-child(3) {\n  -webkit-animation: lightUp 1.5s linear infinite 1s;\n          animation: lightUp 1.5s linear infinite 1s;\n}\n@-webkit-keyframes lightUp {\n  0% {\n    opacity: 0.2;\n  }\n  40% {\n    opacity: 1;\n  }\n  60% {\n    opacity: 0.2;\n  }\n  100% {\n    opacity: 0.2;\n  }\n}\n@keyframes lightUp {\n  0% {\n    opacity: 0.2;\n  }\n  40% {\n    opacity: 1;\n  }\n  60% {\n    opacity: 0.2;\n  }\n  100% {\n    opacity: 0.2;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui/spinner/spinner.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var SpinnerComponent = /** @class */ (function () {
    function SpinnerComponent() {
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], SpinnerComponent.prototype, "hint", void 0);
    SpinnerComponent = __decorate([
        core_1.Component({
            selector: 'cmi-spinner',
            template: __webpack_require__("../../../../../src/app/ui/spinner/spinner.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ui/spinner/spinner.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], SpinnerComponent);
    return SpinnerComponent;
}());
exports.SpinnerComponent = SpinnerComponent;


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map