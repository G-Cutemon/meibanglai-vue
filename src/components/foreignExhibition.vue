<template>
    <div id="foreignExhibition-list">
        <div class="content" v-for="(item, index) in dataList" :key="index">
			<div class="Exhibition_main clearfix">
                <ul class="list_a fl">
                    <li class="f-w f-rem-017">
                        <a :href="DETAILS_URL + '?d=' + item.id">
                            {{ item.meeting_name }}
                        </a>
                    </li>
                    <li>地址：
                        {{ item.meeting_adress }}
                    </li>
                    <li>举办：
                        {{ item.organizer }}
                    </li>
                    <li>
                        {{ item.meeting_time }}
                    </li>
                </ul>
                <ul class="list_c fr w-20 text-c">
                    <li>
                        <a :href="DETAILS_URL + '?d=' + item.id">
                            {{ item.meeting_area }}
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