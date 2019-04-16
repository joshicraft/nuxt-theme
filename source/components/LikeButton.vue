<template>
  <a v-on:click="liked"  >
    <span class="icon">
      <i class="mdi mdi-24px" v-bind:class="{ 'has-text-danger' : like, 'mdi-heart-outline': !like, 'mdi-heart': like }" />
    </span>
  </a>
</template>

<script>
  export default {
    data () {
      return {
        like : false
      }
    },
    methods: {
      liked () {
        // just show the toast message when item is liked.
        if (!this.like) { this.$toast.open('Thank you <i class="mdi mdi-heart has-text-danger"></i>'); }
        return this.like = !this.like
      }
    }
  }
</script>
