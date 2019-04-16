<template>
  <main class="column">
    <section>
      <div class="columns is-multiline">
        <div class="column is-half" v-for="(blog,index) in blogs" :key="blog.id">
          <nuxt-link :to="`/blogs/${blog.id}`">
            <template v-if="index % 2 !== 0">
              <h2 class="title fw4 has-text-black">{{ blog.title }}</h2>
              <h3 class="title is-7 ttu has-text-grey tracked">{{blog.user.name}}</h3>
            </template>
            <figure class="image is-4by3 mb3 lazy br3" :data-image="blog.image" data-retina="blog.retina">
              <img :alt="blog.title" :src="placeholderRatio43">
            </figure>
            <template v-if="index % 2 === 0">
              <h2 class="title fw4 has-text-black">{{ blog.title }}</h2>
              <h3 class="title is-7 ttu has-text-grey tracked">{{blog.user.name}}</h3>
            </template>
          </nuxt-link>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import placeholderRatio43 from '~/assets/images/placeholderRatio43.webp';
export default {
  layout: 'sidebarRight',
  validate ({ params }) {
    const slugPattern = /^[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*$/;
    return slugPattern.test(params.id);
  },
  components: {},
  data () {
    return {
      placeholderRatio43,
    }
  },
  async asyncData({ app, route }) {
      const self = this;
      try {
        const tag = await app.$axios.$get(`/tags/${route.params.id}`);
        const blogs = await app.$axios.$get(`/tags/${route.params.id}/blogs?_expand=user`);
        return {
          tag,
          blogs: blogs,
        }
      } catch (error) {
        console.log(Object.keys(error), error.message);
      }

  },
  created () {
    this.$store.commit('SET_PAGE_TITLE', `All blog posts in ${this.tag.title}`);
  },
}
</script>
