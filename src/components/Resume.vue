<template>
    <div id="resume-list" class="container p-l-0 p-r-0">
        <div class="recruit_list m-tb-10" v-for="(item, index) in dataList" :key="index">
            <div class="row">
                <ul class="col-xs-12 col-sm-4 col-md-4">
                    <li class="p-10 p-0 f-rem1-6">
                        <a :href="DETAIL_PREFIX + '?d=' + item.id" class=" h-c-red"><strong>{{ item.name }}</strong></a>
                    </li>
                    <li class="p-10 c-ff552e p-0"><strong class="f-s18">{{ item.sex ? "男" : "女" }}&nbsp;|&nbsp;{{ item.age }}&nbsp;|&nbsp;{{ item.experience }}&nbsp;|&nbsp;{{ eduToStr(item.education) }}</strong></li>
                    <li class="p-10 p-0">
                        {{ item.job_treatment }}
                    </li>
                </ul>
                <ul class="col-xs-8 col-sm-4 col-md-5">
                    <li class="p-10 c-999 p-0 f-rem08 c-red">期待职位：{{ item.job_intention }}</li>
                    <li class="p-10 p-0 f-rem08 m-t-1">
                        <span>期待地点：{{ item.job_area }}</span>
                    </li>
        
                </ul>
                <ul class="col-xs-4 col-sm-4 col-md-3 m-t-10 m-t-2 text-c">
                    <li class="p-10 p-0">
                        <a class="btn btn-danger m-qm f-rem05 p-5" :href="DETAIL_PREFIX + '?d=' + item.id">查看简历</a>
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
                DETAIL_PREFIX: '/view/data/resume.html',
            }
        },
        props: ["dataList"],
        methods: {
            eduToStr(num){
                if(num == "0"){
                    return "无"
                } else if(num == "1"){
                    return "高中"
                } else if(num == "2"){
                    return "大专"
                } else if(num == "3"){
                    return "本科"
                } else if(num == "4"){
                    return "本科以上"
                }
            }
        }
    }
</script>

<style>
</style>