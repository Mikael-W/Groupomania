<template>
  <div class="layout">
  <router-view/>
  <footer>
    <span>© Groupomania 2021</span>
  </footer>
  </div>
</template>



<style lang="less">
body, #app{
  margin: 0;
  padding: 0;
  width: 100vw;
  box-sizing: border-box;
  background-image: url('./assets/bg.jpg');
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-color: #042a5f;
  background-blend-mode: lighten;
}
footer{
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom:0;
  width: 100vw;
  height: 50px;
  color:#ededed;
  font-weight: bold;
  background: #042a5f;
}
</style>
