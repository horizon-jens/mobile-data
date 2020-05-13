<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" />
  </div>
</template>


<style lang="less">
html *,
html {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
html,
body {
  height: 100%;
  width: 100%;
  -moz-user-select: none;
  -khtml-user-select: none;
  user-select: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  min-height: 667px;
  width: 100%;
  margin: 0 auto;
  color: #b1c8fb;
  font-size: 14px;
}
input::-webkit-input-placeholder {
  color: rgba(255, 255, 255, 0.6) !important;
}
input::-moz-input-placeholder {
  color: rgba(255, 255, 255, 0.6) !important;
}
input::-ms-input-placeholder {
  color: rgba(255, 255, 255, 0.6) !important;
}
.home{
  height: 100%;
  width: 100%;
  background: rgb(7, 29, 53);
}
</style>
