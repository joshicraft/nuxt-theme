<template>
  <main>
    <Section>
      <div class="columns is-variable is-5">
        <div class="column is-half">
          <div data-aos="fade-down">
            <div class="content is-medium">
              <h2 class="is-size-4">Get in touch with us</h2>
              <p>Technical support, Billing & Licensing and Account Management services are currently available in English</p>
              <p>Our technical support is available by phone or email from 9am to 11pm BST, Monday through Friday.</p>
            </div>
            <div class="content is-medium">
              <p>+1 (585) 235-4665</p>
              <p>
                43 North Clinton Aveneu<br/>
                Rochester<br/>
                New York, NY 14604
              </p>
            </div>
          </div>
        </div>
        <div  data-aos="fade-down" data-aos-delay="100" class="column is-half">
          <section class="notification">

            <b-field horizontal label="Full name">
              <b-field>
                <b-input placeholder="First name" maxlength="30"></b-input>
              </b-field>
              <b-field>
                <b-input placeholder="Last name" maxlength="30"></b-input>
              </b-field>
            </b-field>

            <b-field horizontal label="Company">
              <b-input placeholder="ACME Inc." maxlength="60"></b-input>
            </b-field>

            <b-field horizontal label="Email">
              <b-input type="email" placeholder="john@example.com" maxlength="30"></b-input>
            </b-field>

            <b-field horizontal label="Subject">
              <b-input placeholder="e.g Technical support" maxlength="90"></b-input>
            </b-field>

            <b-field horizontal label="Message">
              <b-input maxlength="400" type="textarea"></b-input>
            </b-field>

            <b-field horizontal>
              <p class="control">
                <button class="button is-primary">Send message</button>
              </p>
            </b-field>
          </section>
        </div>
      </div>
    </Section>
    <no-ssr>
      <googlemaps-map ref="map"
      :options="mapOptions"
      :center.sync="marker.center"
      :zoom.sync="marker.zoom"
      >
        <googlemaps-marker
          :position="marker.position" />
      </googlemaps-map>
    </no-ssr>
    <Subscribe data-aos="zoom-out" data-aos-delay="500" />
  </main>
</template>

<style>
  .vue-google-map {
    width: 100%;
    height: 400px;
  }
</style>

<script>
  import Section from '~/components/Section.vue';
  import Subscribe from '~/components/Subscribe.vue';

  export default {
    name: "contact",
    layout: 'base',
    components: {
      Section,
      Subscribe,
    },
    data(){
      return {
        mapOptions: {
          disableDefaultUI: true,
          styles: [
            {
              "featureType": "road",
              "stylers": [
                { "hue": "#5e00ff" },
                { "saturation": -79 }
              ]
            },
            {
              "featureType": "poi",
              "stylers": [
                { "saturation": -78 },
                { "hue": "#6600ff" },
                { "lightness": -47 },
                { "visibility": "off" }
              ]
            },
            {
              "featureType": "road.local",
              "stylers": [
                { "lightness": 22 }
              ]
            },
            {
              "featureType": "landscape",
              "stylers": [
                { "hue": "#6600ff" },
                { "saturation": -11 }
              ]
            },
            {},
            {},
            {
              "featureType": "water",
              "stylers": [
                { "saturation": -65 },
                { "hue": "#1900ff" },
                { "lightness": 8 }
              ]
            },
            {
              "featureType": "road.local",
              "stylers": [
                { "weight": 1.3 },
                { "lightness": 30 }
              ]
            },
            {
              "featureType": "transit",
              "stylers": [
                { "visibility": "simplified" },
                { "hue": "#5e00ff" },
                { "saturation": -16 }
              ]
            },
            {
              "featureType": "transit.line",
              "stylers": [
                { "saturation": -72 }
              ]
            }
          ]
        },
        marker: {
          id: "NY",
          zoom: 14,
          center: {
            lat: 43.158059,
            lng: -77.606814
          },
          position: {
            lat: 43.158059,
            lng: -77.606814
          }
        },
      }
    },
    created () {
      this.$store.commit('SET_PAGE_TITLE', "Contact us")
    },
  }
</script>
