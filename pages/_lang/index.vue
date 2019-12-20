<template>
  <div class="container">
    <div>
      <no-ssr>
        <LightGallery
          :images="blocks"
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
          <div v-masonry-tile v-for="(item, k) in blocks" :key="k" class="item">
            <img @click="index = k" :src="item">
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
      index: null,
      blocks: [
        'https://static.wixstatic.com/media/c4b732_c89233acd8664d5fb6143eced23dee29~mv2.jpg/v1/fill/w_196,h_147,al_c,q_80,usm_0.66_1.00_0.01/c4b732_c89233acd8664d5fb6143eced23dee29~mv2.jpg',
        'https://static.wixstatic.com/media/c4b732_f4a7cf84e51d4d00b878d5c30deccfe1~mv2.jpg/v1/fill/w_196,h_588,al_c,q_80,usm_0.66_1.00_0.01/c4b732_f4a7cf84e51d4d00b878d5c30deccfe1~mv2.jpg',
        'https://static.wixstatic.com/media/c4b732_ce44ea25508d431a85cb7ae88e642916~mv2.jpg/v1/fill/w_196,h_294,al_c,q_80,usm_0.66_1.00_0.01/c4b732_ce44ea25508d431a85cb7ae88e642916~mv2.jpg',
        'https://static.wixstatic.com/media/c4b732_47dd8851d01c4983a4162ca834443f36~mv2.jpg/v1/fill/w_196,h_294,al_c,q_80,usm_0.66_1.00_0.01/c4b732_47dd8851d01c4983a4162ca834443f36~mv2.jpg',
        'https://static.wixstatic.com/media/c4b732_c846d741876e4dfdbf759250854399d6~mv2.jpg/v1/fill/w_196,h_441,al_c,q_80,usm_0.66_1.00_0.01/c4b732_c846d741876e4dfdbf759250854399d6~mv2.jpg',
        'https://static.wixstatic.com/media/c4b732_92072fc05ff34c30982e8886eaf503b8~mv2.jpg/v1/fill/w_196,h_441,al_c,q_80,usm_0.66_1.00_0.01/c4b732_92072fc05ff34c30982e8886eaf503b8~mv2.jpg'
      ]
    }
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
