<template>
    <div class="task-columns">
        <TaskColumn
            v-for="columnConfig in columnConfigs"
            :key="columnConfig[0]"
            :title="columnConfig[1].title"
            :tasks="columnConfig[1].tasks"
        />
    </div>
</template>

<script setup lang="ts">
import type { Task } from '@/types/Task'
import { ref } from 'vue'
import TaskColumn from '@/components/TaskColumn.vue'
import type { TaskStatus } from '@/types/TaskStatus'

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

type ColumnConfig = {
    title: string
    tasks: Task[]
}

const columnConfigs = new Map<TaskStatus, ColumnConfig>()

for (const task of tasks.value) {
    if (!columnConfigs.has(task.status)) {
        columnConfigs.set(task.status, {
            title: task.status[0].toUpperCase() + task.status.slice(1).replace('-', ' '),
            tasks: []
        })
    }

    columnConfigs.get(task.status)!.tasks.push(task)
}
</script>

<style scoped>
.task-columns {
    display: flex;
    gap: 1rem;
    width: 100%;
    height: 50%;
}
</style>
