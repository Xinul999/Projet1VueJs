<script setup lang="ts">
</script>

<template>
<header>
  <nav>
    <ul class="navigation">
      <li><RouterLink to="/">Mes produits habituels</RouterLink></li>
      <li><RouterLink to="/ma-liste-du-jour">Ma liste du jour</RouterLink></li>
      <li><RouterLink to="/modifier-mes-produits-habituels">Modifier mes produits habituels</RouterLink></li>
    </ul>
  </nav>
</header>
</template>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
a{
  text-decoration: none;
  color: black;
}
.navigation {
  display: flex;
  justify-content: space-between;
}

</style>
