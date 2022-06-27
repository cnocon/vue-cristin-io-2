<template>
  <div class="navbar-wrapper">
    <div class="navbar-wrapper-inner container">
      <NuxtLink :to="{ name: 'index' }" class="navbar-brand-and-logo">
        <NuxtImg
          src="/components/square-portrait-white.png"
          alt="Cristin O'Connor"
          class="navbar-logo"
          provider="static"
        ></NuxtImg>
        <div class="navbar-brand">
          <h2
            :class="`${
              $route.name === 'index'
                ? 'nuxt-link-active nuxt-link-exact-active'
                : ''
            }`"
          >
            Cristin O'Connor
          </h2>
          <h3>Front End Engineer</h3>
        </div>
      </NuxtLink>

      <!-- formerly .nav -->
      <ul class="nav-item-list" role="navigation">
        <li class="nav-item">
          <NuxtLink to="/resume" class="nav-link">Résumé</NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink to="/portfolio" class="nav-link">Portfolio</NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink
            :active="isActiveNavItem('blog-page')"
            :to="{
              name: 'blog-page',
              params: { slug: 'blog-page', page: 1 },
            }"
            :class="navItemClasses(['blog-page'])"
            >Blog</NuxtLink
          >
        </li>

        <li
          :class="`nav-item dropdown ${showMenu ? 'show' : ''}`"
          @click.stop.prevent="toggleMenu"
        >
          <button
            id="navbarDropdown"
            href="#dropdownMenu"
            role="button"
            :aria-label="`${
              showMenu
                ? 'Close Mobile Navigation Button'
                : 'Mobile Navigation Button'
            }`"
            :aria-expanded="`${showMenu ? 'true' : 'false'}`"
            :class="`nav-link dropdown-toggle ${showMenu ? 'show' : ''}`"
            target="_self"
            data-bs-toggle="dropdown"
          >
            <font-awesome-icon
              v-if="showMenu"
              :icon="['fal', 'times']"
              size="2x"
            ></font-awesome-icon>
            <font-awesome-icon
              v-else
              :icon="['fal', 'bars']"
            ></font-awesome-icon>
          </button>

          <ul
            v-show="showMenu"
            id="dropdownMenu"
            :class="`dropdown-item-list dropdown-menu ${
              showMenu ? 'show' : ''
            }`"
            role="navigation"
            aria-label="Mobile Navigation Menu"
            aria-labelledby="#navbarDropdown"
          >
            <li class="dropdown-nav-item" role="presentation">
              <NuxtLink
                to="/resume"
                :active="isActiveNavItem('resume')"
                class="dropdown-link"
                role="menuitem"
                >Résumé</NuxtLink
              >
            </li>
            <li class="dropdown-nav-item" role="presentation">
              <NuxtLink
                to="/portfolio"
                :active="isActiveNavItem('portfolio')"
                class="dropdown-link"
                role="menuitem"
                >Portfolio</NuxtLink
              >
            </li>
            <li class="dropdown-nav-item" role="presentation">
              <NuxtLink
                :to="{
                  name: 'blog-page',
                  params: { slug: 'blog-page', page: 1 },
                }"
                :active="isActiveNavItem('blog-page')"
                :class="navItemClasses(['blog-page', true])"
                role="menuitem"
                >Blog</NuxtLink
              >
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
    }
  },
  methods: {
    isExactActiveNavItem(linkedRouteName) {
      return this.$route.name === linkedRouteName
    },
    isActiveNavItem(linkedRouteName) {
      /**
       * If its one of the special blog route cases check if its not a
       * different not-nested blog route (blog-articles-slug)
       */
      return linkedRouteName.match(/blog/) !== null
        ? this.$route.name.match(/blog/)
        : this.isExactActiveNavItem(linkedRouteName)
    },
    navItemClasses([linkedRouteName, isDropdown = false]) {
      // This only has to determine classes if it's not an exact Route match, because Nuxt can do that on its own
      const str = isDropdown ? 'dropdown-link' : 'nav-link'
      if (this.isExactActiveNavItem(linkedRouteName)) {
        return str
      } else if (
        linkedRouteName === 'blog-page' &&
        this.$route.name === 'blog-articles-slug'
      ) {
        return `${str} nuxt-link-active`
      } else {
        return str
      }
    },
    toggleMenu() {
      this.showMenu = !this.showMenu
    },
  },
}
</script>
