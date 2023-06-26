<script setup></script>

<template>
  <header>HEADER</header>
  <aside>
    <nav class="menu">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>
      <router-link to="/team">Team</router-link>
      <router-link to="/services">Services</router-link>
      <router-link to="/products">Products</router-link>
    </nav>
  </aside>
  <main>
    <router-view/>
  </main>
  <main>MAIN</main>
  <footer>FOOTER</footer>
</template>

<style scoped>
.menu{ 
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
