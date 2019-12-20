<template>
  <div id="wrapper">
    <Header />
    <nuxt />
  </div>
</template>
<script>
import Header from '@/components/header.vue'
export default {
  name: 'Default',
  components: {
    Header
  }
}
</script>
