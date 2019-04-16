import Vue from 'vue';
import VueMq from 'vue-mq';


// $gap:  32px;
// $tablet: 769px;
// $desktop:  960px + (2 * $gap);
// $widescreen: 1152px + (2 * $gap);
// // $fullhd: 1344px + (2 * $gap);
// $fullhd: 1136px + (2 * $gap);

// // Tachyons
// $mobile-l: 425px;
// $mobile-m: 375px;
// $mobile-s: 320px;

Vue.use(VueMq, {
  breakpoints: { // default breakpoints - customize this
    "mobile-small": 321,
    "mobile-medium": 376,
    "mobile-large": 426,
    tablet: 769,
    desktop: 1025,
    widescreen: 1408,
    // fullhd: 1200,
    // fullhd: Infinity,
  }
})
