<template>
  <div>
    <h2 class="underline">{{ title }}</h2>

    <div
      class="flex flex-no-wrap mt-6 space-x-4 overflow-x-auto"
      style="-webkit-overflow-scrolling: touch;"
    >
      <template v-if="loading">
        <EminentSlidePlaceholder
          v-for="n in 10"
          :key="n"
        ></EminentSlidePlaceholder>
      </template>
      <template v-else>
        <div
          v-for="n in 10"
          :key="n"
          class="relative w-11/12 h-64 overflow-hidden rounded-lg shadow-lg sm:w-7/12 md:w-5/12 lg:w-4/12 xl:w-3/12"
          style="flex: 0 0 auto;"
        >
          <n-link to="/movie">
            <img src="movie.jpg" class="w-full h-full" />
            <div
              class="absolute bottom-0 left-0 right-0 flex justify-between px-5 py-2 bg-black-variant text-gray-variant2"
            >
              <div>
                <h3>Vampire</h3>
                <div class="mt-2">
                  <h4>Directed by Shunji Iwai</h4>
                  <h4>2020</h4>
                </div>
              </div>
              <div>
                <img src="star5.png" />
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
