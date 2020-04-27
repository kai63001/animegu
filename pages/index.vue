<template>
  <div id="app">
    <div class="banner">
      <div class="text-banner" style="z-index:999;">
        <h1 class="color-white">
          ANIME GU <span v-if="page != 1">PAGE : {{ page }}</span>
        </h1>
        <span class="color-green"> Watch and Download Anime online free hd </span>
      </div>
      <div class="imgcover" style="filter: brightness(50%);">
        <img
          v-lazy-load
          data-src="https://coverfiles.alphacoders.com/128/128517.png"
          width="100%"
          alt="AnimeGu Online"
        >
      </div>
    </div>
    <br>
    <div class="container">
      <h3>Newest episode</h3>
      <div class="row">
        <div v-for="game in gamedata" :key="game.name" class="col-md-2 col-6">
          <nuxt-link
            class="text-decoration-none text-dark"
            :to="
              '/anime/' +
                game.name
                  .replace(/[^a-zA-Z0-9 -]/g, '')
                  .replace(/ /g, '-')
                  .toLowerCase()
            "
            :title="game.name.substr(0, game.name.indexOf('Episo'))"
          >
            <img
              v-lazy-load
              class="rounded coverpic"
              :data-src="game.image"
              :alt="game.name"
            >
            <p class="pt-2 name-anime">
              {{ game.name }}
            </p>
          </nuxt-link>
        </div>
      </div>
    </div>
    <br>
    <br>
    <paginate
      :force-page="page"
      :page-count="178"
      :page-range="3"
      :margin-pages="2"
      :click-handler="clickCallback"
      :prev-text="'Prev'"
      :next-text="'Next'"
      :active-class="'active'"
      :container-class="'pagination justify-content-center'"
      :page-class="'page-item'"
      :next-class="'page-item'"
      :prev-class="'page-item'"
      :next-link-class="'page-link'"
      :prev-link-class="'page-link'"
      :page-link-class="'page-link'"
    >
      16
    </paginate>
  </div>
</template>

<script>
// import localforage from 'localforage'
// import memoryDriver from 'localforage-memoryStorageDriver'
// import { setup } from 'axios-cache-adapter'
import axios from 'axios'

export default {
  name: 'Index',
  watchQuery: ['page'],
  components: {
  },
  async asyncData ({ query, err, req }) {
    const url = req ? req.headers.host : window.location.host.split(':')[0]
    console.log(url)
    const game = await axios.get(
      'http://localhost:3000/api?page=' + query.page
    )
    // const popular = await axios.get(
    //   'https://ma-load.com/anime_api/api/popular/'
    // )
    // const ep = await axios.get(
    //   `https://ma-load.com/anime_api/api/anime/allep/${params.name}`
    // )
    return {
      gamedata: game.data.data,
      page: query.page === undefined ? 1 : query.page,
      url
    }
    // return axios
    //   .get('http://localhost:3000/api?page=' + query.page)
    //   .then((res) => {
    //     return {
    //       gamedata: res.data.data,
    //       page: query.page === undefined ? 1 : query.page,
    //       url: ''
    //     }
    //   })
    // return {
    //   gamedata: null,
    //   page: 1,
    //   url: ''
    // }
  },

  mounted () {
    // this.page = parseInt(query.page)
    // this.url = window.location.href
    // console.log(this.url)
  },
  methods: {
    clickCallback (pageNum) {
      // window.location.href = '?page=' + pageNum
      // this.$router.push('?page=' + pageNum)
      this.$router.push('?page=' + pageNum)
    }
  },
  head () {
    return {
      title: 'AnimeGu - Watch Anime online free full hd download',
      meta: [
        {
          vmid: 'description',
          name: 'description',
          content: 'romeo'
        },
        {
          property: 'og:title',
          content: 'Watch anime cartoon online free english sub hd'
        },
        { property: 'og:site_name', content: 'AnimeGu' },
        // The list of types is available here: http://ogp.me/#types
        { property: 'og:type', content: 'website' },
        // Should the the same as your canonical link, see below.
        {
          property: 'og:url',
          content: this.url
        },
        {
          property: 'og:image',
          content: 'this.gamedata.image'
        },
        // Often the same as your meta description, but not always.
        {
          property: 'og:description',
          content: 'romeo'
        },

        // Twitter card
        { name: 'twitter:card', content: 'summary' },
        {
          name: 'twitter:site',
          content: this.url
        },
        {
          name: 'twitter:title',
          content: 'Watch anime cartoon online free english sub hd'
        },
        {
          name: 'twitter:description',
          content: 'romeo'
        },
        // Your twitter handle, if you have one.
        { name: 'twitter:creator', content: '@alligatorio' },
        {
          name: 'twitter:image:src',
          content: 'this.gamedata.image'
        },

        // Google / Schema.org markup:
        {
          itemprop: 'name',
          content: 'Watch anime cartoon online free english sub hd'
        },
        { itemprop: 'description', content: 'romeo' },
        {
          itemprop: 'image',
          content: 'this.gamedata.image'
        }
      ],
      link: [{ rel: 'canonical', href: this.url }],
      htmlAttrs: {
        lang: 'en',
        amp: true
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.text-banner {
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  margin-top: 11%;
}
.coverpic {
  display: block;
  width: 100%;
  height: 74%;
}
.name-anime {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
