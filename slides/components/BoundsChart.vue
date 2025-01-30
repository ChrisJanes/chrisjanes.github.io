<script setup lang="ts">
import { onSlideEnter, useDarkMode, useSlideContext } from '@slidev/client'

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
  Legend,
  Filler
} from 'chart.js'

import { Line } from 'vue-chartjs'


const props = withDefaults(
  defineProps<{
    id: string
    clicks?: number | false
    backgroundColor?: string
  }>(),
  {
    focus: false,
    clicks: false,
    focusScale: 1.5,
  },
)

ChartJS.register(
  LineController,
  CategoryScale,
  LogarithmicScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
  Filler
)

const { isDark } = useDarkMode()
const { $clicks, $scale } = useSlideContext()

const backgroundColor = computed(() => props.backgroundColor || (isDark.value ? '#050505' : '#ffff'))
const luminance = computed(() => isDark.value ? 0.7 : 0.6)

const options = {
	responsive: true,
	devicePixelRatio: 2,
	scales: {
		x: {
			title: {
				display: true,
				text: 'Input Size (n)'
			},
		},
		y: {
			type: 'logarithmic',
			title: {
				display: true,
				text: 'Resources (Time/Space)'
			},
			ticks: {
				display: false
			},
			beginAtZero: false,
			grid: { 
				display: false
			}
		}
	}
};

const nValues = Array.from(Array(10).keys()).map(i => i + 1); // n from 1 to 20

const fn = nValues.map(n => ((2 * (n*n)) + n));
const C = 3;
const C2 = 0.5;
const gn = nValues.map(n => C * (n*n));
const gnc2 = nValues.map(n => C2 * (n*n));

const data = {
	labels: nValues,
	datasets: [ {
		label: 'upper bound',
		data: gn,
		borderColor: 'red',
		tension: 0.4,
		fill: '+2'
	},{
		label: 'f(n)',
		data: fn,
		borderColor: 'blue',
      	tension: 0.4,
		fill: false
	}, {
		label: 'lower bound',
		data: gnc2,
		borderColor: 'green',
		tension: 0.4,
		fill: false
	}]
};

onMounted(() => {
	
})

</script>

<template>
  <div class="mx-auto flex justify-center items-center">
    <Line :data="data" :options="options"/>
  </div>
</template>

<style>

</style>