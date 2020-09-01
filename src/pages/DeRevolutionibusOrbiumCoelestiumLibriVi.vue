<template>
  <Layout>
    <div class="publish-page">
      <div class="about">
        <h1>
          <em>De revolutionibus orbium coelestium libri vi</em>
        </h1>
        <p>
          The book, <em>De revolutionibus orbium coelestium libri vi</em>, was
          published just before my death in 1543. I wrote about the ideas of a
          heliocentric universe in which the sun is actually the center of
          everything. It also included that the Earth rotates completely on its
          axis every day which causes day and night. Before my book, I had
          created a short manuscript without a title or author at around 1510 in
          which I also included most of my ideas found within the book. My
          friends who had shown the manuscript to were amazed at the ideas
          presented within and encouraged me to publish it. Although they
          thought it was perfect, I still wanted to hone my evidence and dive
          deeper into some of the aspects within the manuscript. A large part of
          the book was finished by the 1530s, but despite numerous requests to
          publish, I was still not ready. In 1539, a young mathematician named
          Georg Joachim Rheticus went to my current city, Frauenburg, Poland to
          study with me. The man read my unpublished version of my book and
          wrote a summary of the manuscript at which he sent to my old astrology
          teacher from Nuernberg. The letter was later published. After seeing
          that people did not reject Georg's letter due to change, I finally
          agreed to publish my book as
          <em>De revolutionibus orbium coelestium libri vi</em>, or the more
          common translation "Six Books Concerning the Revolutions of the
          Heavenly Orbs". My book actually did not do amazing after being
          published. It was not until Galileo Galilei supported the book and its
          different ideas with his own observations that the world started to
          change its mind.
        </p>
        <g-image src="/img/book.jpg" />
      </div>
    </div>
  </Layout>
</template>

<style lang="scss" scoped>
.publish-page {
  @include sidePadding;

  .about {
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
}
</style>
