<template>
  <div>
    <Navbar />
    <PageTitle v-if='$store.state.pageTitle != ""' />
    <nuxt/>
    <Footer/>
  </div>
</template>

<style>
</style>

<script>
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'
import PageTitle from '~/components/PageTitle.vue';

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
  created () {
    this.$store.commit('SET_PAGE_TITLE', "")
  },
  components: {
    Navbar,
    PageTitle,
    Footer
  }
}
</script>
