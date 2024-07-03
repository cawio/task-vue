import type { TaskStatus } from './TaskStatus'

export type Task = {
    id: number
    title: string
    subtitle: string
    status: TaskStatus
}
