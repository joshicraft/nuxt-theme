<template>
  <main class="vh-100">
    <section class="section hero bg-primary vh-100">
      <div class="section columns is-gapless items-center is-centered vh-100-m">
        <div class="column is-8 is-5-desktop">
          <div class="card br3 pa4" data-aos="zoom-out" data-aos-delay="100">
            <header class="has-text-centered mb4">
              <h1 class="is-4 title ttu">Login to your account</h1>
              <h2 class="subtitle has-text-grey">and let's start ...</h2>
            </header>
            <form>
              <b-field horizontal label="Email">
                <b-input type="email" icon="email" placeholder="john_doe@example.com" expanded required></b-input>
              </b-field>
              <b-field horizontal label="Password">
                <b-input type="password" icon="textbox-password" expanded required></b-input>
              </b-field>
              <b-field grouped position="is-right" label="">
                <button class="button is-primary">Sing In</button>
              </b-field>
            </form>
            <hr/>
            <div class="mt3 content has-text-centered">
              <div><p>Need an account? <nuxt-link to="/signup">Create account</nuxt-link></p></div>
              <div><p>Forgot your password? <nuxt-link to="/recover-password">Recover Password</nuxt-link></p></div>
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
    name: "signin",
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
