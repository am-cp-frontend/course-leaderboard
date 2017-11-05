<template>
    <div class='app'>
        <div class='header'>
            Punch card выполнения заданий
        </div>

        <PunchCard :data='defaultState' :tasks='defaultTasks' />
    </div>
</template>

<script>
import PunchCard from '@/components/PunchCard.vue'

// debug purposes
import { defaultState, defaultTasks } from '@/util/defaultState'

export default {
    data () {
        return {
            defaultTasks,
            defaultState
        }
    },
    components: {
        PunchCard
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

