<template>
    <div class="connexion-layout">
    <div class="userlog">
    <input type="email" placeholder="email">
    <input type="password" placeholder="Mot de passe">
    <button class="logbtn">Connexion</button>
    <span>Pas encore inscrit ?</span>
    <router-link class="signupBtn" to="/Signup">S'incrire</router-link>
  </div>
  </div>
</template>

<style scoped>
.connexion-layout{
    display: grid;
    align-content: center;
    grid-template-columns: 1fr 1fr;
    visibility: 100vw;
    height: 100vh;
}
.userlog{
  grid-column-start: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50vw;
  height: 50vh;
  margin: 5vh 0;
  border-radius: 6px;
  box-shadow: 0 2px 16px rgb(0 0 0 /20%);
  background: white;
}
input{
  width: 60%;
  height: 2rem;
  border-radius: 6px;
  margin-bottom: 2vh;
  border: 1px solid #d3d3d3;
  background: white;
}
.logbtn{
  width: 50%;
  height:6vh;
  font-size: 100%;
  margin: 3vh 0;
  background: #042a5f;
  border-color:#042a5f;
  border-radius: 6px;
  color: white;
}
.signupBtn{
  width: 30%;
  height:4vh;
  font-size: 100%;
  margin: 3vh 0;
  background: #004f29;
  border-color:#004f29;
  border-radius: 6px;
  color: white;
  padding-top: 6px;
  text-align: center;
}
a{
    text-decoration: none;
}
</style>
