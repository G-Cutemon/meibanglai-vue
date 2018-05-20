<template>
    <div id="school-list">
        <div class="list" v-for="(item, index) in dataList" :key="index">
			<div class="sort">
				<ul class="clearfix">
					<li class="fl one">
						<a :href="DETAILS_URL + '?d=' + item.id"><img :src='LOGO_URL + item.logo_url' :alt='item.school_name'></a>
					</li>
					<li class="fl two">
						<p class="f-rem-017">名称：
							<a href="DETAILS_URL + item.id" class="f-w">{{ item.school_name }}</a>
						</p>
						<p>学校性质：{{ item.school_type }}</p>
						<p>培训科目：{{ item.school_course }}</p>
						<p>所在地址：{{ item.school_address }}</p>
						<p>成立时间：{{ item.school_create_time }}</p>
					</li>
					<li class="fl three">
						<a href="DETAILS_URL + item.id" class="f-s13">
							查看详情
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
                LOGO_URL: '//meibanglai.com/image/school/',
                DETAILS_URL: '/view/data/school.html'
            }
        },
        props: ["dataList"],
        methods: {
            showData(){
                console.log(this.dataList)
            }
        },
        created: function(){
            this.$emit('getUrlParams')
            this.$emit('getData')
        },
    }
</script>

<style>
</style>