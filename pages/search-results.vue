<template>
  <div class="relative">
    <img
      src="design1.png"
      class="absolute top-0 right-0 -mt-24"
      style="z-index: -1;"
    />
    <div class="p-5 m-auto md:container md:px-0 sm:p-10">
      <!-- Movies -->
      <EminentSlider
        title="Movies"
        :loading="loading"
        :movies="movies"
      ></EminentSlider>
      <!-- Series -->
      <EminentSlider
        title="Series"
        :loading="loading"
        :movies="series"
        class="mt-24"
      ></EminentSlider>
      <!-- Episodes -->
      <EminentSlider
        title="Episodes"
        :loading="loading"
        :movies="episodes"
        class="mt-24"
      ></EminentSlider>
    </div>
  </div>
</template>

<script>
import LoaderMixin from '@/mixins/LoaderMixin'

export default {
  name: 'SearchResults',
  mixins: [LoaderMixin],
  data() {
    return {
      movies: [],
      series: [],
      episodes: [],
    }
  },
  watch: {
    '$route.query.title'(val) {
      this.loading = true
      this.fetchMovies(val)
    },
  },
  mounted() {
    this.fetchMovies(this.$route.query.title)
  },
  methods: {
    fetchMovies(keyword) {
      this.$axios
        .$get(
          `https://www.omdbapi.com/?apikey=f6084cd4&s=${keyword}&type=movie`
        )
        .then((movies) => {
          this.movies = movies.Search
        })
        .then(() => {
          this.$axios
            .$get(
              `https://www.omdbapi.com/?apikey=f6084cd4&s=${keyword}&type=series`
            )
            .then((series) => {
              this.series = series.Search
            })
            .then(() => {
              this.$axios
                .$get(
                  `https://www.omdbapi.com/?apikey=f6084cd4&s=${keyword}&type=episode`
                )
                .then((episodes) => {
                  this.episodes = episodes.Search
                  this.loading = false
                })
            })
        })
    },
  },
}
</script>
