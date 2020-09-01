<template>
  <div class="layout">
    <Header />
    <transition name="fade" appear>
      <div>
        <slot />
      </div>
    </transition>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Header from "~/components/Header.vue";

export default {
  components: {
    Header,
  },
};
</script>

<style lang="scss">
.fade-enter-active {
  transform: scale(1);
  transition: 500ms ease;
}

.fade-enter {
  transform: scale(2);
  opacity: 0;
}

iframe {
  border: none;
  pointer-events: none;
}

html {
  font-family: "Open Sans";

  &,
  body {
    width: 100%;
    height: 100vh;
  }

  body {
    margin: 0;
    color: $txt-primary;
    background: $bg-primary;
  }

  .layout {
  }
}
</style>
