<template>
  <section class="section">
    <div class="container">
      <figure data-aos="fade" class="image mb3">
        <img :alt="data.title" class="br3"
          :src="data.image"
          :srcset="`${data.image} 1x, ${data.retina} 2x`"
        >
      </figure>
      <div data-aos="fade-up" class="columns is-centered">
        <section class="section column is-8">
          <div class="content is-medium">
            <vue-markdown>{{ data.body }}</vue-markdown>
          </div>
        </section>
      </div>

      <!-- Author card -->
      <div data-aos="fade-up" class="columns is-centered">
        <section class="section column is-8">
          <div class="card has-ribbon has-ribbon-left br3">
            <div class="ribbon is-secondary is-small tracked">Author</div>
            <div class="card-content">
              <div class="columns items-center is-tablet">
                <div class="column is-2">
                  <figure class="image br-100">
                    <img :alt="data.user.name" class="br-100" :src="data.user.avatar" />
                  </figure>
                </div>
                <header class="column is-4">
                  <h2 class="b is-size-6">{{ data.user.name }}</h2>
                  <h3 class="title ttu is-7 has-text-grey tracked">{{ data.user.occupation }}</h3>
                </header>
                <div class="content column is-6">
                  <p>{{ data.user.bio }}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  // layout: 'sidebarRight',
  layout: 'base',
  validate ({ params }) {
    const slugPattern = /^[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*$/;
    return slugPattern.test(params.id);
  },
  created () {
    this.$store.commit('SET_PAGE_TITLE', this.data.title)
  },
  data() {
    return {
      data: {}
    }
  },
  async asyncData({ app, route }) {
    try {
      const blogs = await app.$axios.$get(`/blogs/${route.params.id}?_expand=user`)
      return { data: blogs }
    } catch (error) {
      console.log(Object.keys(error), error.message);
    }
  }
}
</script>
