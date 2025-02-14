<template>
  <router-view/>
</template>

<style>

@font-face {
  font-family: 'MyFont';
  src: url('@/assets/fonts/OvercameDemoRegular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

body {
  margin: 0;
  padding: 0;
  background: #bdbdbd;
  overflow-x: hidden;
  background-image: url("https://www.transparenttextures.com/patterns/asfalt-dark.png");
}

body::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
body {
  -ms-overflow-style: none;  /* IE and Edge */
}

#app {
  user-select: none;
  cursor: default;
  font-family: 'MyFont', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

/* Fade transition */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease, transform 0.3s ease;
}
.fade-enter {
  opacity: 0;
  transform: translateY(-10px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
