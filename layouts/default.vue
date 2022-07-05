<template>
  <div class="app-container">
    <Navbar />
    <b-container fluid="xl">
      <transition-group name="fade">
        <Nuxt key="app" />
      </transition-group>
    </b-container>
    <LazyFooter></LazyFooter>
  </div>
</template>
