<template>
  <div class="relative">
    <img
      src="design1.png"
      class="absolute top-0 right-0 -mt-24"
      style="z-index: -1;"
    />
    <div class="p-5 m-auto md:container md:px-0 sm:p-10">
      <!-- Movies -->
      <EminentSlider title="Movies" :loading="loading"></EminentSlider>
      <!-- Series -->
      <EminentSlider
        title="Series"
        :loading="loading"
        class="mt-24"
      ></EminentSlider>
      <!-- Episodes -->
      <EminentSlider
        title="Episodes"
        :loading="loading"
        class="mt-24"
      ></EminentSlider>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import LoaderMixin from '@/mixins/LoaderMixin'

export default Vue.extend({
  name: 'SearchResults',
  mixins: [LoaderMixin],
})
</script>
