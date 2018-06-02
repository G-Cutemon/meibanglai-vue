<template>
    <div class="container">
		<div class="select-area text-c m-t-5">
			<div class="area">
				<select id="s_province" name="s_province" class="h-45 w-w100"></select>
				<select id="s_city" name="s_city" class="h-45 w-w100"></select>
				<select id="s_county" name="s_county" class="h-45 w-w100"></select>
				<input type="text" id="s_town" placeholder="乡/镇  如:玉溪镇" class="h-45 w-w100"/>
				<button class="btn btn-primary h-45 w-10 w-w100" id="search">搜索</button>
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