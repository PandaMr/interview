<template>
	<div class="box">
		<ul ref="ul">
			<li v-for="(item, index) in list" :key="index">{{item}}</li>
		</ul>
		<button @click="addItem">add</button>
		<slot name="title">child title</slot>
	</div>
</template>

<script>
export default {
	data(){
		return {
			list:['a', 'b' ,'c']
		}
	},
	methods: {
		addItem(){
			this.list.push(`${Date.now()}`);
			this.list.push(`${Date.now()}`);
			this.list.push(`${Date.now()}`);

			// vue为异步渲染 $nextTick 等待 DOM 节点渲染完才回调
			// 页面渲染时会将 data 的修改做整合，多次修改只会渲染一次 
			this.$nextTick(() => {
				let element = this.$refs.ul;
				console.log(element.childNodes.length);
			})
			
		}
	}
}
</script>

<style>

</style>