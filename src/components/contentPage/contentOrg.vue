<template>
  <div class="content">
    <div class="container">
      <!-- _______________________________________________________________ -->
      <navbar />
      <!-- _______________________________________________________________ -->
      <div class="items">
        <button v-on:click="show">show</button>
      </div>
      <!-- _______________________________________________________________ -->
    </div>
  </div>
</template>
<script>
import navbar from "@/components/contentPage/navbar/navbarContent.vue"
import mapState from 'vuex'
import { mapState } from 'vuex';
export default {
  components: {
    navbar
  },
  data(){
    return{
      page:'',
    }
  },
  methods:{
    show(){
      console.log(this.setContent);
    }
  },
  computed: mapState({
    page: state => state.selectedPage
  })
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