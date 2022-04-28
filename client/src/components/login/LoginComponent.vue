<script setup lang="ts">
  import { ref } from "@vue/reactivity";
  import router from '../../router/router'
  let login = ref('');
  let password = ref('');

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

  const logInApp = (login : string, password : string) => {
    if(users.find((user: { login: string; password: string; }) => user.login === login && user.password === password)) {
      userIsLoggedIn.value = true;
      router.push('/IaVsIa');

    } else {
      userIsLoggedIn.value = "Erreur. Mauvais login ou mot de passe ..."
    }
  }
</script>

<template>
  <div class="item">
    <div class="form">
      <div class="form-group">
        <span v-if="userIsLoggedIn === 'Erreur. Mauvais login ou mot de passe ...'">{{userIsLoggedIn}}</span>
        <div class="form-label">Identifiant :</div>
        <input v-model="login" placeholder="Identifiant" class="form-input">
      </div>
      <div class="form-group">
        <div class="form-label">Mot de passe :</div>
        <input v-model="password" type="password" placeholder = "Mot de Passe" class="form-input">
      </div>
      <button type="button" class="main-button" @click="logInApp(login, password)">Se connecter</button>
    </div>
  </div>
</template>
