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
      <div class="items"></div>
      <!-- _______________________________________________________________ -->
    </div>
  </div>
</template>
 
<script>
export default {

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
}

.search-box input {
  width: 100%;
  height: 2rem;
  border-color: #e1e1e1;
  border-radius: 0.5rem;
  padding-inline: 0.4rem;
}

.items {}

.item-boxs {
  height: 80px;
  width: 15rem;
  border: 1px solid black;
  margin-bottom: 2rem;
}

/* ___________________________________________________________________ */
</style>