<template>
  <div id="app">
    <br>
    <h1 class="color-dark text-center">
      POPULAR ANIME GU <span v-if="page != 1">PAGE : {{ page }}</span>
    </h1>
    <br>
    <div class="container">
      <h3>Popular Anime</h3>
      <div class="row">
        <div v-for="game in gamedata" :key="game.name" class="col-md-2 col-6">
          <nuxt-link
            class="text-decoration-none text-dark"
            :to="
              '/anime/' +
                game.name
                  .replace(/[^a-zA-Z0-9 -]/g, '')
                  .replace(/  /g, '-')
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
      :page-count="11"
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
  name: 'Popular',
  watchQuery: ['page'],
  components: {
  },
  async asyncData ({ query, err, req }) {
    const url = req ? 'https://' + req.headers.host : window.location.host.split(':')[0]
    console.log(url)
    const game = await axios.get(
      'http://f21085dd.ngrok.io/api/popular?page=' + query.page
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
    //   .get('http://f21085dd.ngrok.io/api?page=' + query.page)
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
      title: 'AnimeGu - Watch Popular Anime online free full hd download',
      meta: [
        {
          vmid: 'description',
          name: 'description',
          content: 'Watch and download popular anime cartoon free online full hd english sub and dub eng view'
        },
        {
          property: 'og:title',
          content: 'AnimeGu - Watch Popular Anime online free full hd download'
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
          content: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/553e9750160831.58c8ff8bc2909.png'
        },
        // Often the same as your meta description, but not always.
        {
          property: 'og:description',
          content: 'Watch and download popular anime cartoon free online full hd english sub and dub eng view'
        },

        // Twitter card
        { name: 'twitter:card', content: 'summary' },
        {
          name: 'twitter:site',
          content: this.url
        },
        {
          name: 'twitter:title',
          content: 'AnimeGu - Watch Popular Anime online free full hd download'
        },
        {
          name: 'twitter:description',
          content: 'Watch and download popular anime cartoon free online full hd english sub and dub eng view'
        },
        // Your twitter handle, if you have one.
        { name: 'twitter:creator', content: '@alligatorio' },
        {
          name: 'twitter:image:src',
          content: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/553e9750160831.58c8ff8bc2909.png'
        },

        // Google / Schema.org markup:
        {
          itemprop: 'name',
          content: 'AnimeGu - Watch Popular Anime online free full hd download'
        },
        { itemprop: 'description', content: 'Watch and download popular anime cartoon free online full hd english sub and dub eng view' },
        {
          itemprop: 'image',
          content: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/553e9750160831.58c8ff8bc2909.png'
        }
      ],
      link: [{ rel: 'canonical', href: this.url + '/popular/' }],
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
