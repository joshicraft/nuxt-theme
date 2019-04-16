<template>
  <div class="column is-offset-1">

    <div class="columns is-multiline">
      <div v-for="(blog,index) in blogs" :key="blog.id" :data-aos="index ? 'fade-up' : 'fade'" class="column is-full mb4">
        <figure class="image mb3">
          <ul v-if="isArray(blog.tags)" class="tags absolute top-1 right-1"><li class="tag is-size-8 is-secondary ttu" v-for="tag in blog.tags" :key="tag.id" >{{ tag.title }}</li></ul>
          <ul v-if="isObject(blog.tags)" class="tags absolute top-1 right-1"><li class="tag is-size-8 is-secondary ttu" :key="blog.tags.id">{{ blog.tags.title }}</li></ul>
          <img :alt="blog.title" class="br3"
            :src="blog.image"
            :srcset="`${blog.image} 1x, ${blog.retina} 2x`"
          >
        </figure>
        <div class="content-wrapper">
          <h2 class="ttu fw7 is-size-6">{{ blog.title }}</h2>
          <p class="mv3 opacity-70">{{ blog.description }}</p>
          <div class="card ph3 pv2 br3 is-size-7 ttu">
            <div class="flex flex-column-ns items-center">
              <div class="flex items-center mr-auto">
                <figure class="mr3 image is-32x32">
                  <img class="box-shadow-1 br-100" :src="blog.user.avatar" :alt="blog.user.name">
                </figure>
                <time :datetime="blog.createdAt">{{ blog.createdAt | moment("dddd, MMMM Do YYYY") }}</time>
              </div>
              <nuxt-link :to="`/blogs/${blog.id}`" class="b is-size-7 has-text-dark">
                <span class="mr2">Read more</span>
                <font-awesome-icon icon="arrow-right" />
              </nuxt-link>
            </div>
          </div>

        </div>
      </div>
    </div>

    <Pagination />

  </div>
</template>


<script>
  // import WaveTop from '~/components/WaveTop.vue';
  // import SidebarRight from '~/components/SidebarRight.vue';
  // import PageTitle from '~/components/PageTitle.vue';
  import Pagination from '~/components/Pagination.vue';
  import Helper from '~/plugins/helperMixin.js';

  export default {
    name: "blogs-sidebar-left",
    layout: 'sidebarLeft',
    mixins: [Helper],
    created () {
      this.$store.commit('SET_PAGE_TITLE', "Blogs with sidebar left")
    },
    components: {
      Pagination,
    },
    data() {
      return {
        blogs: [],
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
    async asyncData({ app }) {
      try {
        const blogs = await app.$axios.$get('/blogs?_expand=user&_sort=createdAt&_order=desc')
        return { blogs }
      } catch (error) {
        // console.log("err", error);
        return { error: { message: "An unexpected error occurred, blog contents could not be retrieved." } }
      }
    },
  }
</script>
