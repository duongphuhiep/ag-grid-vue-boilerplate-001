<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import '../node_modules/ag-grid/dist/styles/ag-grid.css';
import '../node_modules/ag-grid/dist/styles/ag-theme-balham.css';
import 'ag-grid-enterprise';

export default {
  name: 'App',
};
</script>
