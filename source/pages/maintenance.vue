<template>
  <main class="bg-black vh-100 lazy" data-image="/img/unsplash/maintenance@2x.jpg" >
    <NavbarSimple />
    <section class="hero section columns is-mobile is-gapless items-center is-centered vh-100">
      <div class="column is-full">
        <div class="content has-text-right-tablet ph3 pv4 br3">
          <h1 class="title has-text-light is-size-2-mobile is-size-1-tablet">We're down for maintenance.</h1>
          <h2 class="subtitle has-text-light is-6">Estimated downtime: 2 days. Our apologies for the discomfort.</h2>

          <p class="has-text-white is-6">
            <countdown :time="2 * 24 * 60 * 60 * 1000">
              <template slot-scope="props">Time Remaining：{{ props.days }} days, {{ props.hours }} hours, {{ props.minutes }} minutes, {{ props.seconds }} seconds.</template>
            </countdown>
          </p>

        </div>
      </div>
    </section>
  </main>
</template>

<script>
  import Section from '~/components/Section.vue';
  import NavbarSimple from '~/components/NavbarSimple.vue';

  export default {
    name: "maintenance",
    layout: 'basic',
    components: {
      Section,
      NavbarSimple,
    },
    head() {
      return {
        htmlAttrs: {
          class: "overflow-hidden-m"
        }
      }
    },
    created () {
      this.$store.commit('SET_PAGE_TITLE', "")
    },
  }
</script>
