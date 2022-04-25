<script setup lang="ts">
  const test = () => console.log("test");
</script>

<template>
  <div class="flex-row justify-content-center">
    <div class="parent">
      <div class="div1 circled">
        <div class="list-header">Liste des IAs</div>
      </div>
      <div class="div2 middle">
        <button type="button" class="main-button" @click="test">Fight</button>
      </div>
      <div class="div3 circled">
        <div class="list-header">Recap</div>
      </div>
      <div class="div4 circled">
        <div class="list-header">Liste des IAs</div>
      </div>
    </div>
  </div>
</template>

<style>
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

.main-button {
  border-radius: 5px;
  background-color: #1E3D59;
  color: white;
  width: 40%;
  padding: 5px;
  font-family: 'Montserrat';
}

.main-button:hover{
  background-color: #102E49;
  padding: 10px;
  transition: ease-in-out 0.1s;
}

</style>