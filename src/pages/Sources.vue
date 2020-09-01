<template>
  <Layout>
    <div class="sources-page">
      <h1>Sources</h1>
      <ul>
        <li>
          <g-link to="https://plato.stanford.edu/entries/copernicus/">
            Rabin, Sheila. Nicolaus Copernicus. 13 Sept. 2019,
            plato.stanford.edu/entries/copernicus/.
          </g-link>
        </li>
        <li>
          <g-link to="https://britannica.com/biography/Nicolaus-Copernicus">
            Westman, Robert S. Nicolaus Copernicus. 20 May 2020,
            www.britannica.com/biography/Nicolaus-Copernicus.
          </g-link>
        </li>
        <li>
          <g-link
            to="https://www.nationalgeographic.com/history/magazine/2019/03-04/astronomy-theories-nicolaus-copernicus/"
          >
            IMAGES, Photograph by KRIVINIS/GETTY, et al. Copernicus's
            Revolutionary Ideas Reorganized the Heavens. 11 June 2019,
            www.nationalgeographic.com/history/magazine/2019/03-04/astronomy-theories-nicolaus-copernicus/.
          </g-link>
        </li>
        <li>
          <g-link
            to="https://www.history.com/topics/inventions/nicolaus-copernicus"
          >
            History.com Editors. "Nicolaus Copernicus." History.com, A&amp;E
            Television Networks, 9 Nov. 2009,
            www.history.com/topics/inventions/nicolaus-copernicus.
          </g-link>
        </li>
      </ul>
    </div>
  </Layout>
</template>

<style lang="scss">
.sources-page {
  min-height: 65vh;
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

  ul li {
    padding: 1rem 0;
    font-size: 1.15rem;

    a {
      color: inherit;
      text-decoration: none;
    }
  }
}
</style>
