(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["style-index"],{

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);

/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","style-index"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Edit; });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_2__);
/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */


/**
 * Otros componentes
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

function Edit(props) {
  var _props$attributes = props.attributes,
      content = _props$attributes.content,
      alignment = _props$attributes.alignment,
      className = props.className;
  var blockProps = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["useBlockProps"])();

  var onChangeContent = function onChangeContent(newContent) {
    props.setAttributes({
      content: newContent
    });
  };

  var onChangeAlignment = function onChangeAlignment(newAlignment) {
    props.setAttributes({
      alignment: newAlignment === undefined ? 'none' : newAlignment
    });
  }; //return 2 controles, es un array.


  return [/*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InspectorControls"], null, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["AlignmentToolbar"], {
    value: alignment,
    onChange: onChangeAlignment
  })), /*#__PURE__*/React.createElement("div", blockProps, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["BlockControls"], null, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["AlignmentToolbar"], {
    value: alignment,
    onChange: onChangeAlignment
  })), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["RichText"], {
    className: className,
    style: {
      textAlign: alignment
    },
    tagName: "p",
    onChange: onChangeContent,
    value: content
  }), /*#__PURE__*/React.createElement("p", null, "Hola soy el custom control"))];
}

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/server-side-render */ "@wordpress/server-side-render");
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./save */ "./src/save.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
 // T7 Clase de modulo, se definirá la funcion de edicion de bloque




/**
 * T8 PHP render.
 * P1) Se importa server side render, y los valores se asignarán a un control segun se ocupe.
 * Aqui se necesita "TextControl" para crear un input que asigne el id de un articulo.
 * Ese ID se asignará en la variable: "selectedPostId" que se ejecuta desde un call back en master-mockup.php. 
 */



 // Internal dependencies



/**
 * T7 Clase de modulo, se definirá la funcion de edicion de bloque
 *
 * NOTA. despues de varias pruebas.
 * Crear una clase para crear estados, no tine soporte en esta nueva version de API.
 * https://awhitepixel.com/blog/wordpress-gutenberg-create-custom-blocks-part-7-create-custom-components/
 * https://make.wordpress.org/core/2020/11/18/block-api-version-2/
 *
	class FuncionDeBloque extends Component {
		render() {
			const { attributes, setAttributes } = this.props;
			return ...
		}
	}

 * - - render es una función de react, que en este caso hará lo que edit().
 * - - Y como en edit(), se declaran las variables y se hace uso de props 
 * - - pero con "this" para asignar la funcion de cada cosa.
 * 
 * NOTA 2: Definitivamente no resulto esta parte del tutorial.
 * Lo más conveniente para crear un estado de edicion o preview, es ocupar los elementos del inspector.
 * Y agregar la logica en la fucnion de de edit(), ya que permite caragr funciones del core.
 * Además por usabilidad, es una mejor alternativa, y no carga toda la responsabilidad al bloque.
 * 
 * NOTA 3: construir un bloque como clase si funciona respecto a lo establecido por react.
 * Incluso, jugar con los estados de edicion y así como ocupar fragment u otros componentes para simular editabilidad o no.
 * Pero el uso de useBlockProps, no funciona.
 * 
 */
// function FuncionDeBloque(props){

var FuncionDeBloque = /*#__PURE__*/function (_Component) {
  _inherits(FuncionDeBloque, _Component);

  var _super = _createSuper(FuncionDeBloque);

  // Nota: acorde a la documentacion, las funciones propias, se pueden llamar sin problema.
  // experimento = ( midato ) => {
  // 	console.log( 'Primero ' + midato );
  // }

  /** 
   * T7 P1: Estados de modulo
   * https://awhitepixel.com/blog/wordpress-gutenberg-create-custom-blocks-part-7-create-custom-components/
   */
  function FuncionDeBloque(props) {
    var _this;

    _classCallCheck(this, FuncionDeBloque);

    _this = _super.call(this, props);

    _this.getInspectorControls = function () {
      var _this$props = _this.props,
          attributes = _this$props.attributes,
          setAttributes = _this$props.setAttributes;
      return /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InspectorControls"], null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
        title: "Most awesome settings ever",
        initialOpen: true
      }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelRow"], null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ToggleControl"], {
        label: "Toggle me",
        checked: attributes.toggle,
        onChange: function onChange(toggle) {
          return setAttributes({
            toggle: toggle
          });
        }
      })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelRow"], null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["SelectControl"], {
        label: "What's animal?",
        value: attributes.favoriteAnimal,
        options: [{
          label: "Dogs",
          value: 'dogs'
        }, {
          label: "Cats",
          value: 'cats'
        }, {
          label: "Something else",
          value: 'weird_one'
        }],
        onChange: function onChange(favoriteAnimal) {
          return setAttributes({
            favoriteAnimal: favoriteAnimal
          });
        }
      })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelRow"], null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ColorPicker"], {
        color: attributes.favoriteColor,
        onChangeComplete: function onChangeComplete(newval) {
          return setAttributes({
            favoriteColor: newval.hex
          });
        },
        disableAlpha: true // deshabilita transparencia

      })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelRow"], null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["CheckboxControl"], {
        label: "Activate lasers?",
        checked: attributes.activateLasers,
        onChange: function onChange(activateLasers) {
          return setAttributes({
            activateLasers: activateLasers
          });
        }
      })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelRow"], null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["CheckboxControl"], {
        label: "Modo",
        checked: attributes.activateLasers,
        onChange: function onChange() {
          return _this.setState({
            editMode: !_this.state.editMode
          });
        }
      })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["TextControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Type in post ID", 'awhitepixel'),
        type: "number",
        value: attributes.selectedPostId // variable
        ,
        onChange: function onChange(newval) {
          return setAttributes({
            selectedPostId: parseInt(newval)
          });
        }
      })));
    };

    _this.getBlockControls = function () {
      var _this$props2 = _this.props,
          attributes = _this$props2.attributes,
          setAttributes = _this$props2.setAttributes;
      return /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["BlockControls"], null, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["AlignmentToolbar"], {
        value: attributes.textAlignment,
        onChange: function onChange(newalign) {
          return setAttributes({
            textAlignment: newalign
          });
        }
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ToolbarGroup"], null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ToolbarButton"], {
        icon: _this.state.editMode ? "format-image" : "edit",
        label: _this.state.editMode ? "Preview" : "Edit",
        onClick: function onClick() {
          return _this.setState({
            editMode: !_this.state.editMode
          });
        }
      })));
    };

    _this.state = {
      editMode: true
    };
    return _this;
  }

  _createClass(FuncionDeBloque, [{
    key: "render",
    value: function render() {
      /* T7 P2:Estados de Modulos */
      // this.setState({ example: 2 });
      // console.log(this.state.example);

      /* P1 Se declara los recursos */
      var _this$props3 = this.props,
          attributes = _this$props3.attributes,
          setAttributes = _this$props3.setAttributes; // const alignmentClass = (attributes.textAlignment != null) ? 'bg-warning text-' + attributes.textAlignment : '';
      // 	const blockProps = useBlockProps( { className: alignmentClass } );
      // const blockProps = useBlockProps();

      /* P2 Se generan dinamicas, funciones etc.*/

      /* P3 Se imprime el resultado */
      // const resultados = (

      return (
        /*#__PURE__*/
        // <div { ...blockProps }>
        React.createElement("div", null, this.getInspectorControls(), this.getBlockControls(), this.state.editMode && /*#__PURE__*/React.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, /*#__PURE__*/React.createElement("p", null, attributes.exampleText), /*#__PURE__*/React.createElement("p", null, attributes.postIds), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["RichText"], {
          tagName: "h2",
          value: attributes.myRichText,
          onChange: function onChange(myRichText) {
            return setAttributes({
              myRichText: myRichText
            });
          },
          placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Escribele aqui h2 (c/traduccion)...')
        }), attributes.toggle && /*#__PURE__*/React.createElement("div", {
          className: "lasers"
        }, "Toggle on"), /*#__PURE__*/React.createElement("div", {
          className: "animal"
        }, " ", attributes.favoriteAnimal, " "), /*#__PURE__*/React.createElement("div", {
          className: "color"
        }, " ", attributes.favoriteColor, " "), attributes.activateLasers && /*#__PURE__*/React.createElement("div", {
          className: "lasers"
        }, "Lasers activados")), !this.state.editMode && /*#__PURE__*/React.createElement(_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_4___default.a, {
          block: this.props.name,
          attributes: {
            myRichHeading: attributes.myRichHeading,
            myRichText: attributes.myRichText,
            textAlignment: attributes.textAlignment,
            toggle: attributes.toggle,
            favoriteAnimal: attributes.favoriteAnimal,
            favoriteColor: attributes.favoriteColor,
            activateLasers: attributes.activateLasers,
            selectedPostId: attributes.selectedPostId
          }
        }))
      ); // return resultados;
    }
  }]);

  return FuncionDeBloque;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Component"]);

Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])('my-mockups/master-mockup', {
  apiVersion: 2,
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Utilidades de bloque', 'master-mockup'),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Descripcion opcional', 'master-mockup'),
  category: 'widgets',
  icon: 'carrot',
  attributes: {
    exampleText: {
      type: 'string',
      "default": 'mi texto default val exampleText',
      selector: 'p' // se debe coordinar el uso de selectores.

    },
    postIds: {
      type: 'array',
      "default": [1, 2, 3, 4],
      selector: 'p'
    },
    myRichText: {
      type: 'string',
      source: 'html',
      "default": '',
      // sin dato pero declarado default.
      selector: 'h2'
    },
    toggle: {
      type: 'boolean',
      "default": true
    },
    favoriteAnimal: {
      type: 'string',
      "default": 'dogs'
    },
    favoriteColor: {
      type: 'string',
      "default": '#DDDDDD'
    },
    activateLasers: {
      type: 'boolean',
      "default": false
    },
    //toolbar
    align: {
      type: 'string',
      "default": 'wide'
    },
    textAlignment: {
      type: 'string'
    },

    /* T8 P3) Setup variable.
    	Variable que se ocupara tambien en master-mockup.php. 
    */
    selectedPostId: {
      type: 'number'
    }
  },
  supports: {
    html: false,
    //toolbar
    align: ['wide', 'full']
  },
  edit: FuncionDeBloque // La informacion pasa a travez de props
  // save: (props) => {
  // /* P1 Se Declaran los recursos que mostraremos */
  // 	const { attributes } = props;
  // 	const alignmentClass = (attributes.textAlignment != null) ? 'bg-info text-' + attributes.textAlignment : '';
  // 	const blockProps = useBlockProps.save( { className: alignmentClass } ); //no olvidar save.
  // /* P2 Se imprime el resultado */
  // 	const resultados = (
  // 		<div { ...blockProps }>
  // 			<p>{ attributes.exampleText }</p>
  // 			<p>{ attributes.postIds }</p>
  // 			<RichText.Content
  // 				tagName="h2"
  // 				value={attributes.myRichText}
  // 			/>
  // 			{ attributes.toggle && 
  // 				<div className="lasers">Toggle on</div>
  // 			}
  // 				<div className="animal"> {attributes.favoriteAnimal} </div>
  // 				<div className="color"> {attributes.favoriteColor} </div>
  // 			{ attributes.activateLasers && 
  // 				<div className="lasers">Lasers activados</div>
  // 			}
  // 		</div>
  // 	);
  // 	return resultados;
  // }

});

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return save; });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */

/**
 * Otros componentes
 */


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */

function save(props) {
  var blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["useBlockProps"].save();
  return /*#__PURE__*/React.createElement("div", blockProps, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["RichText"].Content, {
    className: "gutenberg-examples-align-".concat(props.attributes.alignment),
    tagName: "p",
    value: props.attributes.content
  }));
}

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["i18n"]; }());

/***/ }),

/***/ "@wordpress/server-side-render":
/*!******************************************!*\
  !*** external ["wp","serverSideRender"] ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["serverSideRender"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map