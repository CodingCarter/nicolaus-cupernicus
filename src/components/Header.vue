<template>
  <header>
    <h3>Nicolaus Copernicus</h3>

    <nav>
      <g-link to="/">Home</g-link>
      <g-link to="/works/">Works & Achievements</g-link>
      <g-link to="/education/">Education</g-link>
      <!-- <g-link to="/model/">Solar System Model</g-link> -->
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  // height: 3rem;
  padding-top: 2rem !important;
  padding-bottom: 0 !important;

  @include sidePadding;

  nav a {
    padding: 1rem;
    color: inherit;
    text-decoration: none;
    font-size: 1.1rem;
  }
}
</style>
