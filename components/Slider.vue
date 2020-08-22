<template>
  <div>
    <h2 class="underline">{{ title }}</h2>
    <div
      class="flex flex-no-wrap mt-6 space-x-4 overflow-x-auto"
      style="-webkit-overflow-scrolling: touch;"
    >
      <div
        v-for="n in 10"
        :key="n"
        class="relative overflow-hidden rounded-lg shadow-lg"
        style="flex: 0 0 auto;"
      >
        <img
          src="movie.jpg"
          class="w-full"
          style="height: 250px; width: 200px;"
        />
        <div
          class="absolute top-0 left-0 right-0 px-5 py-2 bg-black-variant text-gray-variant2"
        >
          <img src="star5.png" class="ml-auto" />
        </div>
        <div
          class="absolute bottom-0 left-0 right-0 px-5 py-2 text-center bg-black-variant text-gray-variant2"
        >
          <h4>Vampire</h4>
          <div class="mt-2">
            <p>Directed by Shunji Iwai</p>
            <p>2020</p>
          </div>
        </div>
      </div>
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
