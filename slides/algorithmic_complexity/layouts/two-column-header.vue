<script setup lang="ts">
const props = defineProps({

})
</script>

<template>
<div class="slidev-layout default">

<slot />

<div class="column-wrapper">
	<div class="left-column">
		<slot name="left"/>
	</div>
	<div class="right-column">
		<slot name="right"/>
	</div>
</div>

</div>
</template>