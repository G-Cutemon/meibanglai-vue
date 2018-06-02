<template>
    <div id="recruit-list" class="container p-l-0 p-r-0">
        <div class="recruit_list m-tb-10" v-for="(item, index) in dataList" :key="index">
            <div class="row">
                <ul class="col-xs-12 col-sm-4 col-md-4">
                    <li class="p-10 p-0 f-rem1-6">
                        <a href="<%:=DETAIL_PREFIX?d=item.id" class=" h-c-red"><strong>{{ item.jod_name }}</strong></a>
                    </li>
                    <li class="p-10 c-ff552e p-0"><strong class="f-s18">{{ item.treatment_leve }}</strong></li>
                    <li class="p-10 p-0">
                        <span class="bg-ccc c-6c95ba f-rem05">五险一金</span>
                        <span class="bg-ccc c-6c95ba f-rem05">包吃住</span>
                        <span class="bg-ccc c-6c95ba f-rem05">住房补</span>
                        <span class="bg-ccc c-6c95ba f-rem05">交通补助</span>
                    </li>
                </ul>
                <ul class="col-xs-8 col-sm-4 col-md-5">
                    <li class="p-10 c-999 p-0 f-rem08">美容 | 养颜 | 养生 | 不限</li>
                    <li class="p-10 p-0 f-rem08 m-t-1">
                        <a href="" class="h-c-red">{{ item.company_name }}</a>
                    </li>
        
                </ul>
                <ul class="col-xs-4 col-sm-4 col-md-3 m-t-10 m-t-2 text-c">
                    <li class="p-10 p-0">
                        <a class="btn btn-danger m-qm f-rem05 p-5" :href="DETAIL_PREFIX + '?d=' + item.id">查看职位</a>
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
                DETAIL_PREFIX: '/view/data/invitation.html',
            }
        },
        props: ["dataList"],
    }
</script>

<style>
</style>