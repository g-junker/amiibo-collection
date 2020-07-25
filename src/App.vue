<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>

/* GLOBAL */

@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

:root {
  --red: #E70620;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
}

a {
  text-decoration: none;
  color: inherit;
}

a:hover {
  color: var(--red);
}

h1 {
  text-align: center;
  padding-top: 2em;
  margin: 0;
}

.bg-img {
  background-image:url('./assets/header-bg.jpg');
  background-repeat: repeat-x;
  background-position: top center;
}



/* BROWSE BY */

.browse-by-wrapper {
  max-width: 900px;
  margin: 3em auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.browse-by-item p {
  background-color: #E5E5E5;
  padding: 2.5em 2em;
  font-size: 1em;
  font-weight: bold;
  text-align: center;
}

.browse-by-item {
  width: 275px;
}



/* CHARACTERS LIST */

.char-list-wrapper {
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto 3em;
  width: 90%;
  max-width: 700px;
  justify-content: space-evenly;
}

.char-list {
  margin: 2em 1em 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.char-list-img-wrapper {
  background-color: #E5E5E5;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  position: relative;
}

.char-list-img-wrapper img {
  max-width: 70%;
  max-height: 70%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}

.char-list span {
  text-transform: uppercase;
  font-size: 0.8em;
  font-weight: bold;
  margin-top: 1em;
}

</style>
