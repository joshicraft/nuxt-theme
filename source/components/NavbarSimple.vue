<template>
  <nav class="navbar is-static-top is-dark is-transparent mv3">
    <div class="nav-wrapper container">
      <div class="navbar-brand">
        <nuxt-link class="navbar-item" to="/">
          <h1 class="brand is-size-5 fw9 ttu">Source</h1>
        </nuxt-link>
        <a v-for="s in social" class="navbar-item" :key="s.name" target="_blank" :href="s.url">
          <i :class="`mdi mdi-${s.icon}`"></i> <span class="is-hidden">{{s.name}}</span>
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    data() {
      return {
        social: [
          { name: "instagram", icon: "instagram", url: "https://instagram.com/themebiotic" },
          { name: "youtube", icon: "youtube-play", url: "https://youtube.com/themebiotic" },
          { name: "twitter", icon: "twitter", url: "https://twitter.com/themebiotic" },
          { name: "facebook", icon: "facebook", url: "https://facebook.com/themebiotic" },
          { name: "medium", icon: "medium", url: "https://medium.com/@themebiotic" },
        ]
      }
    }
  }
</script>
