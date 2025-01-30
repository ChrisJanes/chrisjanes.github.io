<script setup lang="ts">

</script>

<template>
<div class="slidev-layout default">

<slot/>

<div class="grid grid-rows-3 grid-cols-2 gap-4">
	
		<slot name="top"/>
		<slot name="middle"/>
		<slot name="bottom"/>
		
</div>
</div>
</template>