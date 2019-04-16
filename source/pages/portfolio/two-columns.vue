<template>
  <main>
    <section class="section">
      <div class="container">
        <div class="columns items-stretch is-multiline">
        <template v-for="(p,index) in portfolio">
          <div class="column is-half mb4" :key="p.id" data-aos="fade-up" :data-aos-delay="index*100">
            <div class="h-100 background-wrapper lazy br3 box-shadow-1" :data-image="p.image" data-retina="p.retina">
              <div class="columns h-100 is-gapless">
                <div class="column is-full xis-6-desktop">
                  <div class="hero is-medium br3 h-100" :style="`background-color: rgba(255,255,255, ${backgroundOpacity})`">
                    <div class="hero-body">
                      <div class="ph5-l">
                        <h3 class="is-size-7 ttu tracked has-text-grey">{{ p.tags[0].title  }}</h3>
                        <h2 class="title">{{ p.title }}</h2>
                        <p>{{p.description}}</p>
                        <p class="mt3">
                          <nuxt-link class="button is-rounded" :to="`/portfolio/${p.id}`">
                            <span class="fw7 ttu is-size-7 ph3">Preview</span>
                          </nuxt-link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
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
    computed: {
      backgroundOpacity() {
        // MediaQueries
        const mobileMq = [ "mobile-small", "mobile-medium", "mobile-large", "tablet" ];

        return mobileMq.indexOf(this.$mq) > -1 ? 0.35 : 0.8;
      }
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
      this.$store.commit('SET_PAGE_TITLE', "Portfolio - two columns")
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
