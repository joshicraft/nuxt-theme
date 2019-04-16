<template>
  <div>
    <Navbar />
    <PageTitle />
      <section class="section">
        <main class="container">
          <div class="columns">
            <SidebarLeft />
            <nuxt/>
          </div>
        </main>
      </section>
    <Footer/>
  </div>
</template>

<style>
</style>

<script>
import Navbar from '~/components/Navbar.vue';
import Footer from '~/components/Footer.vue';
import SidebarLeft from '~/components/SidebarLeft.vue';
import PageTitle from '~/components/PageTitle.vue';

export default {
  components: {
    Navbar,
    Footer,
    SidebarLeft,
    PageTitle,
  }
}
</script>
