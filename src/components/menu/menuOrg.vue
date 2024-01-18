<template>
  <div class="menu">
    <div class="container">
      <!-- _______________________________________________________________ -->
      <div class="part logo">
        <a href="">
          <p>D<span>I</span>G<span>I</span></p>
          <img src="@/assets/logo.png" alt="logoIcon">
        </a>
      </div>
      <!-- _______________________________________________________________ -->
      <div class="search-box"><input type="text"></div>
      <div class="items">
        <div class="item" v-for="(item, index) in menuitems" :key="index" v-on:click="setContentPage(item.name)"  v-text="item.text"></div>
      </div>
      <!-- _______________________________________________________________ -->
    </div>
  </div>
</template>
 
<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      menuitems: [
        {text: 'صفحه اصلی', name: 'home'},
        {text: 'محصولات', name: 'Products'},
        {text: 'کامنت ها', name: 'comments'},
        {text: 'دسته بندی ها', name: 'Grouping'},
        {text: 'کاربران', name: 'users'},
        {text: 'تخفیف ها',name: 'offs'},
      ],
      
      selectedPage:'',
    }
  },
  methods:{
    setContentPage(selectPage){
      this.selectedPage = selectPage;
      console.log(selectPage);
    }
  },
  ...mapGetters(['selectedPage'])
}
</script>
 
<style scoped>
.container {
  /* margin: 1vh; */
  /* height: 98vh; */
  background-color: #fff;
  align-items: center;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
}

/* ___________________________________________________________________ */
.logo {
  margin: 2vh;
}

.logo a {
  align-items: center;
  display: flex;
  flex-direction: row;
  text-decoration: none;
  color: black;
}

.logo a p {
  font-size: 2vw;
  font-weight: bold;
  margin-right: 1.2rem;
}

.logo a p span {
  color: blue;
}

.logo a img {
  height: 5vw;
  width: 5vw;
}

/* ___________________________________________________________________ */
.search-box {
  width: 80%;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.search-box input {
  width: 100%;
  height: 2rem;
  border-color: #e1e1e1;
  border-radius: 0.5rem;
  padding-inline: 0.4rem;
}

.item {
  text-align: center;
  border-radius: 0.3rem;
  margin: 0.5rem;
  padding: 2vw;
  border: 1px solid #e1e1e1;
  padding-inline: 4vw;
  transition: 0.5s;
  cursor: pointer;
}

.item:hover {
  padding: 2.2vw;
  padding-inline: 4.4vw;
  background-color: #e1e1e1;
  font-size: large;
}

.item-boxs {
  height: 80px;
  width: 15rem;
  border: 1px solid black;
  margin-bottom: 2rem;
}

/* ___________________________________________________________________ */
</style>