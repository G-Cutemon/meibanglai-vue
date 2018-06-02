<template>
    <div id="exhibition-list">
        <div class="content" v-for="(item, index) in dataList" :key="index">
            <div class="Exhibition_main clearfix">
                <ul class="list_a fl">
                    <li class="f-w f-rem-017">
                        <a href='javascript:'>
                            {{ item.company_name }}
                        </a>
                    </li>
                    <li>地址：
                        {{ item.address }}
                    </li>
                    <li>邮箱：
                        {{ item.email }}
                    </li>
                    <li>日期：
                        {{ item.time }}
                    </li>
                </ul>
                <ul class="list_c fr w-20 text-c">
                    <li>
                        <a href="javascript:">
                            {{ item.area + item.site }}
                        </a>
                    </li>
                </ul>
            </div>
		</div>
    </div>
</template>

<script>
    export default{
        data() {
            return {
                LOGO_URL: '//meibanglai.com/image/mbhbrand/',
                DETAILS_URL: '/view/data/foreignexhibition.html'
            }
        },
        props: ["dataList"],
        methods: {
            showData(){
                console.log(this.dataList)
            }
        },
        created: function(){
            if(!this.dataList){
                this.$emit('getData')
            }
        },
    }
</script>

<style>
</style>