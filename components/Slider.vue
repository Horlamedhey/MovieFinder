<template>
  <div>
    <h2 class="underline">{{ title }}</h2>
    <div
      class="flex flex-no-wrap mt-6 space-x-4 overflow-x-auto"
      style="-webkit-overflow-scrolling: touch;"
    >
      <template v-if="loading">
        <SlidePlaceholder v-for="n in 10" :key="n"></SlidePlaceholder>
      </template>
      <template v-else>
        <div
          v-for="movie in movies"
          :key="movie.imdbID"
          class="relative overflow-hidden rounded-lg shadow-lg"
          style="flex: 0 0 auto;"
        >
          <n-link
            :to="{
              path: '/movie',
              query: { title: movie.Title },
            }"
          >
            <img
              :src="movie.Poster !== 'N/A' ? movie.Poster : 'logo.png'"
              class="object-cover object-center h-full"
              style="width: 200px;"
            />
            <div
              class="absolute top-0 left-0 right-0 px-2 py-2 sm:px-5 bg-black-variant text-gray-variant2"
            >
              <img src="star5.png" class="ml-auto" />
            </div>
            <div
              class="absolute bottom-0 left-0 right-0 px-5 py-2 text-center bg-black-variant text-gray-variant2"
            >
              <h4 class="truncate">{{ movie.Title }}</h4>
              <div class="mt-2">
                <p class="font-bold">{{ movie.imdbID }}</p>
                <p class="font-bold">{{ movie.Year }}</p>
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
  name: 'Slider',
  mixins: [SlideCardMixin],
})
</script>
