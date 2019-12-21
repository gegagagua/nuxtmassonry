<template>
  <div class="container">
    <div>
      <no-ssr>
        <LightGallery
          :images="galleryList"
          :index="index"
          :disable-scroll="true"
          @close="index = null"
        />
        <div
          v-masonry
          transition-duration="3s"
          gutter="10"
          item-selector=".item"
          class="masonry-container"
          column-width="20"
        >
          <div
            v-masonry-tile
            v-for="(item, k) in gallery"
            :key="k"
            @click="index = k"
            class="item"
          >
            <img :src="item.primary_image.full_size">
          </div>
        </div>
      </no-ssr>
    </div>
  </div>
</template>

<script>
import NoSSR from 'vue-no-ssr'

export default {
  components: {
    'no-ssr': NoSSR
  },
  data () {
    return {
      index: null
    }
  },
  computed: {
    gallery () {
      const data = this.$store.state.gallery
      return data.filter(item => item.primary_image.full_size)
    },
    galleryList () {
      const data = this.gallery.map((item) => {
        const gal = {
          title: item.title,
          url: item.primary_image.full_size
        }
        return gal
      })
      return data
    }
  },
  fetch ({ store }) {
    store.dispatch('getGallery')
  },
  mounted () {
    if (typeof this.$redrawVueMasonry === 'function') {
      this.$redrawVueMasonry({
        gutter: 20
      })
    }
  }
}
</script>
