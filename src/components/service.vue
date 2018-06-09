<template>
    <div id="shops-list" class="container">
        <div class="hover-f5 b-top-f5 m-tb-10" v-if="!$route.query.type || $route.query.type === '1' " v-for="(item, index) in dataList" :key="index">
            <div class="row row-p m-0 f-s-1rem">
                <ul class="hidden-xs col-sm-2 col-md-2 ">
                    <li class="logy-img p-r-15"><img :src="item.image_url" alt=""></li>
                </ul>
                <ul class="col-xs-9 col-sm-8 col-md-8 p-0">
                    <li class="f-rem-017 f-w p-3">
                        <a :href="IMAGE_URL + '?d=' + item.id">{{ item.shop_name }}</a>
                    </li>
                    <li class="p-3">地址：{{ item.address }} </li>
                    <li class="p-3">手机：{{ item.phone }}</li>
                    <li class="p-3">营业时间： {{ item.businessHours }}</li>
                </ul>
                <ul class="col-xs-3 col-sm-2 col-md-2 p-0 text-center m-t-2">
                    <li>
                        <a href="" class="btn btn-danger btn-sm">联系商家</a>
                    </li>
                </ul>
            </div>
        </div>

        <div class="hover-f5 b-top-f5 m-tb-10" v-if="$route.query.type === '2' " v-for="(item, index) in dataList" :key="index">
            <div class="row row-p m-0 f-s-1rem l-h-2rem">
                <ul class="hidden-xs col-sm-2 col-md-2 p-0">
                    <li class="logy-img p-r-15"><img src="~static/image/logo.png" alt=""></li>
                </ul>
                <ul class="col-xs-9 col-sm-8 col-md-8 p-0">
                    <li>
                        <a :href="IMAGE_URL + '?d=' + item.id">{{ item.company_name }}</a>
                    </li>
                    <li>所在地：{{ item.company_adress }}</li>
                    <li>主要产品：{{ item.company_product }}</li>
                    <li>经营范围：{{ item.company_industry }}</li>
                </ul>
                <ul class="col-xs-3 col-sm-2 col-md-2 p-0 text-center m-t-2">
                    <li>
                        <a href="" class="btn btn-danger btn-sm">联系商家</a>
                    </li>
                </ul>
            </div>
        </div>

        <div class="hover-f5 b-top-f5 m-tb-10" v-if="$route.query.type === '3' " v-for="(item, index) in dataList" :key="index">
            <div class="row row-p m-0 f-s-1rem l-h-2rem">
                <ul class="hidden-xs col-sm-2 col-md-2 p-0">
                    <li class="logy-img p-r-15"><img src="~static/image/logo.png" alt=""></li>
                </ul>
                <ul class="col-xs-9 col-sm-8 col-md-8 p-0">
                    <li>
                        <a :href="IMAGE_URL + '?d=' + item.id ">{{ item.company_name }}</a>
                    </li>
                    <li>联系人：{{ item.contact_people }}</li>
                    <li>联系电话：{{ item.company_mobail }}</li>
                    <li>主营产品：{{ item.business_scope }}</li>
                    <li>所在地：{{ item.company_adress }}</li>
                </ul>
                <ul class="col-xs-3 col-sm-2 col-md-2 p-0 text-center m-t-2">
                    <li>
                        <a href="" class="btn btn-danger btn-sm">联系商家</a>
                    </li>
                </ul>
            </div>
        </div>

        <div class="hover-f5 b-top-f5 m-tb-10" v-if="$route.query.type === '4' " v-for="(item, index) in dataList" :key="index">
            <div class="row row-p m-0 f-s-1rem l-h-2rem">
                <ul class="hidden-xs col-sm-2 col-md-2 p-0">
                    <li class="logy-img p-r-15"><img src="~static/image/logo.png" alt=""></li>
                </ul>
                <ul class="col-xs-9 col-sm-8 col-md-8 p-0">
                    <li>
                        <a :href="IMAGE_URL + '?d=' + item.id">{{ item.company_name }}</a>
                    </li>
                    <li>联系人：{{ item.contact_people }}</li>
                    <li>联系电话： {{ item.contact_mobile }}</li>
                    <li>座机：{{ item.contact_tellphone }}</li>
                    <li>{{ item.product_name }}</li>
                    <li>{{ item.product_describe }}</li>
                </ul>
                <ul class="col-xs-3 col-sm-2 col-md-2 p-0 text-center m-t-2">
                    <li>
                        <a href="" class="btn btn-danger btn-sm">联系商家</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                IMAGE_URL: '/view/data/details.html',
            }
        },
        props: ["dataList"],
        watch: {
            $route(val, oldVal){
                console.log(val, oldVal)
            }
        },
    }
</script>

<style scoped>

</style>