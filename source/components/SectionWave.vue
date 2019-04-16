<template>
<div class="section-wave--wrapper">
  <svg class="align-top" enable-background="new 0 0 1440 68" viewBox="0 0 1440 68" xmlns="http://www.w3.org/2000/svg">
    <path :class="['fill-' + color]" d="m1622.3 1937.7c0 0-410.7 169.1-913.4 75.5-502.7-93.6-977.7 56.3-977.7 56.3v440h1891.1v-571.8" transform="translate(0-1977)"></path>
  </svg>
  <section class="hero" :class="['is-' + color]" >
    <div class="hero-body">
      <slot></slot>
    </div>
  </section>

  <section class="hero" :class="['is-' + color]" >
    <svg class="align-bottom" enable-background="new 0 0 1440 68" viewBox="0 0 1440 68" xmlns="http://www.w3.org/2000/svg">
      <path :class="['fill-' + bg]" d="m1622.3 1937.7c0 0-410.7 169.1-913.4 75.5-502.7-93.6-977.7 56.3-977.7 56.3v440h1891.1v-571.8" transform="translate(0-1977)"></path>
    </svg>
  </section>

</div>
</template>

<script>
  export default {
    props: {
      color: { default: "primary", type: String },
      bg:    { default: "white", type: String },
    }
  }
</script>
