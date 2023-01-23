<template>
<div class="bg-dark h-screen">
  <div class="flex" style="height: 88vh">
    <!-- Side nav -->
    <div class="w-56 bg-black h-full flex-none">
      <div class="p-6">
      <img src="./assets/logo-white.png" class="h-10">
      </div>
      <div class="mx-2">
        <button v-for="page in pages" :key="page.id" @click="setID = page.id" :class="`w-full text-sm font-semibold rounded px-3 py-2 flex items-center justify-start ${setID === page.id ? 'bg-light text-white' : 'text-lightest'}`">
          <img class="w-8 mr-3" :src="require(`./assets/${page.icon}.svg`)" />
          <p>{{page.name}}</p>
        </button>
      </div>
      <div class="mx-5">
        <h1 class="mb-3 mt-6 text-xs text-lightest tracking-widest uppercase letter-spacing-5">Playlists</h1>
        <button class="flex items-center justify-start opacity-75 hover:opacity-100 mb-2">
          <img src="./assets/add.svg" class="h-10 w-10 mr-2"/>
          <p class="text-sm text-white font-semibold">Create Playlist</p>
        </button>
        <button class="flex items-center justify-start opacity-75 hover:opacity-100">
          <img src="./assets/liked.svg" class="h-10 w-10 ml-0.5 mr-2"/>
          <p class="text-sm text-white font-semibold">Liked Songs</p>
        </button>
        <div class="h-px w-full bg-light my-3"></div>
      </div>
      <div class="mx-5">
        <div class="w-full h-40 overflow-y-scroll">
          <p v-for="album in albums" :key="album.name" class="text-lightest hover:text-white text-xs py-1 my-1 cursor-pointer">{{album.name}}</p>
        </div>
      </div>
      <div class="relative pt-10">
        <h1 class="text-white text-center text-sm pt-11 pb-3">Now Playing</h1>
        <img src="./assets/mb.jpg" />
      </div>
    </div>
    <!-- Main content-->
    <div class="w-full h-full relative">
    <!-- Header -->
    <div class="w-full sticky top-0 p-2">

      </div>
    </div>
  </div>
  <!-- Play bar -->
  <div class="w-full bg-light absolute" style="height: 12vh">

  </div>
</div>
</template>

<script>
export default {
    name: 'App',
    data(){
      return{
        pages: [
          {id: 'home', name: 'Home', icon: 'home'},
          {id: 'search', name: 'Search', icon: 'search'},
          {id: 'library', name: 'Your Library', icon: 'library'},
        ],
        setID: 'home',
        albums: [
          {name: 'Best of 2022'},
          {name: 'Comfort Zone'},
          {name: 'Daily Mix 1'},
          {name: 'all,'},
          {name: 'Signed XOXO'},
          {name: 'Release Radar'},
          {name: 'Top songs 2021'},
          {name: 'Best of Adele'},
          {name: 'ALL TIME FAVORITES'},
          {name: 'Chill Playlist'},
          {name: '2019 favs.'},
          {name: 'on my swag shi:::)'},
          {name: 'عراكي'},
          {name: '2019'},
        ]
      };
    },
    methods:{

    }
};
</script>

<style>
*{
  font-family: 'Helvetica';
}
</style>
