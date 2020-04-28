<template>
  <div id="app">
    <br>
    <div class="container">
      <h1 class="text-capitalize">
        {{ gamedata.name }}
      </h1>
      <div class="row">
        <div class="col-md-3">
          <img
            :src="gamedata.image"
            class="rounded"
            width="100%"
            :alt="gamedata.name"
          >
          <br>
          <br>
          <button
            v-if="gamedata.iframe != 'iframe'"
            class="btn bg-main color-white btn-block"
          >
            Next Episode
          </button>
          <br>
          <br>
          <br>
        </div>
        <div class="col-md-9">
          <iframe
            v-if="gamedata.iframe != 'iframe'"
            :src="gamedata.iframe"
            width="100%"
            height="470px"
            allowfullscreen="true"
            frameborder="0"
            marginwidth="0"
            marginheight="0"
            scrolling="no"
          />
          <a v-else href="" rel="nofollow">imgsd</a>
        </div>
      </div>
      <div v-if="gamedata.iframe != 'iframe'" class="row">
        <div class="col-md-9">
          <h3>{{ gamedata.name_ }}</h3>
          {{ gamedata.detail }}
          <br>
          <br>
          <h3>List Episode</h3>
          <div class="row">
            <div
              v-for="epall in ep"
              :key="epall.name"
              class="col-md-2 pr-0 col-3"
            >
              <nuxt-link
                :title="
                  'Watch ' + epall.url.replace(/-/g, ' ') + ' Online free'
                "
                :to="epall.url"
                class="text-decoration-none"
              >
                <div
                  v-if="epall.name != gamedata.ep"
                  class="btn btn-main-hover color-main border-main mb-3 btn-block"
                >
                  {{ epall.name }}
                </div>
                <div
                  v-if="epall.name == gamedata.ep"
                  class="btn btn-main-hover bg-main color-white mb-3 btn-block"
                >
                  {{ epall.name }}
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <h3>Popular Anime</h3>
          <nuxt-link
            v-for="populars in popular.slice(0, 5)"
            :key="populars.name"
            class="text-decoration-none"
            :to="
              populars.name
                .replace(/[^a-zA-Z0-9 -]/g, '')
                .replace(/- /g, '')
                .replace(/  /g, '-')
                .replace(/ /g, '-')
                .toLowerCase()
            "
            :title="populars.name"
          >
            <div class="row mb-3">
              <div class="col-md-3 col-5 pr-0">
                <img
                  class="rounded"
                  :src="populars.image"
                  width="100%"
                  :alt="populars.name"
                >
              </div>
              <div class="col-md-9 col-7">
                <span class="name-anime text-dark">{{ populars.name }}</span>
                <span class="text-muted"> Videos {{ populars.ep }}</span>
              </div>
            </div>
          </nuxt-link>
          <h3>About this video</h3>
          <p>
            The following Anime
            <nuxt-link
              :to="params"
              class="color-green"
            >
              {{ gamedata.name }}
            </nuxt-link>
            has been released in high quality video at
            <nuxt-link to="/" class="color-green">
              AnimeGu
            </nuxt-link>, Watch and Download Free
            <nuxt-link class="color-green" :to="params">
              {{ gamedata.name_ }}
            </nuxt-link>
            Online, Stay in touch with
            <nuxt-link to="/" class="color-green">
              AnimeGu
            </nuxt-link>
            to watch the latest Anime Updates.
          </p>
        </div>
      </div>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
    </div>
    <br>
    <br>
  </div>
</template>

<script>
import localforage from 'localforage'
import memoryDriver from 'localforage-memoryStorageDriver'
import { setup } from 'axios-cache-adapter'
import axios from 'axios'

export default {
  name: 'AnimeName',
  components: {},
  async asyncData ({ params, req }) {
    const url = req
      ? 'https://' + req.headers.host + '/anime/' + params.name
      : window.location.host.split(':')[0]
    const game = await axios.get(
      `http://localhost:3000/api/anime/${params.name}`
    )
    return { gamedata: game.data, url, params: params.name }
  },
  data () {
    return {
      ep: [],
      popular: []
    }
  },
  mounted () {
    async function configure () {
      await localforage.defineDriver(memoryDriver)
      const forageStore = localforage.createInstance({
        driver: [
          localforage.INDEXEDDB,
          localforage.LOCALSTORAGE,
          memoryDriver._driver
        ],
        name: 'my-cache'
      })

      return setup({
        baseURL: 'http://localhost:3000',
        cache: {
          maxAge: 15 * 60 * 1000,
          store: forageStore
        }
      })
    }
    configure().then(async (api) => {
      const epall = await api.get(
        '/api/anime/allep/' + this.$route.params.name
      )
      this.ep = epall.data.data
      const Popular = await api.get('/api/popular')
      this.popular = Popular.data.data
    })
  },
  head () {
    return {
      title: `Watch ${this.gamedata.name} AnimeGu`,
      meta: [
        {
          vmid: 'description',
          name: 'description',
          content: `Watch anime ${this.gamedata.name} online free full hd and download Watch English`
        },
        { property: 'og:title', content: this.gamedata.name },
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
          content: this.gamedata.image
        },
        // Often the same as your meta description, but not always.
        {
          property: 'og:description',
          content: `Watch anime ${this.gamedata.name} online free full hd and download Watch English`
        },

        // Twitter card
        { name: 'twitter:card', content: 'summary' },
        {
          name: 'twitter:site',
          content: this.url
        },
        { name: 'twitter:title', content: this.gamedata.name },
        {
          name: 'twitter:description',
          content: `Watch anime ${this.gamedata.name} online free full hd and download Watch English`
        },
        // Your twitter handle, if you have one.
        { name: 'twitter:creator', content: '@alligatorio' },
        {
          name: 'twitter:image:src',
          content: this.gamedata.image
        },
        {
          name: 'twitter:image',
          content: this.gamedata.image
        },

        // Google / Schema.org markup:
        { itemprop: 'name', content: this.gamedata.name },
        {
          itemprop: 'description',
          content: `Watch anime ${this.gamedata.name} online free full hd and download Watch English`
        },
        {
          itemprop: 'image',
          content: this.gamedata.image
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
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
</style>
