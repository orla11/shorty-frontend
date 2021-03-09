<template>
    <div class="loader_center">
        <div v-for="i in 8" v-bind:key="i" class="spinner-grow text-primary" role="status">
            <span class="sr-only">Loading...</span>
        </div>
    </div>
</template>

<style scoped>
    .loader_center {
        text-align: center;
    }
</style>