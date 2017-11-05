<template>
    <div class='table-container'>
        <table>
            <HeaderRow :tasks='tasks' />
            <Row v-for='(user, idx) in users'
                        :key='idx'
                        :tasks='tasks'
                        :user='user.name' />
        </table>
    </div>
</template>

<script>
import HeaderRow from '@/components/HeaderRow.vue'
import Row from '@/components/Row.vue'

export default {
    props: ['users', 'tasks'],
    components: {
        HeaderRow,
        Row
    }
}
</script>



<style lang="sass" scoped>
    @import '~@/global-styles/vars.sass'

    .table-container
        padding-top: $main-container-padding
        overflow-x: scroll
        position: relative

    table
        border-color: $table-border-color

</style>
