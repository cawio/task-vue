<template>
    <Card>
        <template #title>{{ task.title }}</template>
        <template #subtitle>{{ task.subtitle }}</template>
        <template #footer>
            <Tag :value="getTagValue(task.status)" :severity="getTagSeverity(task.status)" />
        </template>
    </Card>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import type { Task } from '@/types/Task'
import Card from 'primevue/card'
import Tag from 'primevue/tag'
import type { TaskStatus } from '@/types/TaskStatus'

defineProps<{
    task: Task
}>()

const getTagSeverity = (status: TaskStatus) => {
    switch (status) {
        case 'new':
            return 'info'
        case 'in-progress':
            return 'warning'
        case 'completed':
            return 'success'
        default:
            return 'info'
    }
}

const getTagValue = (status: TaskStatus) => {
    switch (status) {
        case 'new':
            return 'New'
        case 'in-progress':
            return 'In Progress'
        case 'completed':
            return 'Completed'
        default:
            return 'New'
    }
}
</script>

<style scoped></style>
