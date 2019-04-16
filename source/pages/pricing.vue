<template>
  <main>
    <Section>

      <div class="columns">
        <div data-aos="flip-up" class="column">
          <div class="message is-large br3">
            <div class="message-body content is-medium">
              <h2>Pricing plans</h2>
              <p>This is our pricing section where you can find our price plans for any budget and demand. With the price level we set for every budget, everyone can get the best service from individual customers to corporate companies.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="pricing-table mt5">
        <div data-aos="fade-up" data-aos-delay="100" class="pricing-plan">
          <div class="plan-header ttu is-size-6">Starter</div>
          <div class="plan-price"><span class="plan-price-amount"><span class="plan-price-currency">$</span>20</span>/month</div>
          <div class="plan-items">
            <div class="plan-item">20GB Storage</div>
            <div class="plan-item">100 Domains</div>
            <div class="plan-item">-</div>
            <div class="plan-item">-</div>
          </div>
          <div class="plan-footer">
            <button class="button is-fullwidth" disabled="disabled">Current plan</button>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-delay="200" class="pricing-plan">
          <div class="plan-header ttu is-size-6">Startups</div>
          <div class="plan-price"><span class="plan-price-amount"><span class="plan-price-currency">$</span>40</span>/month</div>
          <div class="plan-items">
            <div class="plan-item">20GB Storage</div>
            <div class="plan-item">25 Domains</div>
            <div class="plan-item">1TB Bandwidth</div>
            <div class="plan-item">-</div>
          </div>
          <div class="plan-footer">
            <button class="button is-fullwidth">Choose</button>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-delay="300" class="pricing-plan is-active">
          <div class="plan-header ttu is-size-6">Growing Team</div>
          <div class="plan-price"><span class="plan-price-amount"><span class="plan-price-currency">$</span>60</span>/month</div>
          <div class="plan-items">
            <div class="plan-item">200GB Storage</div>
            <div class="plan-item">50 Domains</div>
            <div class="plan-item">1TB Bandwidth</div>
            <div class="plan-item">100 Email Boxes</div>
          </div>
          <div class="plan-footer">
            <button class="button is-fullwidth">Choose</button>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-delay="400" class="pricing-plan">
          <div class="plan-header ttu is-size-6">Enterprise</div>
          <div class="plan-price"><span class="plan-price-amount"><span class="plan-price-currency">$</span>100</span>/month</div>
          <div class="plan-items">
            <div class="plan-item">2TB Storage</div>
            <div class="plan-item">100 Domains</div>
            <div class="plan-item">1TB Bandwidth</div>
            <div class="plan-item">1000 Email Boxes</div>
          </div>
          <div class="plan-footer">
            <button class="button is-fullwidth">Choose</button>
          </div>
        </div>
      </div>
    </Section>
    <section class="section hero is-light" data-aos="zoom-out" data-aos-delay="250">
      <div class="container">
        <div class="hero-body">
          <h2 class="is-size-3 has-text-weight-semibold has-text-centered mb5">Frequently Asked Questions</h2>
          <Faq />
        </div>
      </div>
    </section>
    <Subscribe data-aos="zoom-out" data-aos-delay="250" />
  </main>
</template>
<script>
  import Section from '~/components/Section.vue';
  import Subscribe from '~/components/Subscribe.vue';
  import Faq from '~/components/Faq.vue';
  export default {
    name: "pricing",
    layout: 'base',
    components: {
      Section,
      Subscribe,
      Faq,
    },
    created () {
      this.$store.commit('SET_PAGE_TITLE', "Pricing plans")
    },
  }
</script>
