<template>
    <table id="news-list" class="table">
        <tbody>
            <tr class="active" v-for="(item, index) in dataList" :key="index">
                <td>
                    <a href="#">{{ substr(item) }}</a>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
    export default{
        data() {
            return {
                
            }
        },
        props: ["dataList"],
        methods: {
            substr(item){
                if(item.message){
                    // console.log(item.message)
                    let message = item.message
                    return message.substring(0, message.length - 5)
                }
            }
        },
    }
</script>

<style>
</style>