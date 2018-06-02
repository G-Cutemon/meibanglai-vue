<template>
    <div id="shoptransfer-list" class="container p-l-0 p-r-0">
        <div class="shop_start" v-for="(item, index) in dataList" :key="index">
            <div class="row" :href="DETAIL_PREFIX + '?d=' + item.id ">
                <ul class="col-xs-4 col-sm-2 col-md-2">
                    <li>
                        <a href=""><img :src="DEFAULT_IMAGE_URI + item.image_url.split(';')[0]" class="h-100 w-100" alt=""></a>
                    </li>
                </ul>
                <ul class="col-xs-8 col-sm-6 col-md-7 m-t3">
                    <li class="p-3 f-rem-2 ">
                        <strong class="f-rem-017 c-337">{{ item.transfer_name }}</strong>
                    </li>
                    <li class="p-3 d-i-b">{{ item.type }}</li>
                    <li class="p-3 d-i-b">{{ item.address }}</li>
                </ul>
                <ul class="hidden-xs col-xs-offset-3 col-sm-offset-0 col-md-offset-0  col-sm-4 col-md-3 text-center m-t9">
                    <li class="l-s-2 c-red d-i-b">月租：<strong class="f-rem-3">{{ item.rental }}</strong></li>
                    <li class="f-rem-013 d-i-b">转让费：{{ item.transfer_gold }}</li>
                </ul>
            </div>
        </div>	
	</div>
</template>

<script>
    export default{
        data() {
            return {
                DETAIL_PREFIX: '/view/data/shoptransfer.html',
                DEFAULT_IMAGE_URI: '//meibanglai.com/image/shoptransfer/',
            }
        },
        props: ["dataList"],
    }
</script>

<style>
</style>