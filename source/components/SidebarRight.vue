<template>
  <aside class="sidebar column" :class="['is-' + size, 'is-offset-' + offset ]" >
    <div class="widget">
      <input class="input is-rounded" type="text" placeholder="Search...">
    </div>
    <div class="widget">
      <h3 class="widget-title">Tags</h3>
      <p class="buttons">
        <nuxt-link
          v-for="t in tags"
          :key="t.id"
          :to="`/blogs/tags/${t.id}`"
          active-class="is-active is-danger"
          class="ttc button is-rounded is-small"
        >
          {{ t.title }}
        </nuxt-link>
      </p>
    </div>
    <!-- Featured posts -->
    <div class="widget">
      <h3 class="widget-title">Featured Posts</h3>
      <article class="flex flex-column">
        <a class="image overlay">
          <div class="overlay-content top-1 right-1">
            <span class="tag is-rounded is-danger ttc">personel</span>
          </div>
          <div class="overlay-content bottom-1 left-1">
            <time datetime="2018-04-09T20:41:22Z">Monday, April 9th 2018</time>
            <h3 class="fw6 ttu">JUST AN ONLINE DIARY</h3>
          </div>
          <img class="br3"
            src="/img/blog/blog-3.jpg"
            srcset="/img/blog/blog-3.jpg 1x, /img/blog/blog-3@2x.jpg 2x" alt="This Is The First Blog">
        </a>
      </article>
    </div>
    <div class="widget menu">
      <h3 class="widget-title">Categories</h3>
      <ul class="menu-list">
        <li>
          <a href="#">Development</a>
          <ul>
            <li><a>Web Development</a></li>
            <li><a>Web App Development</a></li>
            <li><a>Mobile App Development</a></li>
          </ul>
        </li>
        <li>
          <a href="#">Design</a>
          <ul>
            <li><a>App Design</a></li>
            <li><a>UI Design</a></li>
            <li><a>Web Design</a></li>
          </ul>
        </li>
        <li><a href="#">Photography</a></li>
        <li><a href="#">Ebooks</a></li>
      </ul>
    </div>
  </aside>

</template>

<script>
  export default {
    name: "sidebar-right",
    props: {
      size: { default: "4", type: String },
      offset: { default: "1", type: String }
    },
    data() {
      return {
        tags: [],
        error: null,
      }
    },
    async mounted() {
      const self = this;
      try {
        const tags = await self.$axios.$get("/tags");
        // return { tags: tags.data }
        this.tags = tags;
      } catch (error) {
        this.error = { message: "An unexpected error occurred, tags contents could not be retrieved." };
        // return { error: { message: "An unexpected error occurred, tags contents could not be retrieved." } }
        this.$toast.open({
          duration: 5000,
          message: this.error.message,
          position: 'is-bottom',
          type: 'is-danger'
        });
      }
    }
  }
</script>
