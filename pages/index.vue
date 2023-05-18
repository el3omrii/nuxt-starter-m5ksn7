<template>
  <nuxt-layout name="home">
    <template #content>
      <!-- Masonry layout -->
      <div class="masonry">
  <figure class="masonry-brick"><img src="https://unsplash.it/700/400?image=1" class="masonry-img" alt="Masonry Brick #1"></figure>
  <figure class="masonry-brick"><img src="https://unsplash.it/700/300?image=2" class="masonry-img" alt="Masonry Brick #2"></figure>
  <figure class="masonry-brick"><img src="https://unsplash.it/700/500?image=3" class="masonry-img" alt="Masonry Brick #3"></figure>
  <figure class="masonry-brick"><img src="https://unsplash.it/700/250?image=4" class="masonry-img" alt="Masonry Brick #4"></figure>
  <figure class="masonry-brick"><img src="https://unsplash.it/700/450?image=5" class="masonry-img" alt="Masonry Brick #5"></figure>
</div>
      
      <!-- End Masonry layput -->
    </template>
    <template #sidebar>
      <h2>this is the sidebar</h2>
      <h2>this is the sidebar</h2>
      <h2>this is the sidebar</h2>
      <h2>this is the sidebar</h2>
      <h2>this is the sidebar</h2>
      <h2>this is the sidebar</h2>
    </template>
  </nuxt-layout>
</template>
<style>
.masonry { 
  display: flex;
  flex-flow: row wrap;
  margin-left: -8px; /* Adjustment for the gutter */
  width: 100%;
  counter-reset: brick;
}

.masonry-brick {
  flex: auto;
  height: 250px;
  min-width: 150px;
  margin: 0 8px 8px 0; /* Some gutter */
  overflow: hidden;
    border-radius: 5px;
    margin: 0 0 8px 8px;
    background-color: #333;
    color: white;
    position: relative;
}
.masonry-img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    filter: brightness(50%);
}
.masonry-brick:nth-child(4n+1) {
  width: 250px;
}
.masonry-brick:nth-child(4n+2) {
  width: 325px;
}
.masonry-brick:nth-child(4n+3) {
  width: 180px;
}
.masonry-brick:nth-child(4n+4) {
  width: 380px;
}
</style>