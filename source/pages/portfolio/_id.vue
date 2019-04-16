<template>
  <main class="flex-ns flex-column-ns">
    <section class="section hero order-1-ns">
      <div class="wrapper">
        <div class="container">
          <div class="columns is-centered">
            <div class="column">
              <p class="tags">
                <span v-for="(t,index) in data.tags" :key="t.tag" data-aos="fade-up" :data-aos-delay="index*100" class="ttc tag is-primary">{{ t.title }}</span>
              </p>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="100" class="columns is-desktop">
            <div class="column">
              <vue-markdown class="content">{{ data.body }}</vue-markdown>
            </div>
            <div class="column">
              <table data-aos="fade-up" data-aos-delay="200" class="table is-fullwidth is-striped">
                <tbody>
                  <tr v-for="m in data.meta" :key="m.label" >
                    <td class="b">{{ m.label }}</td>
                    <td>{{ m.content }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section class="section hero">
      <div class="wrapper">
        <div class="container">
          <div class="columns is-centered">
            <div data-aos="fade-up" data-aos-delay="100" class="column is-10-desktop">
              <figure class="image">
                <img :alt="data.title" class="br3" :src="data.image" :srcset="`${data.image} 1x, ${data.retina} 2x`">
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  layout: 'base',
  validate ({ params }) {
    const slugPattern = /^[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*$/;
    return slugPattern.test(params.id);
  },
  // computed: {
  //   sectionClass() {
  //     return this.$mq === 'tablet' ? null : 'xhero-body'
  //   }
  // },
  data() {
    return {
      data: {}
    }
  },
  async asyncData({ app, route }) {
      const self = this;
      try {
        const portfolio = await app.$axios.$get(`/portfolios/${route.params.id}`);
        return { data: portfolio }
      } catch (error) {
        console.log(Object.keys(error), error.message);
      }

  },
  created () {
    this.$store.commit('SET_PAGE_TITLE', this.data.title);
  },
  // data () {
  //   // console.log("Paramsss", params, 1);
  //   // return {}
  //   return this.$axios.get(`/portfolio/${this.$route.params.slug}`)
  //     .then((res) => res.data)
  //     .catch(() => {
  //       error({ message: 'Post introuvable', statusCode: 404 })
  //     })
  // }
}
</script>
