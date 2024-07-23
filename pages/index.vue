<template>
  <div>
    <h1>Data from microCMS</h1>
    <div v-if="error">
      <p>Error: {{ error.message }}</p>
    </div>
    <div v-else>
      <pre>{{ data }}</pre>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useHttp } from '#app';

const { $http } = useHttp();

const data = ref(null);
const error = ref(null);

onMounted(async () => {
  try {
    const response = await $http.get('/blogpost');
    data.value = response.data;
  } catch (err) {
    error.value = err;
  }
});
</script>
