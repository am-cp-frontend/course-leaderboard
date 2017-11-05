<template>
    <tr>
        <th></th>
        <th v-for='(task, idx) in tasks' :key='idx' class='task'>
            {{ task.name }}
        </th>
    </tr>
</template>

<script>
export default {
    props: ['tasks']
}
</script>

<style lang="sass" scoped>
    @import '~@/global-styles/vars.sass'

    th
        text-align: center

    
</style>