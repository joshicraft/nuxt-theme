<template>
  <a @click="imageModal()">
    <i class="mdi mdi-24px mdi-fullscreen"></i>
  </a>
</template>

<script>
 export default {
    props: {
      image : { default: "", type: String },
      ratio : { default: "", type: String },
    },
    methods: {
      imageModal() {
        if (this.image) {
          this.$modal.open(
            `<div class="image ${this.ratio}">
              <img class="full-modal-img" src="${this.image}">
            </div>`
          )
        }
      }
    }
  }
</script>
