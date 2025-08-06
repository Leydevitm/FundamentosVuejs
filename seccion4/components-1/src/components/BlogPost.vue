<script setup>
defineProps(['title'])
</script>

<template>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">{{ title }}</h5>
            <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
        </div>
    </div>
</template>


<style>
.card {
    margin-bottom: 1rem;
}
.card-body {
    background-color: #f8f9fa;
    border: 1px solid #dee2e6;
    border-radius: 0.25rem;
}
.card-title {
    font-size: 1.25rem;
    font-weight: 500;
}
.card-text {
    font-size: 1rem;
    color: #6c757d;
}
</style>