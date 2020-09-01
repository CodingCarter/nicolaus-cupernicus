<template>
  <div class="layout">
    <Header />
    <transition name="fade" appear>
      <div>
        <slot />
      </div>
    </transition>
    <Footer />
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
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
.fade-enter-active {
  transform: translateY(0);
  transition: 500ms ease;
}

.fade-enter {
  transform: translateY(2rem) scale(0.975);
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
