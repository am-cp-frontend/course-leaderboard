<template>
    <div class='progress-bar'>
        <div :style='progress' class='progress'></div>
    </div>
</template>

<script>
export default {
    props: ['value'],
    computed: {
        progress: function () {
            return {
                width: `${this.value}%`
            }
        }
    }
}
</script>

<style lang="sass" scoped>
    @import '~@/global-styles/vars.sass'

    .progress-bar
        width: 100%
        height: 100%
        padding: $bar-host-padding

    .progress
        height: 100%
        background-color: $bar-color
</style>
