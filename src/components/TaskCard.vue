<template>
    <div class="task-card">
        <h3>{{ task.title }}</h3>
        <p>{{ task.subtitle }}</p>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import type { Task } from '@/types/Task'

defineProps<{
    task: Task
}>()
</script>

<style scoped>
.task-card {
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
}
</style>
