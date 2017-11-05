<template>
    <tr>
        <th>{{ user }}</th>
        <td v-for='(task, idx) in tasks' :key='idx'>
            <ProgressBar :key='idx'
                         :value='computeProgress(task)'/>
        </td>
    </tr>
</template>

<script>
import ProgressBar from '@/components/ProgressBar.vue'

export default {
    props: ['tasks', 'user'],
    methods: {
        computeProgress: function (task) {
            let totalParts = task.parts.length, completed = 0
            for (let part of task.parts)
                completed += part.completedBy.includes(this.user)
            
            return (completed / totalParts) * 100
        }
    },
    components: {
        ProgressBar
    }
}
</script>

<style lang="sass" scoped>
    @import '~@/global-styles/vars.sass'

    td
        height: 40px
        text-align: center

</style>

