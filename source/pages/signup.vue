<template>
  <main class="vh-100-m">
    <section class="section hero bg-primary vh-10-m">
      <div class="section columns is-gapless items-center is-centered vh-100-m">
        <div class="column is-10 is-6-desktop">
          <div class="card br3 pa4" data-aos="zoom-out" data-aos-delay="100">
            <header class="has-text-centered mb4">
              <h1 class="is-4 title ttu">Create a new account</h1>
              <h2 class="subtitle has-text-grey">No credit card required</h2>
            </header>
            <SignupForm />
            <hr/>
            <div class="mt3 content has-text-centered">
              <div><p>Already have an account? <nuxt-link to="/signin">Sign in</nuxt-link></p></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
  import Section from '~/components/Section.vue';
  import SignupForm from '~/components/SignupForm.vue';
  export default {
    name: "signup",
    layout: 'simple',
    components: {
      Section,
      SignupForm,
    },
    head() {
      return {
        htmlAttrs: {
          class: "overflow-hidden-m"
        }
      }
    },
    created () {
      this.$store.commit('SET_PAGE_TITLE', "")
    },
  }
</script>
