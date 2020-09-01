<template>
  <Layout>
    <main class="model-page">
      <div class="model-page-about">
        <h1>I re-established Heliocentrism.</h1>
        <p>
          Although some think that I actually first introduced the theory of a
          sun-centered solar system instead of the more traditional (at the
          time) geocentric theory, I was actually not the first to believe that
          the Earth is not the center of the universe. Geocentrism believes that
          the Earth is the center of everything and everything revolves around
          the Earth. The heliocentric theory first began in 1444, when Nicholas
          of Cusa argued against society on whether all we are is dust in the
          wind or the single thing at which the entire universe revolves around,
          but Nicholas's ideas never caught fire and they stayed dormant until
          Cupernicus documented his own studies. Read more on my publication
          that inspired this movement
          <g-link to="/de-revolutionibus-orbium-coelestium-libri-vi/"
            >here</g-link
          >. You can also look at a moving example of what the inside of our
          solar system would look like according to my ideas below:
        </p>
      </div>
      <iframe id="model-bg" src="/solar-system/" width="100%" height="500%" />
      <p
        v-on:click="
          $router.push('#neptune');
          $router.go(0);
        "
        id="neptune"
      >
        Refresh and scroll down or just click this to see if you can catch a
        glimpse of Neptune!
      </p>
    </main>
  </Layout>
</template>

<script>
export default {};
</script>

<style lang="scss">
.model-page {
  width: 100%;
  height: 100vh;

  .model-page-about {
    @include sidePadding;

    h1 {
      font-size: 2.5rem;
    }

    p {
      font-size: 1.15rem;

      a {
        color: inherit;
      }
    }
  }

  canvas.p5Canvas {
    width: 100vw !important;
    height: 100vh !important;
  }

  #neptune {
    text-align: center;
    width: 100%;
    padding: 2rem 0;
    opacity: 0.6;
    transition: 300ms ease;

    &:hover {
      opacity: 0.9;
      cursor: pointer;
      transition: 500ms ease;
    }
  }
}
</style>
