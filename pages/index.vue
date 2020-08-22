<template>
  <div class="relative">
    <img
      src="design1.png"
      class="absolute top-0 right-0 -mt-24"
      style="z-index: -1;"
    />
    <div class="p-5 m-auto md:container md:px-0 sm:p-10">
      <!-- New Releases -->
      <EminentSlider
        title="Featured movies"
        :movies="movies"
        :loading="loading"
      ></EminentSlider>

      <!-- Trending -->
      <Slider
        title="New series"
        :movies="series"
        :loading="loading"
        class="mt-24"
      ></Slider>
    </div>
  </div>
</template>

<script>
import LoaderMixin from '@/mixins/LoaderMixin'

export default {
  name: 'Home',
  mixins: [LoaderMixin],
  data() {
    return {
      series: [],
      movies: [],
    }
  },
  mounted() {
    this.$axios
      .$get('https://www.omdbapi.com/?apikey=f6084cd4&s=all&y=2020&type=series')
      .then((series) => {
        this.series = series.Search
      })
      .then(() => {
        this.$axios
          .$get('https://www.omdbapi.com/?apikey=f6084cd4&s=bet&type=movie')
          .then((movies) => {
            this.movies = movies.Search
            this.loading = false
          })
      })
  },
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS

*/
.container {
  @apply min-h-screen;
}
</style>
