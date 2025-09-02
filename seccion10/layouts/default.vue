import { AppHeader, AppFooter } from '../.nuxt/components';
<template>

    <div class="d-flex flex-column min-vh-100">
        <AppHeader />
        <slot />
       
        <AppFooter />
    </div>
</template>