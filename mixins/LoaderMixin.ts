import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      loading: true,
    }
  },
  mounted() {
    setTimeout(() => {
      this.loading = false
    }, 3000)
  },
})
