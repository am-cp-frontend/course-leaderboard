<template>
    <div class='punch-card-container'>
        <table>
            <HeaderRow :tasks='tasks' />
            <Row v-for='(userTasks, user, idx) in data'
                        :key='idx'
                        :tasks='tasks'
                        :userTasks='userTasks'
                        :user='user' />
        </table>
    </div>
</template>

<script>
import HeaderRow from '@/components/HeaderRow.vue'
import Row from '@/components/Row.vue'

export default {
    props: ['data', 'tasks'],
    computed: {
        users: function () {
            return Object.keys(this.tasks)
        }
    },
    components: {
        HeaderRow,
        Row
    }
}
</script>



<style lang="sass" scoped>
    @import '~@/global-styles/vars.sass'

    .punch-card-container
        padding-top: $main-container-padding

    table
        border-color: $table-border-color

</style>
