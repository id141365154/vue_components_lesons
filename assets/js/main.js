
//import Vue from 'vue'
//var Vue =  require('vue');
//import App from './App'


Bio = require('./components/Bio.js');
Friendslist = require('./components/FriendsList.js');
Photo = require('./components/Photo.js');
Groupslist = require('./components/Groupslist.js');
/*
*/

PROFILE = {
	name:"User User",
	photo: "https://pp.userapi.com/c851424/v851424090/1af10/247xN39hD8Q.jpg?ava=1",
	age:18,
	gender:'male',
	friends:[1,2,3,4,5,8,10],
	groups:[1,2,4,4,7]
}

inst_profile = new Vue({
	  el: '#app',
	  data:PROFILE,
	  methods: {
	    removeElement: function (property,index) {
	      this[property].splice(index, 1);
	    },
	    addElement: function (property) {
	    	var max = 0;
	    	console.log(this[property]);

	    	function getMax(obj) {
	    	  return Math.max.apply(null,Object.values(obj));
	    	}

	     	max = getMax(this[property]);



	    	console.log(max);

	      this[property].push(max+1);
	    },
	    shuffle: function (property) {
	          this[property] = _.shuffle(this[property])
	    }
	  },
	  components: { Bio, Photo, Friendslist, Groupslist }
	})

