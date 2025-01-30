<script setup lang="ts">
import { onSlideEnter, useDarkMode, useSlideContext } from '@slidev/client'

import { onClickOutside } from '@vueuse/core'

import { computed, onMounted, ref, watchEffect, useTemplateRef } from 'vue'

import chroma from 'chroma-js'

import {
  Chart as ChartJS,
  LineController,
  LogarithmicScale,
  LinearScale,
  PointElement,
  LineElement,
  CategoryScale,
	Tooltip
} from 'chart.js'

import { Line } from 'vue-chartjs'


const props = withDefaults(
  defineProps<{
    id: string
    clicks?: number | false
  }>(),
  {
    clicks: false
  },
)

ChartJS.register(
  LineController,
  CategoryScale,
  LogarithmicScale,
  LinearScale,
  PointElement,
  LineElement,
	Tooltip
)

const { isDark } = useDarkMode()
const { $clicks } = useSlideContext()

const options = {
	responsive: true,
	devicePixelRatio: 2,
	scales: {
		y: {
			min: 0,
			max: 35,
			beginAtZero: true,
		}
	}
};

const nValues = Array.from(Array(5).keys()).map(i => i + 1); // n from 1 to 20
const constantData = nValues.map(() => 1);
const logarithmicData = nValues.map(n => Math.log2(n));
const linearData = nValues.map(n => n);
const quadraticData = nValues.map(n => n * n);
const exponentialData = nValues.map(n => Math.pow(2, n));

interface Dataset {
	label: string
	data: number[]
	borderColor: string
	tension: number
	clicks: number | false
}

const constantDataSet: Dataset = {
		label: 'O(1)',
		data: constantData,
		borderColor: 'red',
		tension: 0.4,
		clicks: 1
	};

const logarithmicDataSet: Dataset = {
		label: 'O(log n)',
		data: logarithmicData,
		borderColor: 'blue',
		tension: 0.4,
		clicks: 2
	};

const linearDataSet: Dataset = {
		label: 'O(n)',
		data: linearData,
		borderColor: 'green',
		tension: 0.4,
		clicks: 3
	};

const quadraticDataSet: Dataset = {
		label: 'O(n^2)',
		data: quadraticData,
		borderColor: 'purple',
		tension: 0.4,
		clicks: 4
	};
const exponentialDataSet: Dataset = {
		label: 'O(2^n)',
		data: exponentialData,
		borderColor: 'yellow',
		tension: 0.4,
		clicks: 5
	};

const data = {
	labels: nValues,
	datasets: [constantDataSet, logarithmicDataSet, linearDataSet, quadraticDataSet, exponentialDataSet]
};

</script>

<template>
  <div class="mx-auto flex justify-center items-center">
    <Line :data="data" :options="options"/>
  </div>
</template>

<style>

</style>