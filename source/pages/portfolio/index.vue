<template>
  <main>
    <section class="section hero is-medium">

      <div class="container">
        <div class="columns is-centered">
          <div class="column is-8-tablet">
            <header class="has-text-centered">
              <h2 data-aos="zoom-out" class="title ttu">Recent Projects</h2>
              <p data-aos="zoom-out" data-aos-delay="100" class="is-size-5"><span class="opacity-70">The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized, meaningful environment, not about fashion or what’s in or what’s out. This is not an easy job.</span></p>
            </header>
          </div>
        </div>
      </div>

      <div class="container mt4">
        <div class="columns is-multiline is-centered">
          <div v-for="(p,index) in portfolio" :key="p.id" data-aos="fade-up" :data-aos-delay="index*100" class="column is-one-third">
            <nuxt-link :to="`/portfolio/${p.id}`">
              <figure class="image">
                <img :alt="p.title" class="br3" :src="p.image" :srcset="`${p.image} 1x, ${p.retina} 2x`">
              </figure>
            </nuxt-link>
          </div>
        </div>
      </div>

    </section>
  </main>
</template>

<script>
  export default {
    name: "portfolio",
    layout: 'base',
    components: {
    },
    data() {
      return {
        portfolio: [],
        error: null
      }
    },
    mounted() {
      if(this.error) {
        this.$toast.open({
            duration: 5000,
            message: this.error.message,
            position: 'is-bottom',
            type: 'is-danger'
        });
      }
    },
    created () {
      this.$store.commit('SET_PAGE_TITLE', "Portfolio")
    },
    async asyncData({ app }) {
      try {
        const portfolio = await app.$axios.$get('/portfolios?_sort=createdAt')
        return { portfolio }
      } catch (error) {
        // console.log("err", error);
        return { error: { message: "An unexpected error occurred, portfolio contents could not be retrieved." } }
      }
    }
  }
</script>
