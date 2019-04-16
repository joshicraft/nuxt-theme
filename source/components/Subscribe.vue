<template>
  <Section>
    <h3 class="title">Subscribe</h3>
    <div class="columns items-center">
      <div class="column is-5">
        <article class="content">
          <p>Subscribe to our newsletter to receive exclusive offers and the latest news on our products and services.</p>
        </article>
      </div>
      <div class="column is-7 is-6-desktop is-offset-1-desktop">
        <b-field grouped>
          <b-input type="email" placeholder="email@example.com" rounded expanded></b-input>
           <p class="control">
            <button class="button is-rounded is-outlined is-primary">Subscribe</button>
          </p>
        </b-field>
      </div>
    </div>
  </Section>
</template>


<script>
  import Section from '~/components/Section.vue';
  export default {
    name: "subscribe",
    components: {
      Section,
    }
  }
</script>
