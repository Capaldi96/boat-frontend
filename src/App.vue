<template>
  <div id="app">
    <div id="nav-container">
      <div id="nav">
        <router-link class="myButton " to="/">Home</router-link>
        <router-link class="myButton " to="/boats">Boats</router-link>
        <router-link class="myButton " to="/add">Add</router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}
#nav-container{
  width:100%;
  height:15%;
  display: grid;
  place-items: center;
}
#nav {
  display: flex;
  width: 20em;
  justify-content: space-between;
}
.myButton {
  background-color: transparent;
  border-radius: 22px;
  text-shadow: 2px 2px black;
  border: 3px solid #ffffff;
  min-width:90px;
  text-align: center;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Georgia;
  font-size: 20px;
  font-weight: bold;
  padding: 0.5em 1em;
  text-decoration: none;
  transition: transform 0.4s ease-in-out;
}
.router-link-active{
  box-shadow: 1px 1px 100px 20px #ffffff;
}
.myButton:not(.router-link-active):hover {
  transform: translateY(-5px);
  box-shadow: 1px 1px 100px #ffffff;
  
}
.myButton:hover{
  color:#ffffff;
  text-decoration: none;
}
.myButton:disabled {
  background-color: #c9c9c9;
  opacity: 0.7;
  cursor: not-allowed;
}
#app {
  height: 100%;
  width: 100%;
  opacity: 0.88;
  top: 0;
  left: 0;
  position: fixed;
  overflow: auto;
  background: url("./assets/1628645.jpg");
  background-repeat: no-repeat;
  background-position: center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
#app::-webkit-scrollbar {
  display: none;
}
</style>
