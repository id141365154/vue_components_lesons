<style lang="scss" scoped>
	.user-name {
		font-size: 16px;
    margin-bottom: 15px;
	}

  .user-age {
    font-size: 10px;
    color:#666;
  }
</style>

<template>
<transition name="fade">
    <div class="Bio">
      <div class="user-name">{{name}}</div>
      <div class="user-age">{{age}}</div>
    </div>
  </transition>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  computed:{
    name: function(){
      return this.$parent.name
    },
    age: function(){
      return this.$parent.age
    }
  }
}
</script>