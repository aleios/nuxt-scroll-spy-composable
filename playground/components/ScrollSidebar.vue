<template>
  <div class="flex flex-col gap-2 fixed top-10 left-2 text-xl select-none">
    <div
      v-scroll-spy-link
      v-scroll-spy-active="{class: currentColourStyle}"
      class="flex flex-col gap-2"
    >
      <a class="hover:text-red-800">Paragraph 1 </a>
      <a class="hover:text-red-800">Paragraph 2</a>
      <a class="hover:text-red-800">Paragraph 3</a>
      <a class="hover:text-red-800">Paragraph 4</a>
    </div>
    <div>Section Index: {{ currentSection }}</div>
    <div class="flex flex-col px-2 py-1">
      Color:
      <label
        v-for="(c, i) in colors"
        :key="`colour_${i}`"
        class="flex flex-row items-center cursor-pointer"
      >
        <input
          v-model="color"
          type="radio"
          name="colour"
          :value="c"
          class="mt-0.5 mr-1"
        >
        {{ c }}
      </label>
    </div>
  </div>
</template>
<script setup lang="ts">
import {ref} from "vue";

interface SidebarProps {
  currentSection: number
}

defineProps<SidebarProps>()

const { vScrollSpyLink, vScrollSpyActive } = useScrollSpy()

const colors = ['red', 'green', 'blue', 'purple']
const color = ref('red')

const currentColourStyle = computed(() => {
  switch(color.value) {
    case 'green':
      return 'text-green-400'
    case 'blue':
      return 'text-blue-400'
    case 'purple':
      return 'text-purple-400'
    default:
      return 'text-red-400'
  }
})
</script>
