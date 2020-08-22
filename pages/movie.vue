<template>
  <div class="relative">
    <img
      src="design2.png"
      class="fixed bottom-0 right-0 -mb-32 -mr-32"
      style="z-index: -1;"
    />
    <div class="p-5 m-auto md:container md:px-0 sm:p-10">
      <h1>The One and Only Ivan 2020</h1>
      <div class="w-full sm:w-9/12 md:w-1/2 xl:w-4/12">
        <img
          src="movie.jpg"
          class="w-full mt-3 rounded-lg"
          style="height: 350px;"
        />
        <div class="flex flex-wrap-reverse mt-6 sm:flex-no-wrap">
          <p
            class="w-full mt-2 text-sm sm:mt-0 sm:w-8/12"
            style="color: #343434;"
          >
            A gorilla named Ivan tries to pierce together his past with the help
            of an elephant named Stella as they hatch a plan to escape from
            captivity.
          </p>
          <div class="w-full sm:w-4/12">
            <img src="star5.png" class="sm:ml-auto" />
          </div>
        </div>
        <ul class="mt-4">
          <li>Duration: 1hr 30mins</li>
          <li>Genre: Animation, Adventure, Comedy</li>
          <li>Director: Angelina Jolie</li>
          <li>Cast: Angelina Jolie, Bryan Cranston, Sam Rockwell....</li>
          <li>Year: 2020</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Movie',
})
</script>
