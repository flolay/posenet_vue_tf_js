<template>
  <div id="app">
    <div class="menu">
      <div class="circle md-elevation-1 left circular" rounded="circle">
        <img class="logo" src="./assets/justin.svg" alt="justin image">
      </div>
      <div>
        <h3 class="headline">Kinect Remote Control Justin</h3>
      </div>
    </div>
    <div class="camera">
      <Camera/>
    </div>
  </div>
</template>

<script>
import Camera from './components/Camera.vue'

export default {
  name: 'App',
  components: {
    Camera
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  .menu{
    margin-left: 2%;
    display: block;
    height: auto;
    width: 15%;
  }
  .left{
    float: left;
  }
  .circular{
    border-radius: 50%;
  }
  .headline{
    color: #2c3e50;
  }
  .logo{
    object-fit: contain;
    max-height: 100%;
    max-width: 100%;
  }
  .circle{
    max-height: 100%;
    max-width: 100%;
  }
  .camera{
    margin-left: 22%;
  }
</style>
