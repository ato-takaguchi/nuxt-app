// pages/index.vue
<template>
  <div>
    <h1>Data from microCMS</h1>
    <pre>{{ data }}</pre>
  </div>
</template>

<script setup>
import { useHttp } from '#http';

const http = useHttp();
const { data } = await http.get('/blogpost');
</script>
