/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FieldTypes/ColorOption.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FieldTypes/ColorOption.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    colors: {
      type: [Array, Object],
      "default": function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      placeholder: 'Find Color',
      options: []
    };
  },
  computed: {
    colorWidths: function colorWidths() {
      var keys = Object.keys(this.colors);
      return keys.length <= 1 ? '100%' : "".concat(100 / keys.length, "%");
    }
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FieldTypes/ProductColorSwatchFieldType.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FieldTypes/ProductColorSwatchFieldType.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ColorOption__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ColorOption */ "./resources/js/components/FieldTypes/ColorOption.vue");
/* harmony import */ var _SelectedColorOption__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SelectedColorOption */ "./resources/js/components/FieldTypes/SelectedColorOption.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [Fieldtype],
  components: {
    ColorOption: _ColorOption__WEBPACK_IMPORTED_MODULE_0__["default"],
    SelectedColorOption: _SelectedColorOption__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  mounted: function mounted() {
    console.log('ProductColorSwatchFieldType', this.meta.swatches, Object.keys(this.meta.swatches));
    this.options = this.meta.swatches;
  },
  data: function data() {
    return {
      placeholder: 'Find Color',
      options: []
    };
  },
  computed: {
    selectedOption: function selectedOption() {
      var _this = this;

      var selections = this.value || [];

      if (typeof selections === 'string' || typeof selections === 'number') {
        selections = [selections];
      }

      return selections.map(function (value) {
        return _.findWhere(_this.options, {
          value: value
        }) || {
          value: value,
          key: value
        };
      });
    }
  },
  methods: {
    focus: function focus() {
      this.$refs.input.focus();
    },
    vueSelectUpdated: function vueSelectUpdated(value) {
      if (value) {
        this.update(value.value);
      } else {
        this.update(null);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FieldTypes/SelectedColorOption.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FieldTypes/SelectedColorOption.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    colors: {
      type: [Array, Object],
      "default": function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      placeholder: 'Find Color',
      options: []
    };
  },
  computed: {
    colorWidths: function colorWidths() {
      var keys = Object.keys(this.colors);
      return keys.length <= 1 ? '100%' : "".concat(100 / keys.length, "%");
    }
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Tools/ProductColorSwatchesListing.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Tools/ProductColorSwatchesListing.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// import Listing from "../../../../statamic/cms/resources/js/components/Listing";
/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [Listing],
  data: function data() {
    return {
      listingKey: "product-color-swatches",
      preferencesPrefix: "product-color-swatch.product-color-swatches",
      requestUrl: cp_url("product-color-swatch/api/product-color-swatches"),
      columns: this.columns
    };
  },
  methods: {
    removeRow: function removeRow(row) {
      var id = row.id;
      var i = this.items.find(function (element) {
        return element.id === id;
      });
      this.items.splice(i, 1);
      if (this.items.length === 0) location.reload();
      var self = this;
      Object.keys(this.$refs).forEach(function (key) {
        if (key.includes('deleter_') && self.$refs[key] !== undefined) {
          self.$refs[key].cancel();
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Tools/PublishFormProductColorSwatch.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Tools/PublishFormProductColorSwatch.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    title: String,
    action: String,
    blueprint: Array,
    meta: Array,
    redirectTo: String,
    values: Array
  },
  methods: {
    saved: function saved(event) {
      var _this = this;

      setTimeout(function () {
        return _this.redirect(event.data);
      }, 600);
    },
    redirect: function redirect(slug) {
      window.location.href = this.createEditRoute(slug);
    },
    createEditRoute: function createEditRoute(slug) {
      return this.redirectTo.replace("x-redirect", slug);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FieldTypes/ColorOption.vue?vue&type=template&id=83a4f95a&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FieldTypes/ColorOption.vue?vue&type=template&id=83a4f95a& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "flex justify-center items-stretch",
      staticStyle: {
        border: "1px solid",
        width: "30px",
        height: "30px",
        "margin-right": "10px",
      },
    },
    _vm._l(_vm.colors, function (color, index) {
      return _c("div", {
        key: index,
        style: {
          height: "28px",
          width: _vm.colorWidths,
          backgroundColor: color,
        },
      })
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FieldTypes/ProductColorSwatchFieldType.vue?vue&type=template&id=429109bf&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FieldTypes/ProductColorSwatchFieldType.vue?vue&type=template&id=429109bf& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "flex" },
    [
      _c("v-select", {
        ref: "input",
        staticClass: "flex-1",
        attrs: {
          name: "product-color-swatch-field-type",
          clearable: true,
          disabled: false,
          options: _vm.options,
          placeholder: _vm.placeholder,
          searchable: true,
          taggable: false,
          multiple: false,
          "reset-on-options-change": false,
          "close-on-select": true,
          value: _vm.selectedOption,
          "create-option": function (value) {
            return { value: value, label: value }
          },
        },
        on: {
          input: _vm.vueSelectUpdated,
          "search:focus": function ($event) {
            return _vm.$emit("focus")
          },
          "search:blur": function ($event) {
            return _vm.$emit("blur")
          },
        },
        scopedSlots: _vm._u([
          {
            key: "selected-option",
            fn: function (option) {
              return [
                _c(
                  "div",
                  { staticClass: "flex justify-start items-center" },
                  [
                    _c("selected-color-option", {
                      attrs: { colors: option.colors },
                    }),
                    _vm._v(" "),
                    _c("span", [_vm._v(_vm._s(option.name))]),
                  ],
                  1
                ),
              ]
            },
          },
          {
            key: "option",
            fn: function (option) {
              return [
                _c(
                  "div",
                  { staticClass: "flex justify-start items-center" },
                  [
                    _c("color-option", { attrs: { colors: option.colors } }),
                    _vm._v(" "),
                    _c("span", [_vm._v(_vm._s(option.name))]),
                  ],
                  1
                ),
              ]
            },
          },
        ]),
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FieldTypes/SelectedColorOption.vue?vue&type=template&id=eb30a790&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FieldTypes/SelectedColorOption.vue?vue&type=template&id=eb30a790& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "flex justify-center items-stretch",
      staticStyle: {
        border: "1px solid",
        width: "24px",
        height: "22px",
        "margin-right": "7px",
      },
    },
    _vm._l(_vm.colors, function (color, index) {
      return _c("div", {
        key: index,
        style: {
          height: "20px",
          width: _vm.colorWidths,
          backgroundColor: color,
        },
      })
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Tools/ProductColorSwatchesListing.vue?vue&type=template&id=67955eb7&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Tools/ProductColorSwatchesListing.vue?vue&type=template&id=67955eb7& ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm.initializing
        ? _c("div", { staticClass: "card loading" }, [_c("loading-graphic")], 1)
        : _vm._e(),
      _vm._v(" "),
      !_vm.initializing
        ? _c("data-list", {
            staticClass: "mb-4",
            attrs: {
              "visible-columns": _vm.columns,
              columns: _vm.columns,
              rows: _vm.items,
              sort: false,
              "sort-column": _vm.sortColumn,
              "sort-direction": _vm.sortDirection,
            },
            scopedSlots: _vm._u(
              [
                {
                  key: "default",
                  fn: function (ref) {
                    var hasSelections = ref.hasSelections
                    return _c(
                      "div",
                      {},
                      [
                        _c(
                          "div",
                          { staticClass: "card p-0 relative" },
                          [
                            _c("data-list-filter-presets", {
                              ref: "presets",
                              attrs: {
                                "active-preset": _vm.activePreset,
                                "preferences-prefix": _vm.preferencesPrefix,
                              },
                              on: {
                                selected: _vm.selectPreset,
                                reset: _vm.filtersReset,
                              },
                            }),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "data-list-header" },
                              [
                                _c("data-list-filters", {
                                  attrs: {
                                    filters: _vm.filters,
                                    "active-preset": _vm.activePreset,
                                    "active-preset-payload":
                                      _vm.activePresetPayload,
                                    "active-filters": _vm.activeFilters,
                                    "active-filter-badges":
                                      _vm.activeFilterBadges,
                                    "active-count": _vm.activeFilterCount,
                                    "search-query": _vm.searchQuery,
                                    "saves-presets": true,
                                    "preferences-prefix": _vm.preferencesPrefix,
                                  },
                                  on: {
                                    "filter-changed": _vm.filterChanged,
                                    "search-changed": _vm.searchChanged,
                                    saved: function ($event) {
                                      return _vm.$refs.presets.setPreset($event)
                                    },
                                    deleted: function ($event) {
                                      return _vm.$refs.presets.refreshPresets()
                                    },
                                    "restore-preset": function ($event) {
                                      return _vm.$refs.presets.viewPreset(
                                        $event
                                      )
                                    },
                                    reset: _vm.filtersReset,
                                  },
                                }),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("div", {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.items.length === 0,
                                  expression: "items.length === 0",
                                },
                              ],
                              staticClass: "p-3 text-center text-grey-50",
                              domProps: {
                                textContent: _vm._s(_vm.__("No results")),
                              },
                            }),
                            _vm._v(" "),
                            _c("data-list-table", {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.items.length,
                                  expression: "items.length",
                                },
                              ],
                              attrs: {
                                "allow-bulk-actions": false,
                                loading: _vm.loading,
                                reorderable: false,
                                sortable: true,
                                "toggle-selection-on-row-click": false,
                                "allow-column-picker": true,
                                "column-preferences-key":
                                  _vm.preferencesKey("columns"),
                              },
                              on: { sorted: _vm.sorted },
                              scopedSlots: _vm._u(
                                [
                                  {
                                    key: "cell-enabled",
                                    fn: function (ref) {
                                      var redirect = ref.row
                                      return [
                                        redirect.enabled
                                          ? _c("div", {
                                              staticClass:
                                                "bg-green block h-3 w-2 mx-auto rounded-full",
                                            })
                                          : _c("div", {
                                              staticClass:
                                                "bg-red block h-3 w-2 mx-auto rounded-full",
                                            }),
                                      ]
                                    },
                                  },
                                  {
                                    key: "cell-source",
                                    fn: function (ref) {
                                      var redirect = ref.row
                                      return [
                                        _c(
                                          "a",
                                          {
                                            staticStyle: {
                                              "word-break": "break-all",
                                            },
                                            attrs: {
                                              href: _vm.cp_url(
                                                "weareframework/product-color-swatches/" +
                                                  redirect.id
                                              ),
                                            },
                                          },
                                          [_vm._v(_vm._s(redirect.source))]
                                        ),
                                      ]
                                    },
                                  },
                                  {
                                    key: "actions",
                                    fn: function (ref) {
                                      var redirect = ref.row
                                      var index = ref.index
                                      return [
                                        _c(
                                          "dropdown-list",
                                          [
                                            _c("dropdown-item", {
                                              attrs: {
                                                text: _vm.__("Edit"),
                                                redirect: _vm.cp_url(
                                                  "weareframework/product-color-swatches/" +
                                                    redirect.id
                                                ),
                                              },
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "dropdown-item",
                                              {
                                                staticClass: "warning",
                                                attrs: {
                                                  text: _vm.__("Delete"),
                                                },
                                                on: {
                                                  click: function ($event) {
                                                    _vm.$refs[
                                                      "deleter_" + redirect.id
                                                    ].confirm()
                                                  },
                                                },
                                              },
                                              [
                                                _c("resource-deleter", {
                                                  ref: "deleter_" + redirect.id,
                                                  attrs: { resource: redirect },
                                                  on: {
                                                    deleted: function ($event) {
                                                      return _vm.removeRow(
                                                        redirect.id
                                                      )
                                                    },
                                                  },
                                                }),
                                              ],
                                              1
                                            ),
                                          ],
                                          1
                                        ),
                                      ]
                                    },
                                  },
                                ],
                                null,
                                true
                              ),
                            }),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("data-list-pagination", {
                          staticClass: "mt-3",
                          attrs: {
                            "resource-meta": _vm.meta,
                            "per-page": _vm.perPage,
                          },
                          on: {
                            "page-selected": _vm.selectPage,
                            "per-page-changed": _vm.changePerPage,
                          },
                        }),
                      ],
                      1
                    )
                  },
                },
              ],
              null,
              false,
              980865268
            ),
          })
        : _vm._e(),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Tools/PublishFormProductColorSwatch.vue?vue&type=template&id=a6646818&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Tools/PublishFormProductColorSwatch.vue?vue&type=template&id=a6646818& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("publish-form", {
    attrs: {
      title: _vm.title,
      action: _vm.action,
      blueprint: _vm.blueprint,
      meta: _vm.meta,
      values: _vm.values,
    },
    on: { saved: _vm.saved },
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./resources/js/components/FieldTypes/ColorOption.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/FieldTypes/ColorOption.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ColorOption_vue_vue_type_template_id_83a4f95a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ColorOption.vue?vue&type=template&id=83a4f95a& */ "./resources/js/components/FieldTypes/ColorOption.vue?vue&type=template&id=83a4f95a&");
/* harmony import */ var _ColorOption_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ColorOption.vue?vue&type=script&lang=js& */ "./resources/js/components/FieldTypes/ColorOption.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ColorOption_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ColorOption_vue_vue_type_template_id_83a4f95a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ColorOption_vue_vue_type_template_id_83a4f95a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FieldTypes/ColorOption.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FieldTypes/ColorOption.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/FieldTypes/ColorOption.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorOption_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ColorOption.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FieldTypes/ColorOption.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorOption_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/FieldTypes/ColorOption.vue?vue&type=template&id=83a4f95a&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/FieldTypes/ColorOption.vue?vue&type=template&id=83a4f95a& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorOption_vue_vue_type_template_id_83a4f95a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ColorOption.vue?vue&type=template&id=83a4f95a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FieldTypes/ColorOption.vue?vue&type=template&id=83a4f95a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorOption_vue_vue_type_template_id_83a4f95a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorOption_vue_vue_type_template_id_83a4f95a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/FieldTypes/ProductColorSwatchFieldType.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/components/FieldTypes/ProductColorSwatchFieldType.vue ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductColorSwatchFieldType_vue_vue_type_template_id_429109bf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductColorSwatchFieldType.vue?vue&type=template&id=429109bf& */ "./resources/js/components/FieldTypes/ProductColorSwatchFieldType.vue?vue&type=template&id=429109bf&");
/* harmony import */ var _ProductColorSwatchFieldType_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductColorSwatchFieldType.vue?vue&type=script&lang=js& */ "./resources/js/components/FieldTypes/ProductColorSwatchFieldType.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProductColorSwatchFieldType_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductColorSwatchFieldType_vue_vue_type_template_id_429109bf___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductColorSwatchFieldType_vue_vue_type_template_id_429109bf___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FieldTypes/ProductColorSwatchFieldType.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FieldTypes/ProductColorSwatchFieldType.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/FieldTypes/ProductColorSwatchFieldType.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductColorSwatchFieldType_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductColorSwatchFieldType.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FieldTypes/ProductColorSwatchFieldType.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductColorSwatchFieldType_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/FieldTypes/ProductColorSwatchFieldType.vue?vue&type=template&id=429109bf&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/FieldTypes/ProductColorSwatchFieldType.vue?vue&type=template&id=429109bf& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductColorSwatchFieldType_vue_vue_type_template_id_429109bf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductColorSwatchFieldType.vue?vue&type=template&id=429109bf& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FieldTypes/ProductColorSwatchFieldType.vue?vue&type=template&id=429109bf&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductColorSwatchFieldType_vue_vue_type_template_id_429109bf___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductColorSwatchFieldType_vue_vue_type_template_id_429109bf___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/FieldTypes/SelectedColorOption.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/FieldTypes/SelectedColorOption.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SelectedColorOption_vue_vue_type_template_id_eb30a790___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SelectedColorOption.vue?vue&type=template&id=eb30a790& */ "./resources/js/components/FieldTypes/SelectedColorOption.vue?vue&type=template&id=eb30a790&");
/* harmony import */ var _SelectedColorOption_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SelectedColorOption.vue?vue&type=script&lang=js& */ "./resources/js/components/FieldTypes/SelectedColorOption.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SelectedColorOption_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SelectedColorOption_vue_vue_type_template_id_eb30a790___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SelectedColorOption_vue_vue_type_template_id_eb30a790___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FieldTypes/SelectedColorOption.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FieldTypes/SelectedColorOption.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/FieldTypes/SelectedColorOption.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectedColorOption_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SelectedColorOption.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FieldTypes/SelectedColorOption.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectedColorOption_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/FieldTypes/SelectedColorOption.vue?vue&type=template&id=eb30a790&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/FieldTypes/SelectedColorOption.vue?vue&type=template&id=eb30a790& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectedColorOption_vue_vue_type_template_id_eb30a790___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SelectedColorOption.vue?vue&type=template&id=eb30a790& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FieldTypes/SelectedColorOption.vue?vue&type=template&id=eb30a790&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectedColorOption_vue_vue_type_template_id_eb30a790___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectedColorOption_vue_vue_type_template_id_eb30a790___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Tools/ProductColorSwatchesListing.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/components/Tools/ProductColorSwatchesListing.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductColorSwatchesListing_vue_vue_type_template_id_67955eb7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductColorSwatchesListing.vue?vue&type=template&id=67955eb7& */ "./resources/js/components/Tools/ProductColorSwatchesListing.vue?vue&type=template&id=67955eb7&");
/* harmony import */ var _ProductColorSwatchesListing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductColorSwatchesListing.vue?vue&type=script&lang=js& */ "./resources/js/components/Tools/ProductColorSwatchesListing.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProductColorSwatchesListing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductColorSwatchesListing_vue_vue_type_template_id_67955eb7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductColorSwatchesListing_vue_vue_type_template_id_67955eb7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Tools/ProductColorSwatchesListing.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Tools/ProductColorSwatchesListing.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/Tools/ProductColorSwatchesListing.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductColorSwatchesListing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductColorSwatchesListing.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Tools/ProductColorSwatchesListing.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductColorSwatchesListing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Tools/ProductColorSwatchesListing.vue?vue&type=template&id=67955eb7&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/Tools/ProductColorSwatchesListing.vue?vue&type=template&id=67955eb7& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductColorSwatchesListing_vue_vue_type_template_id_67955eb7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductColorSwatchesListing.vue?vue&type=template&id=67955eb7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Tools/ProductColorSwatchesListing.vue?vue&type=template&id=67955eb7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductColorSwatchesListing_vue_vue_type_template_id_67955eb7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductColorSwatchesListing_vue_vue_type_template_id_67955eb7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Tools/PublishFormProductColorSwatch.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/components/Tools/PublishFormProductColorSwatch.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PublishFormProductColorSwatch_vue_vue_type_template_id_a6646818___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PublishFormProductColorSwatch.vue?vue&type=template&id=a6646818& */ "./resources/js/components/Tools/PublishFormProductColorSwatch.vue?vue&type=template&id=a6646818&");
/* harmony import */ var _PublishFormProductColorSwatch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PublishFormProductColorSwatch.vue?vue&type=script&lang=js& */ "./resources/js/components/Tools/PublishFormProductColorSwatch.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PublishFormProductColorSwatch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PublishFormProductColorSwatch_vue_vue_type_template_id_a6646818___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PublishFormProductColorSwatch_vue_vue_type_template_id_a6646818___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Tools/PublishFormProductColorSwatch.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Tools/PublishFormProductColorSwatch.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/Tools/PublishFormProductColorSwatch.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PublishFormProductColorSwatch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PublishFormProductColorSwatch.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Tools/PublishFormProductColorSwatch.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PublishFormProductColorSwatch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Tools/PublishFormProductColorSwatch.vue?vue&type=template&id=a6646818&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/Tools/PublishFormProductColorSwatch.vue?vue&type=template&id=a6646818& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PublishFormProductColorSwatch_vue_vue_type_template_id_a6646818___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PublishFormProductColorSwatch.vue?vue&type=template&id=a6646818& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Tools/PublishFormProductColorSwatch.vue?vue&type=template&id=a6646818&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PublishFormProductColorSwatch_vue_vue_type_template_id_a6646818___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PublishFormProductColorSwatch_vue_vue_type_template_id_a6646818___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/cp.js":
/*!****************************!*\
  !*** ./resources/js/cp.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Tools_ProductColorSwatchesListing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Tools/ProductColorSwatchesListing */ "./resources/js/components/Tools/ProductColorSwatchesListing.vue");
/* harmony import */ var _components_Tools_PublishFormProductColorSwatch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Tools/PublishFormProductColorSwatch */ "./resources/js/components/Tools/PublishFormProductColorSwatch.vue");
/* harmony import */ var _components_FieldTypes_ProductColorSwatchFieldType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/FieldTypes/ProductColorSwatchFieldType */ "./resources/js/components/FieldTypes/ProductColorSwatchFieldType.vue");



Statamic.booting(function () {
  Statamic.$components.register("product-color-swatches-listing", _components_Tools_ProductColorSwatchesListing__WEBPACK_IMPORTED_MODULE_0__["default"]);
  Statamic.$components.register("publish-form-product-color-swatch", _components_Tools_PublishFormProductColorSwatch__WEBPACK_IMPORTED_MODULE_1__["default"]);
  Statamic.$components.register("product_color_swatch-fieldtype", _components_FieldTypes_ProductColorSwatchFieldType__WEBPACK_IMPORTED_MODULE_2__["default"]);
});

/***/ }),

/***/ 0:
/*!**********************************!*\
  !*** multi ./resources/js/cp.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/framework000/CodeValet/statamic-fwk/addons/weareframework/product-color-swatches/resources/js/cp.js */"./resources/js/cp.js");


/***/ })

/******/ });