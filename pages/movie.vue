<template>
  <div class="relative">
    <img
      src="design2.png"
      class="fixed bottom-0 right-0 -mb-32 -mr-32"
      style="z-index: -1;"
    />
    <div class="p-5 m-auto md:container md:px-0 sm:p-10">
      <template v-if="loading">
        <MoviePlaceholder></MoviePlaceholder>
      </template>
      <template v-else>
        <h1>{{ movie.Title }}</h1>
        <div class="w-full sm:w-9/12 md:w-1/2 xl:w-4/12">
          <img
            :src="movie.Poster !== 'N/A' ? movie.Poster : 'logo.png'"
            class="object-fill object-center w-full mt-3 rounded-lg shadow-lg"
            style="height: 350px;"
          />
          <div class="flex flex-wrap-reverse mt-6 sm:flex-no-wrap">
            <p
              class="w-full mt-2 text-sm sm:mt-0 sm:w-8/12"
              style="color: #343434;"
            >
              {{ movie.Plot }}
            </p>
            <div class="w-full sm:w-4/12">
              <img :src="`star${movie.Rating}.png`" class="sm:ml-auto" />
            </div>
          </div>
          <ul class="mt-4">
            <li v-for="(detail, key) in movie.details" :key="key">
              {{ key }}: {{ detail }}
            </li>
          </ul>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import LoaderMixin from '@/mixins/LoaderMixin'

export default {
  name: 'Movie',
  mixins: [LoaderMixin],
  data() {
    return {
      movie: {},
    }
  },
  mounted() {
    this.$axios
      .$get(
        `https://www.omdbapi.com/?apikey=f6084cd4&t=${this.$route.query.title}`
      )
      .then((movie) => {
        console.log(movie)
        const {
          Title,
          Poster,
          Plot,
          imdbRating: Rating,
          Runtime: Duration,
          Genre,
          Director,
          Actors,
          Year,
        } = movie
        this.movie = {
          Title,
          Poster,
          Plot,
          Rating: Math.round(Rating / 2),
          details: { Duration, Genre, Director, Actors, Year },
        }
        this.loading = false
      })
  },
}
</script>
