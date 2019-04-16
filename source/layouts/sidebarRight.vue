<template>
  <div>
    <Navbar />
    <PageTitle />
      <section class="section">
        <main class="container">
          <div class="columns">
            <nuxt/>
            <SidebarRight />
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
import SidebarRight from '~/components/SidebarRight.vue';
import PageTitle from '~/components/PageTitle.vue';

export default {
  components: {
    Navbar,
    Footer,
    SidebarRight,
    PageTitle,
  }
}
</script>
