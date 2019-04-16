<template>
  <div class="container wrapper mb5">
    <div class="columns is-multiline is-variable is-1 is-desktop">

      <div v-for="post in portfolio" v-bind:key="post.id" class="column is-one-third-desktop">
        <figure class="image overlay-hover lazy" :data-image="post.image">
          <!-- Placeholder image 4:3 ratio -->
          <img :src="placeholderRatio43">
          <figcaption>
            <header>
              <h2 class="has-text-weight-semibold is-size-6">{{ post.title }}</h2>
              <h3 class="is-size-6">{{ post.subtitle }}</h3>
            </header>
            <p class="icon-links">
              <LikeButton />
              <ImageZoomButton :image="post.image" />
            </p>
            <p class="description">{{ post.description }}</p>
          </figcaption>
        </figure>
      </div>

    </div>
  </div>
</template>

<script>
  import LikeButton from '~/components/LikeButton.vue';
  import ImageZoomButton from '~/components/ImageZoomButton.vue';

  const placeholderRatio43 = require("~/assets/images/placeholderRatio43.webp");

  export default {
    components: {
      LikeButton,
      ImageZoomButton,
    },
    data() {
      return {
        placeholderRatio43,
        portfolio: []
      }
    },
    mounted() {
      const self = this;
      const portfolio = this.$axios.$get('/portfolios?_sort=createdAt')
        .then(portfolio => {
          // console.log("portfolio", portfolio)
          self.portfolio = portfolio;
        })
        .catch(err => {
          this.$toast.open({
              duration: 5000,
              message: "An unexpected error occurred, portfolio contents could not be retrieved.",
              position: 'is-bottom',
              type: 'is-danger'
          })
        });
    }
  }
</script>
