<script setup lang="ts">
  import { ref } from 'vue';

  const Ias : any[] = [
    {
      id : 1, 
      path : "python/player1.py",
      comment : "Attack IA"
    }, {
      id : 2, 
      path : "python/player2.py",
      comment : "Defense IA"
    }, {
      id : 3, 
      path : "python/player3.py",
      comment : "Mixte IA"
    }, 
  ];

  let iaIsSelected = ref(false);
  let iaSelected = ref(Ias[0]);
  let order = ref('');

  const setIaSelected = (Ia : any) => {
    iaSelected.value = Ia;
  }
  const validateIaChoice = () => iaIsSelected.value = !iaIsSelected.value;
  const sendOrder = () => {
    console.log("Ordre envoyé " + order.value);
    order.value = '';
  }
</script>

<template>
  <div class="flex-row justify-content-center">
    <div v-if="iaIsSelected" class="parent-game">
        <div class="div1">
          <h2>Commandes disponibles :</h2>
          <div id="regle">
              <p><b>Déplacer :</b> <code>move X Y STRENGH</code> pour bouger<code>STRENGH</code> unités de la cellule <code>X</code> à la cellule <code>Y</code></p>
              <p><b>Agrandir :</b> <code>grow X</code> pour agrandir l'armée en <code>X</code></p>
              <p><b>Dormir :</b> <code>sleep</code> remet le compteur d'action à 0 pour toutes les armées (chacune des armées doit dormir entre deux actions move ou sleep).</p>
          </div>
          <div>
            <h2>Ordre à donner aux armées :</h2>
            <textarea style="width : 80%" v-model="order"></textarea><br>
            <em>Attention, un mauvais ordre résulte en un sleep des armées ...</em>
          </div>
        </div>
        <div class="div2 middle">
          <button type="button" class="main-button" @click="sendOrder">A l'attaque !</button>
        </div>
        <div class="div3">
          <img src="../../assets/ressources/plateau.png"> 
        </div>
      <div class="div4 middle"><button type="button" class="main-button" @click="validateIaChoice">Choisir l'IA</button></div>
    </div>
    <div v-else>
      <div class="flex-row justify-content-center" style="width : 100%">
        <h2>Choisissez l'IA que vous souhaitez affronter :</h2>
        <div class="parent-list">
          <div class="div1-list">
            <div class="list-header">Liste des IAs</div>
            <div v-for="(Ia) in Ias" v-bind:key="Ia.id" @click="setIaSelected(Ia)">
              <div class="m-v">
                <div v-if="iaSelected.id === Ia.id" class="player-selected pointer">
                  <span v-if="iaSelected.id === Ia.id" style="color : red;">{{Ia.comment}}</span>
                  <span v-else class="pointer">{{Ia.comment}}</span>
                </div>
                <div v-else class="pointer">
                  <span>{{Ia.comment}}</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <button type="button" class="main-button-list" @click="validateIaChoice">Choisir cette IA</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .parent-game {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 30px;
    grid-row-gap: 0px;
    width: 90%;
    height : 80vh;
    text-align: center;
    margin-top: 2%;
  }
  .parent-list {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    margin-top: 1%;
    width: 30%;
    text-align: center;
  }

  #regle {
    max-height: fit-content;
    text-align: left;
    margin: 10px;
  }

  img {
    max-width: 100%;
    max-height: 100%;
  }
  .div1 { 
    grid-area: 1 / 1 / 3 / 2;
    border: solid #1E3D59;
    height : 70vh;
  }

  .div1-list { 
      grid-area: 1 / 1 / 2 / 2; 
      border: solid #1E3D59;
      height: auto;
    }
  .div2 {
    grid-area: 3 / 1 / 4 / 2;
  }
  .div3 { 
    grid-area: 1 / 2 / 3 / 3;
    border: solid #1E3D59;
    height : 70vh;
  }
  .div4 { grid-area: 3 / 2 / 4 / 3; }

  .main-button-list {
      border-radius: 5px;
      background-color: #1E3D59;
      color: white;
      margin: 4px;
      padding: 2px;
      font-family: 'Montserrat';
      cursor: pointer;
  }
    
  .main-button-list:hover{
      background-color: #102E49;
      transition: ease-in-out 0.1s;
      padding: 4px;
      margin: 2px;
  }
</style>