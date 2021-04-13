<template>
  <main class="app-container site-content">
    <PageHeader text="Portfolio" :iconClass="`far fa-folders`"></PageHeader>
    <div v-if="data">
      <div
        v-for="(item, index) in data"
        :key="index"
        class="row portfolio-item"
      >
        <div class="col-12">
          <h2>{{ item.name }}</h2>
          <p class="links">
            <span
              v-for="(link, linkIndex) in item.links"
              :key="linkIndex"
            >
              <span v-if="linkIndex !== 0">&nbsp;|&nbsp;</span>
              <a
                :href="link.href"
                target="_blank"
                rel="noreferrer"
              >
                {{ link.text }}
              </a>
            </span>
          </p>
        </div>

        <div class="col-12 col-md-7">
          <h4>Summary</h4>
          <div
            v-for="(paragraph, pIndex) in item.summary"
            :key="pIndex"
          >
            <p v-html="paragraph"></p>
          </div>

          <h4>Technologies</h4>
          <ul>
            <li
              v-for="(tech, techIndex) in item.technologies"
              :key="techIndex"
            >
              {{ tech }}
            </li>
          </ul>
        </div>

        <div class="col-12 col-md-5">
          <img
            class="screenshot"
            :src="item.previewImage"
            :alt="item.previewAlt"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import PageHeader from '@/components/shared/PageHeader.vue'
import portfolio from '@/data/portfolio'

export default {
  name: 'Portfolio',
  components: {
    PageHeader
  },
  data() {
    return {
      data: portfolio
    }
  },
}
</script>

<style scoped lang="scss">
@import '@/scss/_variables.scss';
.portfolio-item h2 {
  font-size: 2rem;

  @media all and (max-width: $breakpoint-sm-min) {
    font-size: 1.65rem;
    line-height: 1.35;
  }
}
.portfolio-item h2,
.portfolio-item .links {
  text-align: center;

  @media all and (max-width: $breakpoint-sm-min) {
    text-align: left;
  }
}
ul {
  list-style: disc;
  padding-left: 20px;
}

p,
li {
  font-weight: 400;
}
.screenshot {
  margin: 2rem 0;
  border: 2px solid $border-light-gray;
}
.site-content {
  margin-top: 0;
}
</style>
