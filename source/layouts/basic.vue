<template>
  <nuxt/>
</template>

<style>
</style>

<script>
// import Navbar from '~/components/Navbar.vue'
// import Footer from '~/components/Footer.vue'
// import PageTitle from '~/components/PageTitle.vue';

export default {
  head () {
    return {
      title: "Source",
      titleTemplate: '%s | Build awesome Websites with Source',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Source is a great tool for creating modern web sites for your startups'
        }
      ]
    }
  },
  components: {
    // Navbar,
    // PageTitle,
    // Footer
  }
}
</script>
