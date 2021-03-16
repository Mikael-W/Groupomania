<template>
<div class="layout">
  <header>
      <img class="logo" alt="Groupomania logo" src="../assets/logoheader.png">
      <div class="search-wrapper">
      <input class="search-input" type="text" v-model="search" placeholder="Rechercher..."/>
      <button class="searchdiv">
      <img class="searchlogo" src="../assets/search.png" alt="">
      </button>
      </div>
   <div class="notification">
    <img class="notiflogo" src="../assets/notification.png" alt="">
    </div>
  </header>
<div class="feed-container">
    <img src="" alt="">
    <div class="interation-container">
        <div class="like">J'aime</div>
        <div class="comment">Commenter</div>
        <div class="forward">Partager</div>
    </div>
    <input type="textarea">
</div>
</div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.feed-container{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50vw;
  background: #d3d3d3;
}
.interation-container{
    width: 100%;
}
</style>