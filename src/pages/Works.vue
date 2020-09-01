<template>
  <Layout>
    <div class="projects-page">
      <main>
        <h1>
          Works & Achievements
        </h1>
        <div class="projects">
          <WorkCard
            title="Reestablished Heliocentrism (sun-centered solar system)"
            image="heliocentrism.jpg"
            to="/model/"
          />
          <div />
          <WorkCard
            title='De revolutionibus orbium coelestium libri vi ("Six Books Concerning the Revolutions of the Heavenly Orbs")'
            image="book.jpg"
            to="/de-revolutionibus-orbium-coelestium-libri-vi/"
          />
        </div>
      </main>
    </div>
  </Layout>
</template>

<script>
import WorkCard from "~/components/WorkCard.vue";

export default {
  components: {
    WorkCard,
  },
};
</script>

<style lang="scss">
.projects-page {
  @include sidePadding;

  main {
    h1 {
      padding-top: 2rem;
      margin: 0;
      font-size: 5rem;
      margin-bottom: 3rem;
    }

    .projects {
      column-count: 2;
      column-gap: 4rem;
    }
  }
}
</style>
