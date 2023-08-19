<template>
  <div class="bg-gray-800 text-white text-opacity-70 font-sans ">
    <ScrollSidebar :current-section="currentSection" />
    <ScrollSegments @section-changed="sectionChanged" />
  </div>
</template>

<script setup>


const currentSection = ref(0)

const sectionChanged = (index) => {
  currentSection.value = index
}

</script>
