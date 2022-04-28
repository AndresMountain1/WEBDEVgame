<script setup lang="ts">
  import { ref } from "@vue/reactivity";
  import router from './router/router';


  let login = ref('');
  let password = ref('');
  let userName = ref('');

  let users : any[] = [{
    id : 1,
    login : 'tsalon',
    password : 'demo'
  }, {
    id : 2,
    login : 'tfourniez',
    password : 'demo'
  }];

  let userIsLoggedIn : any = ref(false);

  router.beforeEach(async (to, from) => {
    if (!userIsLoggedIn) {
      router.push('/IaVsIa/1');
    }
  });

  const logInApp = (login : string, password : string) => {
    let user = users.find((user: { login: string; password: string; }) => user.login === login && user.password === password);
    if(user) {
      userIsLoggedIn.value = true;
      userName.value = user.login;
      router.push('/IaVsIa');

    } else {
      userIsLoggedIn.value = "Erreur. Mauvais login ou mot de passe ..."
    }
  }
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
              <div v-if="userIsLoggedIn === true" class="flex-row">
                <div class="middle m-h-lg">
                  <router-link class="link" to="/IaVsIa">IA vs IA</router-link>
                </div>
                <div style="align-self: stretch; background-color: white; width : 1px">
                </div>
                <div class="middle m-h-lg">
                  <router-link class="link" to="/IaVsHuman">HUMAN vs IA</router-link>
                </div>
                <div style="align-self: stretch; background-color: white; width : 1px">
                </div>
                <div class="middle m-h-lg">
                  <router-link class="link" to="/DropZoneIa">IA Dropzone</router-link>
                </div>
              </div>
              <div v-if="userIsLoggedIn === true" class="center">
                <span class="title">
                  {{userName}}
                </span>
              </div>
          </div>
        </div>
      </div>
    </header>
    <div v-if="userIsLoggedIn !== true" class="item">
      <div class="middle" style="margin-top: 10%;">
        <div class="flex-row-vertical justify-content-center">
          <div class="parent-list" style="width : 320px">
            <div class="div1-list">
              <div class="list-header">Connexion</div>
              <div style="margin-top : 5px">
                <div class="form-label">
                  <div class="form-label">Identifiant :</div>
                  <input v-model="login" placeholder="Identifiant" class="form-input">
                </div>
                <div>
                  <div class="form-label">Mot de passe :</div>
                  <input v-model="password" type="password" placeholder = "Mot de Passe" class="form-input">
                </div>
              </div>
              <button type="button" class="main-button" @click="logInApp(login, password)">Se connecter</button>
            </div>
          </div>
          <span v-if="userIsLoggedIn === 'Erreur. Mauvais login ou mot de passe ...'">{{userIsLoggedIn}}</span>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<style>
  .parent-list {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    width: inherit;
    text-align: center;
  }
  .div1-list { 
    grid-area: 1 / 1 / 2 / 2; 
    border: solid #1E3D59;
    height: auto;
  }
  .form-label {
    margin-top: 2px;
    margin-bottom: 2px;
  }

</style>
