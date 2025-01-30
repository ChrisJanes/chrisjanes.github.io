<script setup lang="ts">

</script>

<style>
.three-column-wrapper {
  display:grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: 1fr;
  gap: 20px;
}

.left-column {
grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
}

.mid-column {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
}

.right-column {
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 2;
}
</style>

<template>
<div class="slidev-layout default">

<slot/>

<div class="three-column-wrapper">
	<div class="left-column">
		<slot name="left"/>
	</div>
	<div class="mid-column">
		<slot name="middle"/>
	</div>
	<div class="right-column">
		<slot name="right"/>
	</div>
</div>
<div class="container mx-auto">
	<slot name="bottom"/>
</div>
</div>
</template>