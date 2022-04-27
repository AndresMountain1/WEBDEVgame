<script setup lang="ts">
</script>
<template>
<div class="middle" style="margin-top: 10%;">
  <div class="flex-row-vertical justify-content-center">
    <h2>Choisissez l'IA que vous souhaitez upload :</h2>
    <div class="parent-list">
      <div class="div1-list">
        <div class="list-header">Upload d'un fichier d'IA :</div>
        <input type="file">
      </div>
    </div>
  </div>
</div>
</template>
    
<style scoped>
  .parent-list {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    width: 100%;
    text-align: center;
  }
    .div1-list { 
      grid-area: 1 / 1 / 2 / 2; 
      border: solid #1E3D59;
      height: auto;
    }
</style>