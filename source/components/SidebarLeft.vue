<template>
  <aside class="sidebar column" :class="['is-' + size]" >

    <article class="widget message is-info">
      <div class="message-body">
        <p><strong>Simple Message</strong></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </article>
    <!-- Ads -->
    <div class="widget">
      <h3 class="widget-title">Advertisements</h3>
      <article class="hero is-dark ar-1x1 mb3 br2">
        <div class="columns is-mobile wrapper items-center">
          <div class="column has-text-centered">
            <h3 class="b">Advertisement 1</h3>
            <h4 class="is-size-7">Square (1x1)</h4>
          </div>
        </div>
      </article>
      <article class="hero is-dark ar-1x1 br2">
        <div class="columns is-mobile wrapper items-center">
          <div class="column has-text-centered">
            <h3 class="b">Advertisement 2</h3>
            <h4 class="is-size-7">Square (1x1)</h4>
          </div>
        </div>
      </article>
    </div>
  </aside>

</template>

<script>
  export default {
    name: "sidebar-left",
    props: {
      size: { default: "3", type: String }
    }
  }
</script>
