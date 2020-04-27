const express = require('express')
const app = express()
const cors = require('cors')
const axios = require('axios')
const cheerio = require('cheerio')

app.use(cors())

app.get('/', (req, res) => {
  let page = 1
  if (req.query.page) { page = req.query.page }
  res.setHeader('Content-Type', 'application/json')
  axios.get('https://vidstreaming.io/?page=' + page)
    .then(function (response) {
      // console.log(response);
      const $ = cheerio.load(response.data)
      const data = []

      $('.video-block').each(function () {
        data.push({
          name: $(this).children('a').children('.name').text().trim(),
          image: $(this).children('a').children('.img').children('.picture').children('img').attr('src').trim()
        })
      })
      res.end(JSON.stringify({ data }))
    })
    .catch(function (error) {
      // handle error
      console.log(error)
    })
    .then(function () {
      // always executed
    })
})

app.get('/popular', (req, res) => {
  let page = 1
  if (req.query.page) { page = req.query.page }
  res.setHeader('Content-Type', 'application/json')
  axios.get('https://vidstreaming.io/popular?page=' + page)
    .then(function (response) {
      // console.log(response);
      const $ = cheerio.load(response.data)
      const data = []

      $('.video-block').each(function () {
        data.push({
          name: $(this).children('a').children('.name').text().trim(),
          ep: $(this).children('a').children('.name').text().trim().substr($(this).children('a').children('.name').text().trim().indexOf('Episode ')).replace('Episode ', ''),
          image: $(this).children('a').children('.img').children('.picture').children('img').attr('src').trim()
        })
      })
      res.end(JSON.stringify({ data }))
    })
    .catch(function (error) {
      // handle error
      console.log(error)
    })
    .then(function () {
      // always executed
    })
})

app.get('/movie', (req, res) => {
  let page = 1
  if (req.query.page) { page = req.query.page }
  res.setHeader('Content-Type', 'application/json')
  axios.get('https://vidstreaming.io/movies?page=' + page)
    .then(function (response) {
      // console.log(response);
      const $ = cheerio.load(response.data)
      const data = []

      $('.video-block').each(function () {
        data.push({
          name: $(this).children('a').children('.name').text().trim(),
          ep: $(this).children('a').children('.name').text().trim().substr($(this).children('a').children('.name').text().trim().indexOf('Episode ')).replace('Episode ', ''),
          image: $(this).children('a').children('.img').children('.picture').children('img').attr('src').trim()
        })
      })
      res.end(JSON.stringify({ data }))
    })
    .catch(function (error) {
      // handle error
      console.log(error)
    })
    .then(function () {
      // always executed
    })
})

app.get('/dub', (req, res) => {
  let page = 1
  if (req.query.page) { page = req.query.page }
  res.setHeader('Content-Type', 'application/json')
  axios.get('https://vidstreaming.io/recently-added-dub?page=' + page)
    .then(function (response) {
      // console.log(response);
      const $ = cheerio.load(response.data)
      const data = []

      $('.video-block').each(function () {
        data.push({
          name: $(this).children('a').children('.name').text().trim(),
          ep: $(this).children('a').children('.name').text().trim().substr($(this).children('a').children('.name').text().trim().indexOf('Episode ')).replace('Episode ', ''),
          image: $(this).children('a').children('.img').children('.picture').children('img').attr('src').trim()
        })
      })
      res.end(JSON.stringify({ data }))
    })
    .catch(function (error) {
      // handle error
      console.log(error)
    })
    .then(function () {
      // always executed
    })
})

app.get('/search', (req, res) => {
  let s = 1
  if (req.query.s) { s = req.query.s }
  res.setHeader('Content-Type', 'application/json')
  axios.get('https://vidstreaming.io/search.html?keyword=' + s)
    .then(function (response) {
      // console.log(response);
      const $ = cheerio.load(response.data)
      const data = []

      $('.video-block').each(function () {
        data.push({
          name: $(this).children('a').children('.name').text().trim(),
          ep: $(this).children('a').children('.name').text().trim().substr($(this).children('a').children('.name').text().trim().indexOf('Episode ')).replace('Episode ', ''),
          image: $(this).children('a').children('.img').children('.picture').children('img').attr('src').trim()
        })
      })
      res.end(JSON.stringify({ data }))
    })
    .catch(function (error) {
      // handle error
      console.log(error)
    })
    .then(function () {
      // always executed
    })
})

app.get('/anime/:name', (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  axios.get('https://vidstreaming.io/videos/' + req.params.name)
    .then(function (response) {
      const $ = cheerio.load(response.data)
      const name = ($('h1').text().trim())
      let ep = name.substr(name.indexOf('Episode '))
      ep = ep.substr(0, ep.indexOf(' English'))
      console.log(name)
      const name_ = (name.substr(0, name.indexOf(' Episode')))
      const image = ($('.picture').eq(0).children('img').attr('onerror').replace(/this.src='/g, '').replace(/';/g, ''))
      const iframe = ($('iframe').attr('src').replace(/\/\//g, 'https://'))
      const detail = ($('.content-more-js').text())
      res.end(JSON.stringify({ name, name_, image, iframe, detail, ep }))
    })
    .catch(function () {
      axios.get('https://vidstreaming.io/videos/' + req.params.name.replace(req.params.name.substr(req.params.name.indexOf('episode-')), '') + 'episode-1')
        .then(function (responser) {
          // console.log(responser);
          const $ = cheerio.load(responser.data)
          const nameer = req.params.name.replace(/-/g, ' ')
          const name = ($('h1').text().trim())
          const name_ = (name.substr(0, name.indexOf(' Episode')))
          const image = ($('.picture').eq(0).children('img').attr('onerror').replace(/this.src='/g, '').replace(/';/g, ''))
          const detail = ($('.content-more-js').text().trim())
          let ep = name.substr(name.indexOf('Episode '))
          ep = ep.substr(0, ep.indexOf(' English'))
          // console.log('name');
          res.end(JSON.stringify({ name: nameer, name_, image, iframe: 'iframe', detail, ep }))
        })
        .catch(function () {

        })
        .then(function () {

        })
      console.log('https://vidstreaming.io/videos/' + req.params.name.replace(req.params.name.substr(req.params.name.indexOf('episode-')), '') + 'episode-1')
    })
    .then(function () {
      // always executed
      // console.log('error then');

    })
})

app.get('/anime/allep/:name', (req, res) => {
  const data = []
  res.setHeader('Content-Type', 'application/json')
  axios.get('https://vidstreaming.io/videos/' + req.params.name)
    .then(function (response) {
      // eslint-disable-next-line camelcase
      const now_html = response.data.substr(0, response.data.indexOf('<!-- end for -->'))
      const $ = cheerio.load(now_html)
      $('.name').each(function () {
        data.push({
          name: $(this).text().substr($(this).text().indexOf('Episode ')).trim(),
          url: $(this).text().trim().replace(/[^a-zA-Z0-9 -]/g, '').replace(/ /g, '-').toLowerCase()
        })
      })
      res.end(JSON.stringify({ data }))
    })
    .catch(function (error) {
      // handle error
      console.log(error)
    })
    .then(function () {
      // always executed
    })
})

module.exports = {
  path: '/api/',
  handler: app
}
