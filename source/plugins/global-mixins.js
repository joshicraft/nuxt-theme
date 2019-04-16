import Vue from 'vue'

Vue.mixin({
  methods: {
    cloudinary: {
      baseUrl: 'https://res.cloudinary.com/icraft/image/upload/v1555378773/icraft/test/'
    },
    imgSrc(img, data){
      return this.cloudinary.baseUrl + img
    }
  }
})
