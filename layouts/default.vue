<template>
  <div class="relative min-h-screen">
    <NavBar />
    <div class="pb-32">
      <Nuxt />
    </div>
    <footer
      class="absolute bottom-0 flex justify-around w-full p-4 text-center bg-white border-t border-grey"
    >
      <div>© {{ new Date().getFullYear() }} Variable - All Rights Reserved</div>

      <div class="flex items-center space-x-4 text-primary">
        <a
          href="https://github.com/horlamedhey"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon class="w-5 h-5"></GithubIcon>
        </a>
        <a
          href="https://gitlab.com/horlamedhey"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitlabIcon class="w-5 h-5"></GitlabIcon>
        </a>
        <a
          href="hhttps://stackoverflow.com/users/10773017/abdulgafar-ajao"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StackoverflowIcon></StackoverflowIcon>
        </a>
        <a
          href="https://twitter.com/horlamedhey"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon class="w-5 h-5"></TwitterIcon>
        </a>
        <a
          href="https://www.linkedin.com/in/abdulgafar-ajao-21399215b"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinIcon class="w-5 h-5"></LinkedinIcon>
        </a>
      </div>
    </footer>
  </div>
</template>
