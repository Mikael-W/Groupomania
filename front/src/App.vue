<template>
  <div class="layout">
  <router-view/>
  <footer>
    <span></span>
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
header{
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  background: #042a5f;
}
h1{
    color: #f92d02;
}
.logo{
  width: 20vw;
  padding: 1rem;
  background: #042a5f;
}
.search-wrapper{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 4vh;
  background: #d3d3d3;
}
.search-input{
  width:30vw;
  height: 3vh;
  border-radius: 1rem;
  border: 1px solid #d3d3d3;
  background: white;
}
.searchdiv{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -4vh;
  border-radius: 50%;
  border: none;
  background: #f92d02;
  width: 2.5vw;
  height: 4vh;
}
.searchlogo{
  width:2vh;
  height: 2vh;
}
.notification{
  margin: 0 2vw 0 0;
  background: #d3d3d3;
}
.notiflogo{
  width: 2vw;
  height: 2vh;
}
.connect-container {
  display: flex;
  justify-content: space-between;
  text-align: center;
  background: #d3d3d3;

  a {
    display: block;
    font-weight: bold;
    color: #2c3e50;
    padding: 0 1vw;
    background: #d3d3d3;

    &.router-link-exact-active {
      color: #f92d02;
    }
  }
}
.userlog{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50vw;
  margin: 5vh 0;
  background: #d3d3d3;
}
.form{
  display: flex;
  align-items: center;
  width: 100%;
  background: #d3d3d3;
}
.photo{
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 5vh 0 ;
  border: 1px solid black;
  background: #ededed;
}
input{
  width: 60%;
  margin-bottom: 2vh;
  border: 1px solid #d3d3d3;
  background: white;
}
.logbtn{
   width: 30%;
  height:6vh;
  font-size: 100%;
  margin: 3vh 0;
  background: #042a5f;
  border-color:#042a5f;
  border-radius: 2rem;
  color: white;
}
footer{
  position: absolute;
  bottom:0;
  width: 100vw;
  height: 50px;
  background: #042a5f;
}
</style>
