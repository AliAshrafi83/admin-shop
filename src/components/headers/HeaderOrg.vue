<template>
  <div class="header">
    <div class="container">
      <!-- _______________________________________________________________ -->
      <div class="part site-person">
        <h1> داشبورد </h1>
      </div>
      <!-- _______________________________________________________________ -->
      <div class="part user">
        <img src="@/assets/person picture.png" alt="person pic" height="110" width="110">
        <div class="text">
          <p class="name"> مرتضی علوی </p>
          <p class="TypeAdmin"> مدیر سایت </p>
        </div>
      </div>
      <!-- _______________________________________________________________ -->
    </div>
  </div>
</template>

<script>
export default {

  data() {
    return {
      logoAddress: '@/assets/logo.png',
    }
  }
}
</script>

<style scoped>
.header {
  align-items: right;
  width: 79vw;
}

.container {
  border-radius: 1rem;
  background-color: #fff;
  margin-inline: 2.3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 6vw;
  border-inline: 2px solid #cececef1;
  /* width: 100; */
  /* margin: 1rem; */
}

/* <!-- _______________________________________________________________ --> */
.part {
  display: grid;
  gap: 0.7rem;
}

/* <!-- _______________________________________________________________ --> */
.site-person {
  margin-right: 1.5rem;
}

/* <!-- _______________________________________________________________ --> */
.user {
  margin-left: 1.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.name {
  font-weight: bold;
}

.user img {
  border-radius: 50%;
  border: 1px solid rgb(155, 155, 155);
  height: 5vw;
  width: 5vw;
}

/* <!-- _______________________________________________________________ --> */
</style>