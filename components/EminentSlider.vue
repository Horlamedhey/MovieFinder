<template>
  <div>
    <h2 class="underline">{{ title }}</h2>

    <div
      class="flex flex-no-wrap mt-6 space-x-4 overflow-x-auto"
      style="-webkit-overflow-scrolling: touch"
    >
      <template v-if="loading">
        <EminentSlidePlaceholder
          v-for="n in 10"
          :key="n"
        ></EminentSlidePlaceholder>
      </template>
      <h3 v-else-if="movies.length === 0" class="text-gray-500">
        No movies found
      </h3>
      <template v-else>
        <div
          v-for="movie in movies"
          :key="movie.imdbID"
          class="
            relative
            w-11/12
            h-64
            overflow-hidden
            rounded-lg
            shadow-lg
            sm:w-7/12
            md:w-5/12
            lg:w-4/12
            xl:w-3/12
          "
          style="flex: 0 0 auto"
        >
          <n-link
            :to="{
              path: '/movie',
              query: { title: movie.Title },
            }"
          >
            <img
              :src="movie.Poster !== 'N/A' ? movie.Poster : 'logo.png'"
              class="object-cover object-center w-full h-full"
            />
            <div
              class="
                absolute
                bottom-0
                left-0
                right-0
                px-2
                py-2
                bg-black bg-opacity-75
                sm:px-5
                text-gray-variant2
              "
            >
              <h3 class="truncate">{{ movie.Title }}</h3>

              <div class="mt-2">
                <h4>{{ movie.imdbID }}</h4>
                <div class="flex items-center justify-between">
                  <h4>{{ movie.Year }}</h4>
                  <img src="star5.png" />
                </div>
              </div>
            </div>
          </n-link>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SlideCardMixin from '@/mixins/SlideCardMixin'

export default Vue.extend({
  name: 'EminentSlider',
  mixins: [SlideCardMixin],
})
</script>
