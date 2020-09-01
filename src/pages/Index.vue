<template>
  <Layout>
    <Hero />
    <AboutSection />
  </Layout>
</template>

<script>
import Hero from "~/components/Hero.vue";
import AboutSection from "~/components/AboutSection.vue";

export default {
  components: {
    Hero,
    AboutSection,
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
