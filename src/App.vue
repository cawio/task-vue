<template>
    <header>
        <Toolbar>
            <template #start>
                <h1 style="margin: 0">Task Vue</h1>
            </template>

            <template #center>
                <Button as="router-link" label="Column View" to="/" />
                <Button as="router-link" label="List View" to="/list" />
            </template>

            <template #end></template>
        </Toolbar>
    </header>
    <main>
        <RouterView />
    </main>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import Toolbar from 'primevue/toolbar'
import Button from 'primevue/button'
</script>
