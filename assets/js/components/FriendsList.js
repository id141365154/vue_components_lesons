var __vueify_insert__ = require("vueify/lib/insert-css")
var __vueify_style__ = __vueify_insert__.insert("/* line 2, stdin */\n.user-name[_v-719e8378] {\n  color: red; }\n\n/* line 8, stdin */\n.list-enter-active[_v-719e8378], .list-leave-active[_v-719e8378] {\n  transition: all 1s; }\n\n/* line 11, stdin */\n.list-enter[_v-719e8378], .list-leave-to[_v-719e8378] {\n  opacity: 0;\n  transform: translateY(30px); }\n")
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require("babel-runtime/helpers/defineProperty");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _friendsDatabase;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var friendsDatabase = (_friendsDatabase = {
  1: "Adam",
  2: "Mia",
  3: "Kate",
  4: "Mike",
  5: "Kevin",
  6: "Chloe",
  7: "Jake",
  8: "Conor"
}, (0, _defineProperty3.default)(_friendsDatabase, "3", "Robert"), (0, _defineProperty3.default)(_friendsDatabase, 10, "Karl"), (0, _defineProperty3.default)(_friendsDatabase, 11, "Karl2"), (0, _defineProperty3.default)(_friendsDatabase, 12, "Karl3"), (0, _defineProperty3.default)(_friendsDatabase, 13, "Karl4"), (0, _defineProperty3.default)(_friendsDatabase, 14, "Karl5"), (0, _defineProperty3.default)(_friendsDatabase, 15, "Karl6"), _friendsDatabase);

exports.default = {
  data: function data() {
    return {};
  },


  computed: {
    friends: function friends() {
      return this.$parent.friends.map(function (k, v) {
        return friendsDatabase[k];
      });
    }
  }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<transition appear=\"\" _v-719e8378=\"\">\n   <div class=\"Friendslist\" _v-719e8378=\"\">\n           <transition-group name=\"list\" tag=\"ul\" _v-719e8378=\"\">\n               <li :key=\"friend\" v-for=\"friend in friends\" class=\"list-item\" _v-719e8378=\"\">\n                 {{ friend }}\n               </li>\n           </transition-group>\n   </div>\n </transition>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.dispose(function () {
    __vueify_insert__.cache["/* line 2, stdin */\n.user-name[_v-719e8378] {\n  color: red; }\n\n/* line 8, stdin */\n.list-enter-active[_v-719e8378], .list-leave-active[_v-719e8378] {\n  transition: all 1s; }\n\n/* line 11, stdin */\n.list-enter[_v-719e8378], .list-leave-to[_v-719e8378] {\n  opacity: 0;\n  transform: translateY(30px); }\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord("_v-719e8378", module.exports)
  } else {
    hotAPI.update("_v-719e8378", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}