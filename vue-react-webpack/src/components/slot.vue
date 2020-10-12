<template>
  <div class="container">
	  <slot name="title"></slot> 
	  <slot></slot>
	  <slot name="title2"></slot>
	  
	  <!-- <slot :userData="user">{{user.last}}</slot> -->
  </div>
</template>

<script>
export default {
	data(){
		return {
			title: 'child title',
			user: {
				first: 'first',
				last: 'last'
			}
		}
	}
}
</script>

<style>

</style>