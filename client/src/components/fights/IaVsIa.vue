<script setup lang="ts">
  import { ref } from 'vue';
  import axios from 'axios';  
    const Ias : any[] = [
    {
      id : 1, 
      path : "simplePlayer.py",
      comment : "Attack IA",
      score : 0
    }, {
      id : 2, 
      path : "simplePlayer.py",
      comment : "Defense IA",
      score : 0
    }, {
      id : 3, 
      path : "simplePlayer.py",
      comment : "Mixte IA",
      score : 0
    }, 
  ];

  let aGameWasLaunched = ref(false);
  let multipleGames = ref(false);
  let gameNumber = ref(1);
  const getIasList = () => {
  };

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
    aGameWasLaunched.value = true;
    axios.post(import.meta.env.VITE_API_URL + 'game/aivsai', {
      ia1File : iaLeftSelected.path,
      ia2File : iaRightSelected.path,
      gameNumber : gameNumber
    }).then(res => {
      console.log(res);
      let players = res.data.players;
      iaLeftSelected.score = players[0].score;
      iaRightSelected.score = players[1].score;
      if(players[0].score > players[1].score) {
        winner.value = Ias.filter(Ia => Ia.id === iaLeftSelected.id)[0];
        loser.value = Ias.filter(Ia => Ia.id === iaRightSelected.id)[0];
      } else if (players[0].score < players[1].score) {
        winner.value = Ias.filter(Ia => Ia.id === iaRightSelected.id)[0];
        loser.value = Ias.filter(Ia => Ia.id === iaLeftSelected.id)[0];
      } else {
        winner.value = undefined;
        loser.value = undefined;
      }
    }).catch(err => {
      console.log(err);
    });
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
            <div>
              <input type="checkbox" v-model="multipleGames" style="margin-bottom : 5px;"> Partie multiple
              <div v-if="multipleGames">
                  Nombre : <input type="number" style="width : 30px" min="2" max="10" v-model="gameNumber">
              </div>
            </div>
        </div>
      </div>
      <div v-if="aGameWasLaunched" class="div3 circled">
        <div class="list-header">Recap</div>
        <div v-if="winner" class="flex-row-horizontal">
          <div class="winner">
            <div class="flex-row justify-content-space-between">
              <img src="../../assets/ressources/cup_47753.png">
              <div class="middle">
                <div class="flex-row-horizontal">
                  <div style="font-weight : bold">
                    {{winner.comment}}
                  </div>
                  <div>
                    {{winner.path}}
                  </div>
                  <div>
                    {{winner.score}}
                  </div>
                </div>
              </div>
              <img src="../../assets/ressources/cup_47753.png">
            </div>
          </div>
          <div class="loser">
            <div class="flex-row justify-content-space-between">
              <img src="../../assets/ressources/skull-on-top-of-a-cross-of-bones-in-a-rounded-square_icon-icons.com_70385.png">
              <div class="middle">
                <div class="flex-row-horizontal">
                  <div style="font-weight : bold">
                    {{loser.comment}}
                  </div>
                  <div>
                    {{loser.path}}
                  </div>
                  <div>
                    {{loser.score}}
                  </div>
                </div>
              </div>
              <img src="../../assets/ressources/skull-on-top-of-a-cross-of-bones-in-a-rounded-square_icon-icons.com_70385.png">
            </div>
          </div>
        </div>
        <div v-else>
          <div class="draw">
            <div class="flex-row justify-content-space-between">
              <img src="../../assets/ressources/equal_112383.png">
              <div class="middle">
                <span style="font-weight : bold">
                  Egalité
                </span>
              </div>
              <img src="../../assets/ressources/equal_112383.png">
            </div>
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
img {
  margin: 5px;
}
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