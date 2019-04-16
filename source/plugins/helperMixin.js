export default {
  methods: {
    isArray: function(a) {
      return (!!a) && (a.constructor === Array);
    },
    isObject: function(a) {
      return (!!a) && (a.constructor === Object);
    }
  }
}
