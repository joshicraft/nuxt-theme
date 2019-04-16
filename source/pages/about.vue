<template>
  <main>
    <!-- Who are we section -->
    <section class="section">
      <div class="container mt5">
        <div class="columns items-center">
          <div data-aos="fade-down" class="column is-4">
            <div class="wrapper">
              <h2 class="title is-4">Who are we?</h2>
              <h3 class="">Inmensae subtilitatis, obscuris et malesuada fames. Salutantibus vitae elit libero, a pharetra augue. Phasellus laoreet lorem vel dolor tempus vehicula.</h3>
            </div>
          </div>

          <div class="column is-offset-1-desktop">
            <!-- DEveloper -->
            <div data-aos="fade-down" data-aos-delay="150" class="flex flex-column flex-row-m items-center mb2">
              <img class="mb4-ns" alt="Developer" width="250" src="/img/undraw/developer.svg">
              <div class="self-start-ns ml4-m">
                <h3 class="title is-5">Developer</h3>
                <p>Plura mihi bona sunt, inclinet, amari petere vellent. Gallia est omnis divisa in partes tres, quarum.</p>
              </div>
            </div>
            <!-- Designer -->
            <div data-aos="fade-down" data-aos-delay="300" class="flex flex-column flex-row-m items-center">
              <div class="self-start-ns order-1 order-0-m mr4-m mt4-ns">
                <h3 class="title is-5">Designer</h3>
                <p>Salutantibus vitae elit  libero, a pharetra augue. Ambitioni dedisse scripsisse iudicaretur.</p>
              </div>
              <img alt="Designer" width="250" src="/img/undraw/designer.svg">
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Our nission section -->
    <section class="section">
      <div data-aos="fade-up" class="container">
        <div class="hero is-light br4">
          <div class="hero-body">
            <div class="columns is-centered">
              <div class="column is-8 has-text-centered">
                <h2 class="title ttu fw3 opactiy-80">We want to help developers and design agencies for interactive projects</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--  -->
    <section class="section">
      <div class="container">
        <div class="columns">
          <div data-aos="fade-up" class="column is-4">
            <div class="content has-text-centered">
              <img height="200" alt="Transparency" src="/img/undraw/file_searching.svg" style="height: 200px; max-height: 200px;">
              <h3 class="ttu is-size-5">Transparency</h3>
              <p>Petierunt uti sibi concilium totius Galliae in diem certam indicere. Ab illo tempore, ab est sed immemorabili.</p>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="100" class="column is-4">
            <div class="content has-text-centered">
              <img height="200" alt="Transparency" src="/img/undraw/security_on.svg" style="height: 200px; max-height: 200px;">
              <h3 class="ttu is-size-5">Security</h3>
              <p>Petierunt uti sibi concilium totius Galliae in diem certam indicere. Ab illo tempore, ab est sed immemorabili.</p>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="200" class="column is-4">
            <div class="content has-text-centered">
              <img height="200" alt="Transparency" src="/img/undraw/collaboration2.svg" style="height: 200px; max-height: 200px;">
              <h3 class="ttu is-size-5">Collaboration</h3>
              <p>Petierunt uti sibi concilium totius Galliae in diem certam indicere. Ab illo tempore, ab est sed immemorabili.</p>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section data-aos="fade" class="section bg-light">
      <div class="container pv4">
        <div class="wrapper">
          <nav class="level">
            <div data-aos="fade-up" data-aos-delay="100" class="level-item has-text-centered">
              <div>
                <p class="heading">Developers</p>
                <p class="title">3,456</p>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="200" class="level-item has-text-centered">
              <div>
                <p class="heading">Clients</p>
                <p class="title">6,471</p>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="300" class="level-item has-text-centered">
              <div>
                <p class="heading">Followers</p>
                <p class="title">645K</p>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="400" class="level-item has-text-centered">
              <div>
                <p class="heading">Projects</p>
                <p class="title">789</p>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </section>

    <section class="section hero">
      <div class="container">
        <div class="hero-body">
          <h2 data-aos="fade-up" class="title is-4">MEET THE TEAM</h2>
          <div class="columns is-multiline is-centered mt5">
            <div v-for="(t,index) in team" :key="t.id" data-aos="fade-up" :data-aos-delay="index*100" class="column is-one-third-tablet is-one-quarter-desktop">
              <div class="message pa2 br2 h-100">
                <div class="flex flex-column h-100">
                  <figure class="image">
                    <img :alt="t.name" class="mb3 br2" :src="t.image" :srcset="`${t.image} 1x, ${t.retina} 2x`">
                  </figure>
                  <header class="flex flex-column items-center mb3">
                    <h3 class="has-text-weight-semibold ttu is-size-6">{{ t.name }}</h3>
                    <p class="is-size-7 opacity-70">{{ t.title }}</p>
                  </header>
                  <div v-if="t.description" class="content is-size-7-desktop ph3">
                    <p>{{ t.description }}</p>
                  </div>
                  <ul class="mt-auto flex justify-center pb2">
                    <li v-for="s in t.social_media" :key="`${t.id}-${s.id}`" class="mh2">
                      <a :href="s.link"><i :class="`mdi mdi-${s.id}`"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" class="container">
        <div class="columns is-centered">
          <div class="column is-6-desktop">
            <div class="content has-text-centered">
              <h2 class="title is-1">We are always looking for talented teammates</h2>
              <p class="is-size-4 opacity-70">Phasellus laoreet lorem vel dolor tempus vehicula. Cum ceteris in veneratione tui montes, nascetur mus. Inmensae subtilitatis, obscuris et malesuada fames.</p>
              <a class="button b is-outlined is-rounded is-medium is-primary ttu is-size-7 is-medium">
                Send your resume <i class="ml2 mdi mdi-18px mdi-email-outline"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

  </main>
</template>

<script>
  import WaveTop from '~/components/WaveTop.vue';
  export default {
    name: "about",
    layout: 'base',
    head () {
      return {
        title: "About us",
        titleTemplate: '%s | Source is a great tool for creating modern web sites for your startups',
        meta: [
          { hid: 'description', name: 'description', content: 'Source is a great tool for creating modern web sites for your startups' }
        ]
      }
    },
    data() {
      return {
        team: [],
        error: null,
      }
    },
    async asyncData({ app }) {
      try {
        const team = await app.$axios.$get('/team?_sort=weight')
        return { team: team }
      } catch(error) {
        return { error: { message: "An unexpected error occurred, team contents could not be retrieved." } }
      }
    },
    created () {
      this.$store.commit('SET_PAGE_TITLE', "About us")
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
  }
</script>
