<template>
  <div class="content">
    <div class="container">
      <!-- _______________________________________________________________ -->
      <navbar />
      <!-- _______________________________________________________________ -->
      <div class="items">
      </div>
      <!-- _______________________________________________________________ -->
    </div>
  </div>
</template>
<script>
import navbar from "@/components/contentPage/navbar/navbarContent.vue"

export default {
  components: {
    navbar
  }
}
</script>
<style scoped>
.content {}

.container {
  display: flex;
  flex-direction: column;
}

.navbar {
  display: inline-flex;
  flex-direction: row;
  width: 100%;
}

.items {
  display: grid;
  grid-template-columns: auto auto auto auto;
}

.item {
  width: 200px;
}
</style>