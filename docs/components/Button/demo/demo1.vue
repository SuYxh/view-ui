<template>
  <div class="button-wrapper">
    <x-button> hello </x-button>
    <x-button type="primary"> Primary </x-button>
    <x-button type="danger"> Danger </x-button>
    <x-button loading> Loading </x-button>
  </div>
</template>

<style scoped>
.button-wrapper {
  display: flex;
  gap: 10px;
}
</style>
