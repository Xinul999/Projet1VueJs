<script setup lang="ts">
import { store } from "@/stores/produits"

</script>

<template>
  <h1>Liste habituel</h1>
  <ul>
    <li v-for="produit in store.produits" :key="produit.id" @click.prevent="produit.isSelect = !produit.isSelect">
      <a :class="{vert: produit.isSelect}">{{ produit.nom }}</a>
    </li>
  </ul>

</template>

<style scoped>
ul{
  margin: 0;
  padding: 0;
  list-style: none;
}
a{
  cursor: pointer;
}
.vert{
  color: green;
}

</style>