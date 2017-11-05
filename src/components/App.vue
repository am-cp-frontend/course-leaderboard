<template>
    <div class='app'>
        <div class='header'>
            Punch card выполнения заданий
        </div>

        <ProgressTable :users='users' :tasks='state' />
    </div>
</template>

<script>
import ProgressTable from '@/components/ProgressTable.vue'

// debug purposes
import { state, users } from '@/util/defaultState'

export default {
    data () {
        return {
            state,
            users
        }
    },
    components: {
        ProgressTable
    }
}
</script>

<style lang="sass" scoped>
    @import '~@/global-styles/vars.sass'

    .app
        padding: $main-container-padding
    
    .header
        font-size: $header-font-size
        font-weight: 100
</style>

