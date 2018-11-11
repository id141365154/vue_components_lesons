<style lang="scss" scoped>
	.photo {
   img {
             border-radius: 4px;
             height: auto;
             width: 256px;
   } 
  }
</style>

<template>

    <div class="photo">
      <transition appear>
        <img v-bind:src="photo" alt="">
      </transition>
    </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  computed:{
    photo: function(){
      if (this.$parent.photo == null) {
        return "https://www.maxpixel.net/static/photo/2x/Catwoman-Girl-Model-Fashion-Cat-Makeup-Kitten-1048726.jpg"
      }else{
        return this.$parent.photo
      }
    }
  }
}
</script>