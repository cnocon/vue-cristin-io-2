<template>
  <figure>
    <img
      :src="dataUrl"
      :alt="alt"
      :title="alt"
      :data-url="dataUrl"
    />
  </figure>
</template>

<script>
export default {
  name: 'Image',
  data() {
    return {
      visible: false
    }
  },
  props: {
    alt: {
      type: String,
      required: false
    },
    dataUrl: {
      type: String,
      required: true
    }
  },
  mounted() {
    this.$nextTick(function () {
      this.visible = true
    })
  }
}
</script>
