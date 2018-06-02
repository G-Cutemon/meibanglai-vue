<template>
    <div id="express-list" class="container">
		<div class="select-area text-c m-t-5">
			<div class="area">
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
	</div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>