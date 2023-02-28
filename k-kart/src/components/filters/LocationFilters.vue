<template><div></div></template>

<script>
export default {}
</script>

<style>
.nav {
  z-index: 11;
}
#app {
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
}
::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}
::-webkit-scrollbar-track {
  background-color: rgba(128, 128, 128, 0.289);
  border-radius: 4px;
  display: none;
}
::-webkit-scrollbar-thumb {
  background: rgba(128, 128, 128, 0.356);
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: black;
  display: block;
}
.filters-leave-to,
.filters-enter-from {
  width: 0%;
}
.filters-leave-active,
.filters-enter-active {
  transition: all 0.2s;
}
</style>