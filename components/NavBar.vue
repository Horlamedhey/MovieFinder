<template>
  <div
    class="flex items-center justify-between px-4 py-4 bg-white shadow sm:px-6"
  >
    <!-- <Logo class="h-8"></Logo> -->
    <n-link
      to="/"
      :class="[expanded ? 'w-1/12' : 'w-auto']"
      class="duration-300"
      style="transition-property: width;"
    >
      <img src="/logo.png" width="200px" />
    </n-link>
    <div
      class="flex justify-center px-5 py-2 duration-300 bg-gray-200 border rounded-full sm:w-7/12 border-gray-variant"
      :class="[expanded ? 'w-11/12' : 'w-10 h-10']"
      style="transition-property: width;"
    >
      <input
        id="search-movie"
        v-model="keyword"
        type="search"
        placeholder="Search for Movies, TV-Series etc... by title"
        name="movieSearch"
        class="w-11/12 bg-transparent focus:outline-none text-gray-variant1"
      />
      <button
        class="block ml-auto focus:outline-none sm:hidden"
        @click="expandAndSearch"
      >
        <SearchIcon />
      </button>
      <button
        class="hidden ml-auto focus:outline-none sm:block"
        @click="expandAndSearch(true)"
      >
        <SearchIcon />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'NavBar',
  data() {
    return {
      keyword: '',
      expanded: false,
    }
  },
  methods: {
    expandAndSearch(bigScreen) {
      if (this.expanded || bigScreen) {
        if (this.keyword.length > 0) {
          this.$router.push({
            path: '/search-results',
            query: { title: this.keyword },
          })
        } else {
          this.expanded = false
        }
      } else {
        this.expanded = true
      }
    },
  },
})
</script>
