import Vue, { PropOptions } from 'vue'
interface Movie {
  Poster: String
  Title: String
  Type: String
  Year: String
  imdbID: Number
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
