var __vueify_insert__ = require("vueify/lib/insert-css")
var __vueify_style__ = __vueify_insert__.insert("/* line 2, stdin */\n.user-name[_v-92c06446] {\n  color: red; }\n")
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  data: function data() {
    return {};
  },

  computed: {
    groups: function groups() {
      return this.$parent.groups;
    }
  }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div class=\"Friendslist\" _v-92c06446=\"\">\n  <ul _v-92c06446=\"\">\n    <li v-for=\"group in groups\" _v-92c06446=\"\">\n      {{ group }}\n    </li>\n  </ul>\n</div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.dispose(function () {
    __vueify_insert__.cache["/* line 2, stdin */\n.user-name[_v-92c06446] {\n  color: red; }\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord("_v-92c06446", module.exports)
  } else {
    hotAPI.update("_v-92c06446", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}