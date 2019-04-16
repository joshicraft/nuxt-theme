<template>
  <div class="columns is-multiline items-stretch is-desktop">
    <template v-for="(f,index) in faq">
      <div :key="f.id" data-aos="zoom-out" :data-aos-delay="index*100" class="column is-half-desktop">
        <article class="content">
          <h2 class="title has-text-weight-semibold is-size-6">{{f.title}}</h2>
          <p>{{f.body}}</p>
        </article>
      </div>
    </template>
  </div>
</template>

<script>
  export default {
    components: {},
    data() {
      return {
        faq: []
      }
    },
    mounted() {
      const self = this;
      const faq = this.$axios.$get('/faq?_sort=weight')
        .then(faq => {
          // console.log("portfolio", portfolio)
          self.faq = faq;
        })
        .catch(err => {
          this.$toast.open({
              duration: 5000,
              message: "An unexpected error occurred, FAQ contents could not be retrieved.",
              position: 'is-bottom',
              type: 'is-danger'
          })
        });
    }
  }
</script>
