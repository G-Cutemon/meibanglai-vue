<template>
    <div id="logistic-list" class="p-l-0 p-r-0">
        <div class="container">
            <div class="select-area" v-if="!$route.query.type || $route.query.type === '1'">
                <div class="area">
                    <hr />
                        <div class="search-bar">
                            <label>从</label>
                            <div class="input-wrap input-wrap-539">
                                <input type="text" placeholder="输入寄件人地址" v-model="start">
                            </div>
                            <label>到</label>
                            <div class="input-wrap">
                                <input type="text" placeholder="输入收件人地址" v-model="end">
                            </div>
                            <button class="wl-btn search-btn ss-btn wl-btn-768 btn btn-info" @click="doSearch">搜索</button>
                        </div>
                </div>
            </div>
            <div v-if="hasData">
                <div class="logistics-content">
                    <div class="row active" v-for="(item, index) in dataList" :key="index">
                        <ul class="col-xs-4 col-sm-2 col-md-2">
                            <li><img :src="item.logo_url == '' ? DEFAULT_IMAGE : item.logo_url "/></li>
                        </ul>
                        <ul class="col-xs-8 col-sm-5 col-md-5 f-s-1rem f-s-015 p-05">
                            <li><a href="javascript:">公司名称：{{ item.company_name }}</a></li>
                            <li>地址：{{ item.address }}</li>
                            <li class="c-DD20">联系人：<span>{{ item.principal }}</span></li>
                            <li class="c-DD20">电话：<span>{{ item.phone }}</span></li>
                            <li>发货热线：<span>{{ item.telephone }}</span></li>

                        </ul>
                        <ul class="hidden-xs col-sm-5 col-md-5 f-s-1rem f-s-015">
                            <li>货运市场：<span>{{ item.market }}</span></li>
                            <li>出发站：<span>{{ item.start_site }}</span></li>
                            <li>到达站：<span>{{ item.end_site }}</span></li>
                            <li>发布时间：<span>{{ formatDate(item.updata_time) }}</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        

            <div class="select-area text-c" v-if="!$route.query.type || $route.query.type === '2'">
                <div class="area">
                    <hr />
                    <select id="com" class="h-45">
                        <option value="auto" selected="selected">自动</option>
                        <option value="ems">EMS</option>
                        <option value="jd">京东</option>
                        <option value="shunfeng">顺丰</option>
                        <option value="shentong">申通</option>
                        <option value="yuantong">圆通</option>
                        <option value="zhongtong">中通</option>
                        <option value="huitongkuaidi">汇通</option>
                        <option value="tiantian">天天</option>
                        <option value="zhaijisong">宅急送</option>
                    </select>
                    <input type="text" id="num" placeholder="请输入快递单号" class="h-45 w-22"/>
                    <button type="button" id="search" class="btn btn-info h-45 w-10">搜索</button>
                    <span class="hidden-xs" style="display:none">如果没有找到想要的快递 可以试试自动~</span>
                </div>
            </div>

            <div class="select-area text-c" v-if="!$route.query.type || $route.query.type === '3'">
                <div class="area">
                    <hr />
                    <select id="s_province" name="s_province" class="h-45 w-w100"></select>
                    <select id="s_city" name="s_city" class="h-45 w-w100"></select>
                    <select id="s_county" name="s_county" class="h-45 w-w100"></select>
                    <input type="text" id="s_town" placeholder="乡/镇  如:玉溪镇" class="h-45 w-w100"/>
                    <button class="btn btn-primary h-45 w-10 w-w100" id="search">搜索</button>
                </div>
            </div>
        </div>
	</div>
</template>

<script>
    import 'static/js/public/area.js'
    import 'static/js/data/queryExpressage.js'
    export default{
        data() {
            return {
                DEFAULT_IMAGE: '//meibanglai.com/image/logistics/default.png',
                category: this.$route.query.category,
                type: this.$route.query.type || 1,
                currentPage: parseInt(this.$route.query.num) || 1,
                start: "",
                end: "",
                searchHasData: this.hasData
            }
        },
        props: ["dataList","hasData"],
        watch: {
            // '$route': ['doSearch']
        },
        methods: {
            doSearch(){
                this.$emit('clearData')
                this.$emit('getLogistics', this.start, this.end, "1")
                this.$emit('getUrlParams')
                this.$emit('getData')
                if(this.start || this.end){
                    history.pushState(null, null, "?category=" + this.category + "&type=" + this.type + "&start=" + this.start + "&end=" + this.end)
                    history.pushState(null, null, document.URL)
                }
            },
            formatDate(n) {
                // 获取时分秒
                let now = new Date(),
                    year = now.getFullYear(),
                    month = now.getMonth() + 1,
                    date = now.getDate(),
                    hours = now.getHours(),
                    minutes = now.getMinutes(),
                    seconds = now.getSeconds(),
                    timestamp = now.getTime();

                // 小于10数字补0
                month = month < 10 ? "0" + month : month;
                date = date < 10 ? "0" + date : date;
                hours = hours < 10 ? "0" + hours : hours;
                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;
                return year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds;
            }
        },
        computed: {
            getCurrentData(){ 

            }
        }
    }
</script>

<style>
</style>