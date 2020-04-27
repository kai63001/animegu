<template>
  <div id="navbar">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <nuxt-link class="navbar-brand color-main" to="/">
          AnimeGu
        </nuxt-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>

        <div id="navbarSupportedContent" class="collapse navbar-collapse">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <nuxt-link class="nav-link" to="/">
                Home
                <span class="sr-only">(current)</span>
              </nuxt-link>
            </li>
            <li class="nav-item active">
              <nuxt-link class="nav-link" to="/popular/">
                Popular
              </nuxt-link>
            </li>
            <li class="nav-item active">
              <nuxt-link class="nav-link" to="/movies/">
                The Movies
              </nuxt-link>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            >
            <button class="btn bg-main color-white my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>
