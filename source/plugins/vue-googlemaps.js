
import Vue from "vue";
import 'vue-googlemaps/dist/vue-googlemaps.css';
import VueGoogleMaps from 'vue-googlemaps';

Vue.use(VueGoogleMaps, {
  load: {
    apiKey: 'AIzaSyAKoaHpoayktVxt47yHCerkvKR_6OA_Mz4',
    // libraries: ['places'],
  },
});
