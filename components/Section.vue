<template>
  <section :class="sectionClasses">
    <SectionHeader :text="headerText" :class="headerClasses">
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
export default {
  props: {
    headerClasses: {
      default: '',
      type: String,
    },
    sectionClasses: {
      default: 'section',
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
  },
}
</script>
