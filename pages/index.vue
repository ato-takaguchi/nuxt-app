<template>
  <div>
    <h1>Data from microCMS</h1>
    <pre>{{ data }}</pre>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useHttp } from '#http';

const data = ref(null);
const http = useHttp();

onMounted(async () => {
  const response = await http.get('/blogpost');
  data.value = response.data;
});
</script>
