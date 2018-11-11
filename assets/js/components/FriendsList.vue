<style lang="scss" scoped>
	.user-name {
		color: red;
	}
  .list-item {
   
  }
  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }
  .list-enter, .list-leave-to /* .list-leave-active до версии 2.1.8 */ {
    opacity: 0;
    transform: translateY(30px);
  } 
</style>

<template>
     <transition appear>
        <div class="Friendslist">
                <transition-group name="list" tag="ul">
                    <li :key="friend" v-for="friend in friends" class="list-item">
                      {{ friend }}
                    </li>
                </transition-group>
        </div>
      </transition>
</template>

<script>

var friendsDatabase = {
  1:"Adam",
  2:"Mia",
  3:"Kate",
  4:"Mike",
  5:"Kevin",
  6:"Chloe",
  7:"Jake",
  8:"Conor",
  3:"Robert",
  10:"Karl",
  11:"Karl2",
  12:"Karl3",
  13:"Karl4",
  14:"Karl5",
  15:"Karl6",
}


export default {
  data () {
    return {
      
    }
  },

  computed:{
    friends: function(){
      return this.$parent.friends.map(function(k,v){
        return friendsDatabase[k]
      })
    }
  }
}
</script>