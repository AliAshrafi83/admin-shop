<template>
  <div class="container">
    <header-org />
    <div>
      <menu-org />
      <content-org />
    </div>
  </div>
</template>

<script>
import HeaderOrg from '@/components/headers/HeaderOrg.vue';
import menuOrg from '@/components/menu/menuOrg.vue';
import contentOrg from '@/components/contentPage/contentOrg.vue';

export default {
  components: {
    HeaderOrg,
    menuOrg,
    contentOrg
  }
}
</script>

<style>
</style>