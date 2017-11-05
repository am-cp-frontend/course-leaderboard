<template>
    <svg :viewBox='viewBox' class='svg-host'>
        <use :href='id' />
    </svg>
</template>

<script>
export default {
    props: ['icon'],
    computed: {
        viewBox: function () {
            return this.icon.viewBox
        },
        id: function () {
            return `#${this.icon.id}`
        }
    }
}
</script>

<style lang="sass" scoped>
    @import '~@/global-styles/vars.sass'

    .svg-host
        display: block
        width: $icon-size
        height: $icon-size
        fill: $icon-fill
</style>

