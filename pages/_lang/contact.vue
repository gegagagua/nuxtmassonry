<template>
  <div>
    <div class="contact-container text-center">
      <img src="~/assets/images/contact.webp" alt="">
      <p class="contact-title f-28">
        Контакты
      </p>
      <div class="info">
        {{ data.email }} | {{ $t('phone') }}: {{ data.telephone }}
      </div>
      <form action="" class="m-t-20 p-b-100">
        <input :placeholder="$t('form.name')" type="text">
        <input :placeholder="$t('form.email')" type="text">
        <input :placeholder="$t('form.subject')" type="text">
        <textarea id="" :placeholder="$t('form.message')" name="" cols="30" rows="10" />
        <input :value="$t('form.send')" type="submit">
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  computed: {
    data () {
      return this.$store.state.contact
    }
  },
  fetch ({ store }) {
    store.dispatch('getContactData')
  }
}
</script>
