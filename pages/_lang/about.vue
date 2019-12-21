<template>
  <div>
    <div class="w-25 float-left">
      <div v-if="about && about[0]" class="p-r-50 about-img">
        <img :src="about[0].primary_image.full_size" alt="">
      </div>
    </div>
    <div v-if="about[0]" v-html="about[0].description" class="w-75 float-left pre" />
    <div class="clearfix" />
  </div>
</template>

<script>
export default {
  name: 'About',
  computed: {
    about () {
      return this.$store.state.about
    }
  },
  fetch ({ store }) {
    store.dispatch('getAbout')
  }
}
</script>
