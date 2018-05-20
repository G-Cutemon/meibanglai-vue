<template>
</template>

<script>
    export default{
        data() {
            return {
                LOGO_URL: '//meibanglai.com/image/mbhbrand/'
            }
        },
        props: ["dataList"],
        methods: {
            showData(){
                console.log(this.dataList)
            }
        },
        created: function(){
            // let category = this.$route.query.category,
            //     type = this.$route.query.type || 1,
            //     num = this.$route.query.num || 1
            // console.log(category, type, num)
            this.$emit('getUrlParams')
            this.$emit('getData')
        },
    }
</script>

<style>
</style>