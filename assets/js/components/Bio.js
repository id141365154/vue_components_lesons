var __vueify_insert__ = require("vueify/lib/insert-css")
var __vueify_style__ = __vueify_insert__.insert("/* line 2, stdin */\n.user-name[_v-54c4c1a6] {\n  font-size: 16px;\n  margin-bottom: 15px; }\n\n/* line 7, stdin */\n.user-age[_v-54c4c1a6] {\n  font-size: 10px;\n  color: #666; }\n")
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  data: function data() {
    return {};
  },

  computed: {
    name: function name() {
      return this.$parent.name;
    },
    age: function age() {
      return this.$parent.age;
    }
  }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<transition name=\"fade\" _v-54c4c1a6=\"\">\n    <div class=\"Bio\" _v-54c4c1a6=\"\">\n      <div class=\"user-name\" _v-54c4c1a6=\"\">{{name}}</div>\n      <div class=\"user-age\" _v-54c4c1a6=\"\">{{age}}</div>\n    </div>\n  </transition>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.dispose(function () {
    __vueify_insert__.cache["/* line 2, stdin */\n.user-name[_v-54c4c1a6] {\n  font-size: 16px;\n  margin-bottom: 15px; }\n\n/* line 7, stdin */\n.user-age[_v-54c4c1a6] {\n  font-size: 10px;\n  color: #666; }\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord("_v-54c4c1a6", module.exports)
  } else {
    hotAPI.update("_v-54c4c1a6", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}