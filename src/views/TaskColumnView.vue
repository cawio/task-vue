<template>
    <h1>Task Vue</h1>
    <div class="task-columns">
        <TaskColumn title="New" :tasks="newTasks" />
        <TaskColumn title="In Progress" :tasks="inProgressTasks" />
        <TaskColumn title="Completed" :tasks="completedTasks" />
    </div>
</template>

<script setup lang="ts">
import type { Task } from '@/types/Task'
import { ref } from 'vue'
import TaskColumn from '@/components/TaskColumn.vue'

const tasks = ref<Task[]>([
    { id: 1, title: 'Task 1', subtitle: 'Subtitle 1', status: 'new' },
    { id: 2, title: 'Task 2', subtitle: 'Subtitle 2', status: 'in-progress' },
    { id: 3, title: 'Task 3', subtitle: 'Subtitle 3', status: 'completed' },
    { id: 4, title: 'Task 4', subtitle: 'Subtitle 4', status: 'new' },
    { id: 5, title: 'Task 5', subtitle: 'Subtitle 5', status: 'in-progress' },
    { id: 6, title: 'Task 6', subtitle: 'Subtitle 6', status: 'completed' },
    { id: 7, title: 'Task 7', subtitle: 'Subtitle 7', status: 'new' },
    { id: 8, title: 'Task 8', subtitle: 'Subtitle 8', status: 'in-progress' },
    { id: 9, title: 'Task 9', subtitle: 'Subtitle 9', status: 'completed' },
    { id: 10, title: 'Task 10', subtitle: 'Subtitle 10', status: 'new' },
    { id: 11, title: 'Task 11', subtitle: 'Subtitle 11', status: 'in-progress' },
    { id: 12, title: 'Task 12', subtitle: 'Subtitle 12', status: 'completed' }
])

const newTasks = tasks.value.filter((task) => task.status === 'new')

const inProgressTasks = tasks.value.filter((task) => task.status === 'in-progress')

const completedTasks = tasks.value.filter((task) => task.status === 'completed')
</script>

<style scoped>
.task-columns {
    display: flex;
    gap: 1rem;
    width: 100%;
    height: 100%;
}
</style>
