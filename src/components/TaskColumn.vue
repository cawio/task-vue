<template>
    <div class="container">
        <div class="task-column">
            <h2>{{ title }}</h2>
            <TaskCard v-for="task in tasks" :key="task.id" :task="task" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import type { Task } from '@/types/Task'
import TaskCard from '@/components/TaskCard.vue'

defineProps<{
    title: string
    tasks: Task[]
}>()
</script>

<style scoped>
.container {
    width: 100%;
    height: 100%;
}

.task-column {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    padding: 1rem;
}
</style>
