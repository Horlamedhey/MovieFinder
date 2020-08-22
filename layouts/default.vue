<template>
  <div>
    <NavBar />
    <Nuxt />
    <footer
      class="flex justify-around w-full p-4 text-center bg-white border-t border-grey"
    >
      <div>© {{ new Date().getFullYear() }} Variable - All Rights Reserved</div>

      <div>
        <div class="flex space-x-4 text-primary">
          <TwitterIcon class="w-5 h-5"></TwitterIcon>
          <LinkedinIcon class="w-5 h-5"></LinkedinIcon>
          <GithubIcon class="w-5 h-5"></GithubIcon>
          <GitlabIcon class="w-5 h-5"></GitlabIcon>
        </div>
      </div>
    </footer>
  </div>
</template>
