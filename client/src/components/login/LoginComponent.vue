<script setup lang="ts">
import { ref } from "@vue/reactivity";
  let login = ref('');
  let password = ref('');
</script>

<template>
  <div class="item">
    <div class="form">
      <div class="form-group">
        <div class="form-label">Identifiant :</div>
        <input v-model="login" placeholder="Identifiant" class="form-input">
      </div>
      <div class="form-group">
        <div class="form-label">Mot de passe :</div>
        <input v-model="password" type="password" placeholder = "Mot de Passe" class="form-input">
      </div>

      {{login}} {{password}}
    </div>
  </div>
</template>
