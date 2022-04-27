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

  const getIasList = () => {};

  let iaLeftSelected = ref(Ias[0]);
  const setIaLeftSelected = (Ia : any) => {
    iaLeftSelected.value = Ia;
  }

  let iaRightSelected = ref(Ias[0]);
  const setIaRightSelected = (Ia : any) => {
    iaRightSelected.value = Ia;
  }

  let winner : any = ref(undefined);
  let loser : any = ref(undefined);

  const fight = (iaLeftSelected : any, iaRightSelected : any) => {
    winner.value = iaLeftSelected;
    loser.value = iaRightSelected;
  }
</script>
<template>
  <div class="flex-row justify-content-center">
    <div class="parent">
      <div class="div1 circled">
        <div class="list-header">Liste des IAs</div>
        <div v-for="(Ia) in Ias" v-bind:key="Ia.id">
          <div @click="setIaLeftSelected(Ia)" class="m-v">
            <div v-if="iaLeftSelected.id === Ia.id" class="player-selected pointer">
              <span v-if="iaLeftSelected.id === Ia.id" style="color : red;">{{Ia.comment}}</span>
              <span v-else class="pointer">{{Ia.comment}}</span>
            </div>
            <div v-else class="pointer">
              <span>{{Ia.comment}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="div2 middle">
        <div class="flex-row-horizontal">
          <div class="fight-label">
            <div>
              {{iaLeftSelected.comment}}
            </div>
            <div>
              VS
            </div>
            <div>
              {{iaRightSelected.comment}}
            </div>
          </div>
          <button type="button" class="main-button" @click="fight(iaLeftSelected, iaRightSelected)">Fight</button>
        </div>
      </div>
      <div class="div3 circled">
        <div class="list-header">Recap</div>
        <div v-if="winner" class="flex-row-horizontal">
          <div class="winner">
            {{winner.comment}} {{winner.path}}
          </div>
          <div class="loser">
            {{loser.comment}} {{loser.path}}
          </div>
        </div>
      </div>
      <div class="div4 circled">
        <div class="list-header">Liste des IAs</div>
        <div v-for="(Ia) in Ias" v-bind:key="Ia.id">
          <div @click="setIaRightSelected(Ia)" class="m-v">
            <div v-if="iaRightSelected.id === Ia.id" class="player-selected pointer">
              <span v-if="iaRightSelected.id === Ia.id" style="color : red;">{{Ia.comment}}</span>
              <span v-else>{{Ia.comment}}</span>
            </div>
            <div v-else class="pointer">
              <span>{{Ia.comment}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.parent {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 0px;
  width: 90%;
  height : 80vh;
  text-align: center;
  margin-top: 2%;
}

.div1 {
  grid-area: 1 / 1 / 3 / 2;
}
.div2 {
  grid-area: 1 / 2 / 2 / 3;
}
.div3 {
  grid-area: 2 / 2 / 3 / 3;
}
.div4 {
  grid-area: 1 / 3 / 3 / 4;
}
</style>