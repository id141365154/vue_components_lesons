<style lang="scss" scoped>
  .user-name {
    color: red;
  }
</style>

<template>
    <div class="Friendslist">
      <ul>
        <li v-for="group in groups">
          {{ group }}
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  computed:{
    groups: function(){
      return this.$parent.groups
    }
  }
}
</script>