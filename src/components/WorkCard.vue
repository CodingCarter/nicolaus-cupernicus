<template>
  <g-link :to="to" class="project-card">
    <figure>
      <figcaption v-text="title" />
      <g-image :src="`/img/${image}`" />
    </figure>
  </g-link>
</template>

<script>
export default {
  props: ["title", "image", "to"],
};
</script>

<style lang="scss" scoped>
.project-card {
  transition: 400ms ease;
  opacity: 0.9;
  color: inherit;
  text-decoration: none;
  display: inline-block;
  padding: 4rem 0;
  width: 100%;

  img {
    width: 100%;
  }

  &:hover {
    opacity: 1;
    transform: translateY(-0.5rem) scale(1.00000001);
    cursor: pointer;
  }

  figure {
    margin: 0;

    figcaption {
      padding-bottom: 2rem;
      font-size: 1.5rem;
    }
  }
}
</style>
