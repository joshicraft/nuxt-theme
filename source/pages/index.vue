<template>
  <main>
    <div class="wrapper">
      <div class="hero is-medium is-primary lazy" data-image="/img/intro-bg@2x.jpg" >
        <div class="hero-body">
          <section class="section">
            <div class="container">
              <div class="columns items-center">
                <div class="column is-7">
                  <h1 data-aos="fade-down" class="title is-spaced is-1"><b>Source</b> is a great tool for creating modern web sites for your <b>startups</b></h1>
                  <h2 data-aos="fade-down" data-aos-delay="100" class="subtitle">If you do not have enough experience on how to do a modern website, you can contact us. Let me show you how to make the latest technology startup sites using the Source</h2>
                  <div data-aos="fade-down" data-aos-delay="200" class="level">
                    <p class="level-left">
                      <a class="level-item button is-light is-rounded is-medium ttu">
                        <small class="fw6">Purchase the Theme</small>
                        <span class="icon"><i class="mdi mdi-arrow-right" /></span>
                      </a>
                      <a class="level-item has-text-light"  href="#">Learn more</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>

    <!-- Describe the product -->
    <section data-aos="fade-right" class="hero is-medium overlay-bg-white" :style="hero1" >
      <div class="hero-body">
        <div class="container">
          <div class="columns is-desktop">
            <div class="column is-5 is-offset-7">
              <div class="content">
                <h2 data-aos="fade-left" data-aos-delay="100" class="title is-2">Describe your project to users with media blocks</h2>
                <h3 data-aos="fade-left" data-aos-delay="200" class="title is-5">At nos hinc posthac, sitientis piros Afros. Quae vero auctorem tractata ab fiducia dicuntur.</h3>
                <p data-aos="fade-left" data-aos-delay="300">Ullamco laboris nisi ut aliquid ex ea commodi consequat. Ambitioni dedisse scripsisse iudicaretur. Quid securi etiam tamquam eu fugiat nulla pariatur.</p>
                <a data-aos="fade-left" data-aos-delay="400" class="button is-rounded is-outlined is-medium ttu">
                  <small class="fw6">Quick start video</small><span class="icon"><i class="mdi mdi-24px mdi-play-circle-outline"></i></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section data-aos="fade-up" data-aos-delay="300" class="section">
      <div class="container">
        <b-tabs position="is-centered" type="is-toggle-rounded">
          <b-tab-item label="Top Features" icon="nodejs">
            <section class="mt4">
              <div class="columns is-multiline is-desktop">
                <div class="column mv3 is-one-third-desktop">
                  <MediaObject title="Fully Responsive" :image="webIcons.responsive" :body="lorem" />
                </div>
                <div class="column mv3 is-one-third-desktop">
                  <MediaObject title="Beautiful Design" :image="webIcons.quality" :body="lorem" />
                </div>
                <div class="column mv3 is-one-third-desktop">
                  <MediaObject title="Server Side Rendering" :image="webIcons.html" :body="lorem" />
                </div>
                <div class="column mv3 is-one-third-desktop">
                  <MediaObject title="SEO Optimized" :image="webIcons.testing" :body="lorem" />
                </div>
                <div class="column mv3 is-one-third-desktop">
                  <MediaObject title="Retina Ready" :image="webIcons.attractive" :body="lorem" />
                </div>
                <div class="column mv3 is-one-third-desktop">
                  <MediaObject title="Blazingly Fast" :image="webIcons.chronometer" :body="lorem" />
                </div>
              </div>
            </section>
          </b-tab-item>

          <b-tab-item label="Workflow" icon="source-pull">
            <section class="section">
              <div class="columns">
                <div class="column">
                  <div class="content ph4">
                    <img class="mb3" src="/img/undraw/brainstorming.svg">
                    <p class="title is-6">PLANNING</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit</p>
                  </div>
                </div>
                <div class="column">
                    <div class="content ph4">
                      <p class="title is-6">DEVELOPING</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit</p>
                      <img src="/img/undraw/development.svg">
                    </div>
                  </div>
                <div class="column">
                  <div class="content ph4">
                    <img class="mb4" src="/img/undraw/active_support.svg">
                    <p class="title is-6">SUPPORTING</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit</p>
                  </div>
                </div>
              </div>
            </section>
          </b-tab-item>

          <b-tab-item label="Support &amp; Help" icon="email-outline">
            <section class="section">
              <h2 class="is-size-3 has-text-weight-semibold has-text-centered mb5">Frequently Asked Questions</h2>
              <Faq/>
            </section>
          </b-tab-item>
        </b-tabs>
      </div>
    </section>



    <SectionWave :color="primaryClass">
      <div class="container is-fluid">
        <div class="columns items-center is-multiline">

          <div class="column is-12 is-one-third-fullhd">
            <div class="content">
              <h2 data-aos="fade-in" class="title is-2 has-text-weight-semibold is-uppercase">Build Your Starup Website Now</h2>
              <p data-aos="fade-in" data-aos-delay="100">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
          <div class="column">
            <div class="columns items-stretch  ">

              <div class="column">
                <div data-aos="fade-left" data-aos-delay="300" class="card br2 h-100">
                  <div class="card-image flex items-center justify-center pt5 pb3">
                    <figure class="image is-96x96">
                      <img alt="Innovation" :src="webIcons.sitemap">
                    </figure>
                  </div>
                  <div class="card-content has-text-centered">
                    <h3 class="b is-size-5 mb2">Planning</h3>
                    <p class="mb4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                </div>
              </div>

              <div class="column">
                <div data-aos="fade-left" data-aos-delay="400" class="card br2 h-100">
                  <div class="card-image flex items-center justify-center pt5 pb3">
                    <figure class="image is-96x96">
                      <img alt="Innovation" :src="webIcons.tools">
                    </figure>
                  </div>
                  <div class="card-content has-text-centered">
                    <h3 class="b is-size-5 mb2">Developing</h3>
                    <p class="mb4">Lorem ipsum dolor sit adipiscing elit.  enim in eros elementum</p>
                  </div>
                </div>
              </div>

              <div class="column">
                <div data-aos="fade-left" data-aos-delay="500" class="card br2 h-100">
                  <div class="card-image flex items-center justify-center pt5 pb3">
                    <figure class="image is-96x96">
                      <img alt="Innovation" :src="webIcons.security">
                    </figure>
                  </div>
                  <div class="card-content has-text-centered">
                    <h3 class="b is-size-5 mb2">Supporting</h3>
                    <p class="mb4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.  enim in eros elementum</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </SectionWave>

    <section class="hero">
      <div class="hero-body">
        <h2 data-aos="fade-in" class="title is-6 is-uppercase has-text-centered">Our Latest Works</h2>
      </div>
      <!-- LatestWorks block  -->
      <LatestWorks data-aos="fade-up" data-aos-delay="250" />
    </section>

    <SectionWave color="light">
      <div class="hero-body">
        <h2 data-aos="fade-in" class="title is-6 is-uppercase has-text-centered">Latest Blog Posts</h2>
      </div>
      <div class="container mb5">
        <div class="columns items-stretch is-multiline is-centered">

          <div v-for="(blog,index) in blogs" :key="blog.id" data-aos="fade-up" :data-aos-delay="index*100" class="column is-half-tablet is-one-third-desktop">
            <div class="hero is-white br3 h-100 box-shadow-1">

              <!-- Blog image -->
              <div class="mb1">
                <figure class="image is-16by9">
                  <img :alt="blog.title" class="br3 br--top lazy"
                    :src="blog.image"
                    :srcset="`${blog.image} 1x, ${blog.retina} 2x`"
                  >
                </figure>
              </div>

              <div class="content pa4" style="margin-bottom: 0;">
                <!-- Blog title link -->
                <nuxt-link :to="`/blogs/${blog.id}`" >
                  <h3 class="is-size-5 ttu has-text-weight-semibold">{{ blog.title }}</h3>
                </nuxt-link>
                <!-- Blog body short. -->
                <p class="has-text-grey">{{ blog.description }}</p>
              </div>

              <div class="ph4 mb3" style="margin-top: auto;">
                <div class="tags">
                  <nuxt-link :to="`/blogs/tags/${t.id}`" v-for="t in blog.tags" :key="t.tag" class="tag">
                    <span>{{ t.title }}</span>
                  </nuxt-link>
                </div>
              </div>

              <div class="media items-center ph4 pb3" style="padding-top: 0;">
                <div class="media-left">
                  <figure class="image is-24x24">
                    <img class="br-100" :src="blog.user.avatar" :alt="blog.user.name">
                  </figure>
                </div>
                <div class="media-content is-size-7 flex items-center">
                  <h4 class="b mr2">{{ blog.user.name }}</h4>
                  <div class="flex ml-auto">
                    <time :datetime="blog.createdAt">{{ blog.createdAt | moment("from", "now") }}</time>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </SectionWave>

    <section class="section">

    <div class="container">
      <div class="columns is-centered">
        <div class="column is-10-desktop">

          <article data-aos="fade-up" data-aos-delay="250" class="message" v-bind:class="`is-${primaryClass}`" >
            <div class="message-body br3">
              <div class="level is-tablet mh4 mv3">

                <div class="level-left">
                  <div class="level-item">
                  <div class="p">
                    <h2 class="is-size-4 fw6">Try <strong>Source</strong> free for 30 days</h2>
                    <h3>Sign up now and create your first project.</h3>
                  </div>
                  </div>
                </div>

                <div class="level-right">
                  <div class="level-item">
                    <a href="#signup" class="button is-medium" v-bind:class="`is-${primaryClass}`">
                      <span class="mr3">Get Started</span>
                      <font-awesome-icon icon="arrow-right" />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </article>

        </div>
      </div>
    </div>
  </section>

  </main>
</template>

<script>
  // SVG icons
  import * as webIcons from '~/plugins/web-icons.js';

  // Componenets
  import MediaObject from '~/components/MediaObject.vue';
  // import ContactForm from '~/components/ContactForm.vue';
  import SectionWave from '~/components/SectionWave.vue';
  import WaveTop from '~/components/WaveTop.vue';

  // Blocks
  import Faq from '~/components/Faq.vue';
  import LatestWorks from '~/components/LatestWorks.vue';

  // const artboard = require("~/assets/images/artboard.png");

  const hero1 = {
    backgroundSize: 'contain',
    backgroundPosition: "left",
    backgroundRepeat: "no-repeat",
    backgroundImage: "url('/img/artboard.png')"
  };

  export default {
    name: "home",
    layout: 'base',
    components: {
      MediaObject,
      SectionWave,
      WaveTop,
      Faq,
      LatestWorks,
    },
    created () {
      this.$store.commit('SET_PAGE_TITLE', "")
    },
    data() {
      return {
        isOpen: true,
        isActive: true,
        primaryClass: 'primary',
        hero1,
        webIcons,
        lorem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
      }
    },
    async asyncData({ app }) {
      try {
        const blogs = await app.$axios.$get('/blogs?_expand=user&_sort=createdAt&_order=desc')
        return { blogs }
      } catch (error) {
        // console.log("err", error);
        return { error: { message: "An unexpected error occurred, blog contents could not be retrieved." } }
      }
    }
  }
</script>
