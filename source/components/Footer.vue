<template>
  <footer>
    <WaveTop position="top" color="light" />
    <section class="footer">
      <div class="container">
        <div class="columns">
          <div class="column">
            <div class="block">
              <h1 class="brand is-size-5 fw9 ttu mb3">Source</h1>
              <div class="content">
                <p>Source is a great tool for creating modern web sites for your startups. If you need help to build your next react project, <nuxt-link class="fw5" to="/contact">Please let us know.</nuxt-link></p>
              </div>
              <div class="content">
                <div class="flex flex-wrap">
                  <a class="pr2 pv1" target="_blank" href="https://instagram.com/themebiotic"><i class="mdi mdi-instagram"></i> Instagram</a>
                  <a class="pr2 pv1" target="_blank" href="https://youtube.com/themebiotic"><i class="mdi mdi-youtube-play"></i> YouTube</a>
                  <a class="pr2 pv1" target="_blank" href="https://twitter.com/themebiotic"><i class="mdi mdi-twitter"></i> Twitter</a>
                  <a class="pr2 pv1" target="_blank" href="https://facebook.com/themebiotic"><i class="mdi mdi-facebook"></i> Facebook</a>
                  <a class="pr2 pv1" target="_blank" href="https://medium.com/@themebiotic"><i class="mdi mdi-medium"></i> Medium</a>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-two-thirds">
            <div class="columns is-mobile is-multiline">
              <div class="column is-half-mobile is-half-tablet is-one-quarter-desktop">
                <h3 class="is-size-6 fw6 mb3">Company</h3>
                <ul class="footer-menu-list">
                  <li><nuxt-link to="/about">About</nuxt-link></li>
                  <li><nuxt-link to="/blogs">Blog</nuxt-link></li>
                  <li><nuxt-link to="/jobs">Jobs</nuxt-link></li>
                  <li><nuxt-link to="/terms-of-service">Terms of Service</nuxt-link></li>
                  <li><nuxt-link to="/privacy-policy">Privacy Policy</nuxt-link></li>
                  <li><nuxt-link to="/sitemap">Sitemap</nuxt-link></li>
                </ul>
              </div>
              <div class="column is-half-mobile is-half-tablet is-one-quarter-desktop">
                <h3 class="is-size-6 fw6 mb3">Products</h3>
                <ul class="footer-menu-list">
                  <li><nuxt-link to="#Templates">Templates</nuxt-link></li>
                  <li><nuxt-link to="#Designer">Web Design</nuxt-link></li>
                  <li><nuxt-link to="#SEO">SEO</nuxt-link></li>
                  <li><nuxt-link to="#Hosting">Hosting</nuxt-link></li>
                  <li><nuxt-link to="#Directory-listing">Directory listing</nuxt-link></li>
                  <li><nuxt-link to="#MobileApps">Mobile apps</nuxt-link></li>
                  <li><nuxt-link to="#Pricing">Pricing</nuxt-link></li>
                </ul>
              </div>
              <div class="column is-half-mobile is-half-tablet is-one-quarter-desktop">
                <h3 class="is-size-6 fw6 mb3">Support &amp; Help</h3>
                <ul class="footer-menu-list">
                  <li><nuxt-link to="#examples" >Examples</nuxt-link></li>
                  <li><nuxt-link to="#tutorials" >Tutorials</nuxt-link></li>
                  <li><nuxt-link to="#forums" >Forums</nuxt-link></li>
                  <li><nuxt-link to="/services" >Services</nuxt-link></li>
                  <li><nuxt-link to="/contact" >Contact Support</nuxt-link></li>
                  <li><nuxt-link to="/hire-us" >Hire Us</nuxt-link></li>
                </ul>
              </div>
              <div class="column is-half-mobile is-half-tablet is-one-quarter-desktop">
                <h3 class="is-size-6 fw6 mb3">Try Source</h3>
                <ul>
                  <li><nuxt-link to="#">Customization</nuxt-link></li>
                  <li><nuxt-link to="/pricing">Pricing</nuxt-link></li>
                  <li><nuxt-link to="#">Customers</nuxt-link></li>
                  <li><nuxt-link to="#">Request a Demo</nuxt-link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="content has-text-centered is-small">
          <p>
            <strong class="ttu">Source</strong> by <a href="https://themebiotic.com">Themebiotic</a>.
            ©2018 source.themebiotic.com, inc. All Rights reserved.
          </p>
        </div>
      </div>
    </section>
  </footer>
</template>

<script>
  import WaveTop from '~/components/WaveTop.vue';
  export default {
    components: {
      WaveTop,
    },
  }
</script>
