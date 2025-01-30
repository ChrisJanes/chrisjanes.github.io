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
  Title,
  CategoryScale
} from 'chart.js'

import { Line } from 'vue-chartjs'

export interface GraphData {
  label: string
  backgroundColor: string
  data: number[]
  options: object
  display?: string
  color?: string
  faded?: boolean
  clicks?: number | false
}

export interface GraphItem {
  name: string
  labels: string[]
  datasets: GraphData[]
}

const props = withDefaults(
  defineProps<{
    id: string
    data: GraphItem
    options: object
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
  Title
)

const { isDark } = useDarkMode()
const { $clicks, $scale } = useSlideContext()

const backgroundColor = computed(() => props.backgroundColor || (isDark.value ? '#050505' : '#ffff'))
const luminance = computed(() => isDark.value ? 0.7 : 0.6)

function start() {  
  
}

onMounted(() => {
  start()
})

</script>

<template>
  <div class="mx-auto size-1/2 object-center">
    <Line :data="data" :options="options"/>
  </div>
</template>

<style>

</style>