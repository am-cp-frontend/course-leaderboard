<template>
    <tr>
        <th>{{ user }}</th>
        <td v-for='(task, index) in tasks' :key='index'>
            <Icon v-if='isCompleted(task)' :icon='icons.PunchIcon' />
            <Icon v-else :icon='icons.PunchEmptyIcon' />
        </td>
    </tr>
</template>

<script>
import Icon from '@/components/misc/Icon.vue'

import FeaturedIcon from '@/icons/featured.svg'
import PunchIcon from '@/icons/punch.svg'
import PunchEmptyIcon from '@/icons/punch-empty.svg'

export default {
    props: ['user', 'tasks', 'userTasks'],
    data () {
        return {
            icons: {
                FeaturedIcon,
                PunchIcon,
                PunchEmptyIcon
            }
        }
    },
    methods: {
        isCompleted: function (task) {
            return this.userTasks.tasksCompleted.includes(task.name)
        }
    },
    components: {
        Icon
    }
}
</script>

<style lang="sass">
    @import '~@/global-styles/vars.sass'

    td
        width: 70px
        text-align: center

    table
        border: 1px solid grey
        height: 70px

</style>

