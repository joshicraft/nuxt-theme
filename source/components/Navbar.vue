<template>
  <nav class="navbar is-static-top is-dark is-transparent mv3">
    <div class="nav-wrapper container">
    <div class="navbar-brand">
      <nuxt-link class="navbar-item" to="/">
        <!-- <img class="mr2" src="~/assets/images/logo.png" alt="Source logo"> -->
        <h1 class="brand is-size-5 fw9 ttu">Source</h1>
      </nuxt-link>
      <div class="navbar-burger burger" v-on:click="showNav = !showNav" v-bind:class="{ 'is-active' : showNav }">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div class="navbar-menu" v-bind:class="{ 'is-active' : showNav }">
      <div class="navbar-end">

        <template v-for="(nav,index) in MainNavigation">
          <nuxt-link active-class="is-active" class="navbar-item" :key="index" v-if="!nav.submenu" :to="nav.uri" exact>{{ nav.title }}</nuxt-link>
          <div v-if="nav.submenu" :key="index" class="navbar-item has-dropdown is-hoverable">
            <nuxt-link active-class="is-active" class="navbar-link" :to="nav.uri" exact>{{ nav.title }}</nuxt-link>
            <div class="navbar-dropdown is-boxed">
              <template v-for="(sub,index) in nav.submenu">
                <div v-if="sub.uri === '---'" class="navbar-item" :key="`sub-div-${index}`" ><p class="menu-label">{{ sub.title }}</p></div>
                <nuxt-link v-if="sub.uri != '---'" :key="`sub-item-${index}`" active-class="is-active" class="navbar-item" :to="sub.uri" exact>{{ sub.title }}</nuxt-link>
              </template>
            </div>
          </div>
        </template>

        <LoginDropdown />
      </div>
    </div>
    </div>
  </nav>
</template>

<script>

import LoginDropdown from '~/components/LoginDropdown.vue';
import MainNavigation from '~/data/navigation.json';

export default {
  data() {
    return {
      showNav: false,
      MainNavigation
    }
  },
  components: {
    LoginDropdown,
  }
}

</script>
