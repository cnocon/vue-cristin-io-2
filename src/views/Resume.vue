<template>
  <div class="resume-page app-container site-content container-fluid">
    <PageHeader iconClass="fad fa-file-user" text="Resumé"></PageHeader>
    <div v-if="show && data.jobTitle" class="row">
      <div class="col-lg-7 col-md-12">
        <h3>Work History</h3>
        <div v-for="(job, index) in data.experience" :key="index">
          <h6>
            {{ job.position }}
            <span v-html="job.company"></span>
          </h6>
        </div>
        <h3>Education</h3>
        <div v-for="(edu, index) in data.education" :key="index">
          <h6>
            {{ edu.position }}
            <span v-html="edu.company"></span>
          </h6>
        </div>
      </div>
      <div class="col-lg-5 col-md-12">
        <h5>Second column</h5>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from '@/components/shared/PageHeader.vue'
import JSONBinService from '@/services/JSONBinService'

export default {
  name: 'Resume',
  components: { PageHeader },
  props: {
    globals: {},
  },
  data() {
    return {
      data: {},
      show: false,
    }
  },
  created() {
    JSONBinService.getResume().then((res) => {
      this.data = res.data
    })
  },
  mounted() {
    this.show = true
  },
}
</script>

<style lang="scss">
@import '@/scss/_variables.scss';
h3 {
  color: $color-primary;
}
</style>
