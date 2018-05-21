<template>
    <div class="exhibition-list">
        <div class="content" v-for="(item, index) in dataList" :key="index">
			<div class="Exhibition_main clearfix">
				<ul class="fl ">
					<li class="f-rem-017 p-4 f-w">
						<a :href="DETAILS_URL + '?d=' + item.id">{{ item.meeting_name }}</a>
					</li>
					<li class="p-4">地址：{{ item.meeting_adress }}</li>
					<li class="p-4">举办：{{ item.organizer }}</li>
					<li class="p-4">{{ item.meeting_time }}</li>
				</ul>
				<ul class="list_c fr w-20 text-c">
					<li>
						<a :href="DETAILS_URL + '?d=' + item.id">{{ item.meeting_area }}</a>
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
                LOGO_URL: '//meibanglai.com/image/mbhbrand/',
                DETAILS_URL: '/view/data/foreignexhibition.html'
            }
        },
        props: ["dataList"],
        methods: {
            showData(){
                console.log(this.dataList)
            }
        },
        created: function(){
            if(!this.dataList){
                this.$emit('getData')
            }
        },
    }
</script>

<style>
</style>