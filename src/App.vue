<template>
<div>
    <Header></Header>

    <!-- <button @click="getUrlParams">获取地址栏参数</button> -->

    <router-view @getUrlParams="getUrlParams" @clearData="clearData" @getData="getData" @getLogistics="getLogistics" @paginationCallback="paginationCallback" :dataList="dataList" :hasData="hasData"></router-view>

    <pagination v-if="hasData" :totalPage="totalPage" :currentPage="currentPage" :changeCallback="paginationCallback"></pagination>

    <Footer></Footer>

</div>
</template>

<script>
import Pagination from '@/components/pagination'
import Header from '@/components/header'
import Footer from '@/components/footer'
export default {
    name: 'App',
    data() {
        return {
            category: this.$route.query.category,
            type: this.$route.query.type || 1,
            // num: this.$route.query.num || 1,
            url: "//meibanglai.com/data/dataList.do",
            dataList: '',
            hasData: false,
            totalPage: 100,
            currentPage: parseInt(this.$route.query.num) || 1,
            start: "",
            end: "",
            isClick: "0",
        }
    },
    components: {
        Header,
        Footer,
        Pagination
    },
    watch: {
        '$route': ['clearData', 'getUrlParams', 'getData'],
    },
    methods: {
        getUrlParams(){
            this.category = this.$route.query.category,
            this.type = this.$route.query.type || 1,
            this.currentPage = parseInt(this.$route.query.num) || 1
        },
        clearData(){
            this.hasData = false
            this.isClick = "0"
        },
        getData(now){
            if(this.category == 4){
                    this.url = "//meibanglai.com/data/getInformationList.do"
                } else if(this.category == 7){
                    // console.log(this.isClick)
                    if(this.isClick != 1){
                        return
                    }
                    this.url = "//meibanglai.com/data/dataListLogistics.do"
                    let _this = this,
                        url = this.url,
                        postData = this.$qs.stringify({
                            start: _this.start,
                            end: _this.end,
                            num: _this.currentPage
                        })
                    console.log(_this.category, _this.type, _this.currentPage)
                    this.$axios({
                        method: 'post',
                        url: url,
                        data:postData
                    })
                    .then(function(response) {
                        // console.log(response.data);
                        if(response.data.code == 200){
                            $("html,body").animate({
                                scrollTop: 0
                            }, 500)
                            _this.dataList = response.data.data
                            _this.totalPage = response.data.totalPage
                            _this.hasData = true
                        } else {
                            return alert('输入错误或没有查询到信息')
                        }
                        
                        console.log(_this.dataList);
                    })
                    .catch(function(error) {
                        console.log(error);
                    })
                    return
                } else {
                    this.url = "//meibanglai.com/data/dataList.do"
                }
            let _this = this,
                url = this.url
            if(_this.category){
                console.log(_this.category, _this.type, _this.currentPage)
                this.$axios.get(url, {
                    params:{
                        "category": _this.category,
                        "type": _this.type,
                        "num": _this.currentPage
                    }
                })
                .then(function(response) {
                    // console.log(response.data);
                    if(response.data.code == 200){
                        $("html,body").animate({
                            scrollTop: 0
                        }, 500)
                        _this.dataList = response.data.data
                        _this.totalPage = response.data.totalPage
                        _this.hasData = true
                    }
                    
                    console.log(_this.dataList);
                })
                .catch(function(error) {
                    console.log(error);
                })
            }
        },
        getLogistics(start, end, isClick){
            this.isClick = isClick
            this.start = start
            this.end = end
        },
        // pagination的回调函数，参数cPage是跳转后的页码
        paginationCallback(cPage){
            if(this.category == 7){
                history.pushState(null, null, "?category=" + this.category + "&type=" + this.type + "&num=" + cPage + "?start=" + this.start + "&end=" + this.end)
            } else {
                history.pushState(null, null, "?category=" + this.category + "&type=" + this.type + "&num=" + cPage)
            }
            history.pushState(null, null, document.URL)
            this.currentPage = cPage
            // this.getUrlParams()
            this.getData()
            // this.currentPage = 1
        }
    },
    created: function(){
        window.addEventListener('popstate', function () {
            history.pushState(null, null, document.URL);
        })
        this.getData()
    },
    mounted: function () {
        if ($(window).width() > 768) {
            $('.navbar-nav>li').mouseover(function () {
                $(this).attr("class", "dropdown open");
                $(this).children("a").attr("aria-expanded", "true").css("color", "#777");;
            });

            $('.navbar-nav>li').mouseout(function () {
                $(this).attr("class", "dropdown");
                $(this).children("a").attr("aria-expanded", "false").css("color", "#fff");
            });
        } else {
            $('.navbar-nav>li>a').click(function () {
                if ($(this).parent().attr("class") == "dropdown") {
                    $('.navbar-nav>li').attr("class", "dropdown");
                    $(this).parent().attr("class", "dropdown open");
                } else if ($(this).parent().attr("class") == "dropdown open") {
                    $(this).parent().attr("class", "dropdown");
                }
            });

            $('.submenu-title').click(function () {
                $('.dropdown-submenu>.dropdown-menu').not($(this).next()).hide();
                $(this).next().toggle();
            });
        }
    },
}
</script>

<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>
