<template>
  <section :class="sectionClasses">
    <SectionHeader
      :text="headerText"
      :alignment="headerAlignment"
      :header-classes="headerClasses"
    >
      <template #section-header-icon>
        <font-awesome-icon
          :icon="[headerIconType, headerIcon]"
        ></font-awesome-icon>
      </template>
    </SectionHeader>
    <slot></slot>
  </section>
</template>
<script>
import SectionHeader from '@/components/SectionHeader'

export default {
  components: {
    SectionHeader,
  },
  props: {
    sectionClasses: {
      default: '',
      type: String,
    },
    headerIcon: {
      default: '',
      type: String,
    },
    headerIconType: {
      default: 'fas',
      type: String,
    },
    headerText: {
      default: 'Section Title',
      type: String,
    },
    headerAlignment: {
      default: 'left',
      type: String,
    },
    headerClasses: {
      default: 'mb-5',
      type: String,
    },
  },
}
</script>

<style lang="scss" scoped></style>
