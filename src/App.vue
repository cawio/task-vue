<script setup>
import { ref, onMounted } from 'vue'

// reactive state
const count = ref(10)

// functions that mutate state and trigger updates
function increment() {
    count.value++
}

function decrement() {
    count.value--
}

// lifecycle hooks
onMounted(() => {
    console.log(`The initial count is ${count.value}.`)
})
</script>

<template>
    <h1>Count is: {{ count }}</h1>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
</template>
