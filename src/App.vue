<template>
<div>
    <Header></Header>

    <button @click="getUrlParams">获取地址栏参数</button>

    <router-view @getUrlParams="getUrlParams" @getData="getData" :dataList="dataList"></router-view>

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
            num: this.$route.query.num || 1,
            dataList: '',
            hasData: false,
            totalPage: 100,
            currentPage: parseInt(this.$route.query.num) || 1
        }
    },
    components: {
        Header,
        Footer,
        Pagination
    },
    methods: {
        getUrlParams(){
            this.category = this.$route.query.category,
            this.type = this.$route.query.type || 1,
            this.num = this.$route.query.num || 1
            console.log(this.category, this.type, this.num)
        },
        getData(category = this.category, type = this.type, num = this.num){
            let _this = this,
                DATALIST_URL = "//meibanglai.com/data/dataList.do"
            this.hasData = true
            this.$http.get(DATALIST_URL, {
                params:{
                    "category":category,
                    "type":type,
                    "num":num
                }
            })
            .then(function(response) {
                console.log(response);
                _this.dataList = response.data.data
                console.log(_this.dataList);
            })
            .catch(function(error) {
                console.log(error);
            })
        },
        // pagination的回调函数，参数cPage是跳转后的页码
        paginationCallback(cPage){
            history.pushState(null, null, "?category=" + this.category + "&type=" + this.type + "&num=" + cPage)
            history.pushState(null, null, document.URL)
            
            this.currentPage = cPage
            // this.getUrlParams()
            this.getData(this.category, this.type, cPage)
        }
    },
    created: function(){
        window.addEventListener('popstate', function () {
            history.pushState(null, null, document.URL);
        })
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
