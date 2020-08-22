<template>
  <div class="relative">
    <img
      src="design1.png"
      class="absolute top-0 right-0 -mt-24"
      style="z-index: -1;"
    />
    <div class="p-5 m-auto md:container md:px-0 sm:p-10">
      <!-- New Releases -->
      <EminentSlider title="New releases" :loading="loading"></EminentSlider>

      <!-- Trending -->
      <Slider title="Trending" :loading="loading" class="mt-24"></Slider>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import LoaderMixin from '@/mixins/LoaderMixin'

export default Vue.extend({
  name: 'Home',
  mixins: [LoaderMixin],
})
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS

*/
.container {
  @apply min-h-screen;
}
</style>
