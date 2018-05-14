<template>
    <div  id="brand-list" class="list">
        <div class="sort">
            <ul class="clearfix">
                <li class="fl one">
                    <img src="<%:=LOGO_URL%><%:=data[i].brand_logo%>" />
                </li>

                <li class="fl two">
                    <p style="font-weight: bold;font-size: 1rem;">公司名：
                        <!-- <%:=data[i].campany_name%> -->
                    </p>
                    <p>参展产品：
                        <!-- <%:=data[i].product_name%> -->
                    </p>
                    <!--<p class="show_box1-context_product">产品介绍：
                                <%:=data[i].product%>
                            </p>-->
                    <p>品牌官网：
                        <!-- <%:=data[i].website%> -->
                    </p>
                </li>
                <li class="fl three">
                    <a href="#">联系方式</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    new Vue({
        el: '#brand-list',
        data: {

        },
        methods: {
            getData: function(){
                this.$http.get('//meibanglai.com/data/getInformationList.do', {
                    params:{
                        "category":category,
                        "type":type,
                        "num":num
                    }
                })
            }
        },
    })
</script>

<style>
</style>