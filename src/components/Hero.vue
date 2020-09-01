<template>
  <main class="hero">
    <div class="content">
      <h1>
        Greetings, my name is Nicolaus Copernicus and I am an accomplished
        mathemetician and astronomer.
      </h1>
      <g-link to="/works/">View my works and achievements</g-link>
    </div>
    <!-- <iframe id="model-bg" src="/solar-system/" width="100%" height="100%" /> -->
  </main>
</template>

<style lang="scss" scoped>
.hero {
  background: $bg-primary;

  .content {
    @include sidePadding;

    h1 {
      font-size: 4rem;
    }

    a {
      border: $txt-primary 0.1rem solid;
      padding: 1rem 1.5rem;
      color: inherit;
      text-decoration: none;
      font-size: 1.5rem;
      transition: 300ms ease;

      &:hover {
        background: $txt-primary;
        color: $bg-primary;
      }
    }
  }

  #model-bg {
    animation: fadeInModel 2.5s forwards ease;
    filter: brightness(0);

    @keyframes fadeInModel {
      0% {
        opacity: 0;
      }

      70% {
        opacity: 0;
      }

      100% {
        opacity: 1;
        filter: brightness(0.8);
      }
    }
  }
}
</style>
