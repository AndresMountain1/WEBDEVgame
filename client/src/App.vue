<script setup lang="ts">
</script>

<template>
  <div>
    <header>
      <div class="page-header">
        <div class="flex-row justify-content-center">
          <div class="flex-row justify-content-space-between align-items-center general-width">
              <div class="center">
                <span class="title">
                  HACKAGAME
                </span>
              </div>
              <div class="flex-row">
                <div class="middle m-h-lg">
                  <router-link class="link" to="/IaVsIa">IA vs IA</router-link>
                </div>
                <div style="align-self: stretch; background-color: white; width : 1px">
                </div>
                <div class="middle m-h-lg">
                  <router-link class="link" to="/IaVsHuman">HUMAN vs IA</router-link>
                </div>
              </div>
              <div class="center">
                <span class="title">
                  Username
                </span>
              </div>
          </div>
        </div>
      </div>
    </header>
    <router-view></router-view>
  </div>
</template>

<style>
/* @import './assets/base.css';

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }
} */
</style>
