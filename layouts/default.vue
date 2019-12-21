<template>
  <div id="wrapper">
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>
<script>
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'
export default {
  name: 'Default',
  components: {
    Header,
    Footer
  }
}
</script>
