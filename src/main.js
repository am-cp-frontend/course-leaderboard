import Vue from 'vue'
import App from '@/components/App.vue'

import '@/global-styles/global.sass'

new Vue({
    el: '#app-root',
    template: '<App />',
    components: {
        App
    }
})