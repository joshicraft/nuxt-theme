<template>
  <section class="section hero is-primary" :class="{ 'lazy' : Boolean($store.state.pageTitleImage) }" :data-image="$store.state.pageTitleImage">
    <div class="container mt5">
      <div class="content-wrapper">
        <h1 class="title ttc">{{$store.state.pageTitle}}&nbsp;</h1>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: { default: "", type: String }
  }
}
</script>
