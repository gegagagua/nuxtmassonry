<template>
  <header>
    <div class="menu float-left w-50">
      <ul>
        <li>
          <nuxt-link :to="localePath('/')">
            {{ $t('pages.home') }}
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/about">
            {{ $t('pages.bio') }}
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/contact">
            {{ $t('pages.contact') }}
          </nuxt-link>
        </li>
      </ul>
    </div>

    <div class="langs float-right w-50 text-right">
      <nuxt-link :to="`/ru` + $route.fullPath" class="Header__Link" active-class="none" exact>
        RU
      </nuxt-link>
      <nuxt-link :to="$route.fullPath.replace(/^\/[^\/]+/, '')" class="Header__Link" active-class="none" exact>
        EN
      </nuxt-link>
    </div>
    <div class="clearfix" />
    <h1>
      {{ $t('title') }}
    </h1>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>
