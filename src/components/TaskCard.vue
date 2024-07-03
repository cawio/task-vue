<template>
<Card>
    <template #title>{{ task.title }}</template>
    <template #subtitle>{{ task.subtitle }}</template>
    <template #footer>{{ task.status }}</template>
</Card>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import type { Task } from '@/types/Task'
import Card from 'primevue/card'

defineProps<{
    task: Task
}>()
</script>

<style scoped>
</style>
