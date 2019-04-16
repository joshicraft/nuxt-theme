<template>
  <article class="media">
    <figure class="media-left">
      <p class="image is-64x64">
        <img v-if="image" :src="image" />
      </p>
    </figure>
    <div class="media-content">
      <div class="content">
        <h3 :class="titleClass">{{ title }}</h3>
        <p>{{ body }}</p>
      </div>
    </div>
  </article>
</template>

<script>
  export default {
    props: {
      title: { default: "", type: String },
      body:  { default: "", type: String },
      image: { default: "", type: String },
      titleClass: {
        default: "is-size-6 is-uppercase has-text-weight-semibold",
        type: String
      }
    }
  }
</script>
