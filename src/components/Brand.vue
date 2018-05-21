<template>
    <div id="brand-list">
        <div class="list" v-for="(item, index) in dataList" :key="index">
            <div class="sort">
                <ul class="clearfix">
                    <li class="fl one">
                        <img :src="LOGO_URL + item.brand_logo" />
                    </li>

                    <li class="fl two">
                        <p style="font-weight: bold;font-size: 1rem;">公司名：
                            {{item.campany_name}}
                        </p>
                        <p>参展产品：
                            {{item.product_name}}
                        </p>
                        <p>品牌官网：
                            {{item.website}}
                        </p>
                    </li>
                    <li class="fl three">
                        <a href="#">联系方式</a>
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
            if(!this.dataList){
                this.$emit('getData')
            }
        },
    }
</script>

<style>
</style>