<template>
  <section id="about">
    <g-image
      src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Nikolaus_Kopernikus.jpg"
    />
    <div>
      <h2>About</h2>
      <p>
        I was born on February 19, 1473 in Toruń, Royal Prussia, Poland and died
        at the age of 70 on May 24, 1543 in Frauenburg, East Prussia, Poland. I
        was born into a well-off family of trade and was the youngest of four
        children. My father died around 1484 and my uncle took me in and
        provided me the education that allowed me to accomplish my feats
        throughout my life. I went to the University of Cracow studying liberal
        arts (mainly astronomy and astrology) between 1491 and 1494. However, I
        left and resumed my studies at the University of Bologna in Italy.
        There, I lived in the same house as a significant astronomer, Domenico
        Maria de Novara. I worked with Novara and he allowed me to be involved
        in his astrological predictions (horoscopes) for the city. Most
        importantly, Demonico introduced me to two books called
        <em>Epitoma in Almagestum Ptolemaei</em> and
        <em>Disputationes adversus astrologianm divinatricenm</em> which
        inspired me to look more into astronomy. After that, I continued to
        study and document my observations such as solar and lunar eclipses and
        planetary alignments.
      </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  @include sidePadding;
  padding-bottom: 5rem;
  display: grid;
  grid-template-columns: 0.65fr 1.2fr;
  grid-gap: 3rem;

  img {
    width: 100%;
  }

  div {
    h2 {
      font-size: 4rem;
      margin-top: 0;
      // text-align: right;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.125rem;
      line-height: 1.7;
      text-align: justify;
    }
  }
}
</style>
