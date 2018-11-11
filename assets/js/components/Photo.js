var __vueify_insert__ = require("vueify/lib/insert-css")
var __vueify_style__ = __vueify_insert__.insert("/* line 3, stdin */\n.photo img[_v-0f800c17] {\n  border-radius: 4px;\n  height: auto;\n  width: 256px; }\n")
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  data: function data() {
    return {};
  },

  computed: {
    photo: function photo() {
      if (this.$parent.photo == null) {
        return "https://www.maxpixel.net/static/photo/2x/Catwoman-Girl-Model-Fashion-Cat-Makeup-Kitten-1048726.jpg";
      } else {
        return this.$parent.photo;
      }
    }
  }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n\n<div class=\"photo\" _v-0f800c17=\"\">\n  <transition appear=\"\" _v-0f800c17=\"\">\n    <img v-bind:src=\"photo\" alt=\"\" _v-0f800c17=\"\">\n  </transition>\n</div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.dispose(function () {
    __vueify_insert__.cache["/* line 3, stdin */\n.photo img[_v-0f800c17] {\n  border-radius: 4px;\n  height: auto;\n  width: 256px; }\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord("_v-0f800c17", module.exports)
  } else {
    hotAPI.update("_v-0f800c17", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}