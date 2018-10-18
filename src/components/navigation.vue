<template>

    <aside class="menu">
        <p class="menu-label">
            General
        </p>
        <ul class="menu-list">
            <li v-bind:key="key" v-for="(route, key) in this.$router.options.routes">
                <router-link :to="route.path">{{ route.name }}</router-link>
            </li>
        </ul>
        <p class="menu-label">
            Filter
        </p>

        <searchform class="menu-form"/>

        <ul class="menu-list is-bottom">
            <li><a>Invitations</a></li>
            <li><a>Cloud Storage Environment Settings</a></li>
            <li><a>Authentication</a></li>
        </ul>

    </aside>

</template>

<script>

import searchform from './searchform.vue';

const routerLinks = [
    {
        name: 'Home',
        to: '/home',
    },
    {
        name: 'Blog',
        to: '/blog',
    }
]

export default {
    name: "navigation",
    components: {
        searchform: searchform,
    },
    data() {
        return {
            routerLinks: routerLinks,
        };
    },
}
</script>
