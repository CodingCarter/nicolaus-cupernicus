<template>
  <Layout>
    <Hero />
  </Layout>
</template>

<script>
import Hero from "~/components/Hero.vue";

export default {
  components: {
    Hero,
  },
  mounted() {},
};
</script>

<style>
iframe {
  border: none;
  height: 900vh;
  margin: 0;
  padding: 0;
  pointer-events: none;
}
</style>
