import Vue, { PropOptions } from 'vue'
interface Movie {
  image: String
  title: String
  director: String
  year: String
  rating: Number
}
export default Vue.extend({
  props: {
    title: {
      type: String,
      default: '',
    } as PropOptions<string>,

    movies: {
      type: Array,
      default: () => [],
    } as PropOptions<Array<Movie>>,

    loading: {
      type: Boolean,
      default: true,
    } as PropOptions<boolean>,
  },
})
