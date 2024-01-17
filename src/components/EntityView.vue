<template>
  <div class="view">
    <div class="container" dir="rtl">
      <div class="right-box">
        <menu-org />
      </div>
      <div class="left-box">
        <header-org />
        <content-org />
      </div>
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
@font-face {
  font-family: vazir;
  src: url(@/assets/fonts/vazir-font-v16.1.0/Vazir-Bold.eot);
  src: url(@/assets/fonts/vazir-font-v16.1.0/Vazir-Bold.woff);
  src: url(@/assets/fonts/vazir-font-v16.1.0/Vazir-Light.eot);
  src: url(@/assets/fonts/vazir-font-v16.1.0/Vazir-Bold.eot);
  src: url(@/assets/fonts/vazir-font-v16.1.0/Vazir-Light.woff);
  src: url(@/assets/fonts/vazir-font-v16.1.0/Vazir-Medium.eot);
  src: url(@/assets/fonts/vazir-font-v16.1.0/Vazir-Thin.ttf);
}
* {
  margin: 0;
  padding: 0;
  font-family: vazir, Arial, Helvetica, sans-serif;
}
</style>

<style scoped>
.view {
  padding-inline: 1rem;
}

.container {
  background-color: #727272;
  display: grid;
  grid-template-columns: 18vw 80vw;
  border-radius: 1.5rem;
}
.right-box{
  margin: 0.5vw;
  height: 98vh;
}
.left-box{
  margin: 0.5vw;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  /* margin: 1rem; */
}
</style>