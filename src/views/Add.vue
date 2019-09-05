<template>
  <div class="Add">
    <HotkeyArea></HotkeyArea>
    <PrescriptionArea></PrescriptionArea>
  </div>
</template>

<script>
import HotkeyArea from '../components/HotkeyArea'
import PrescriptionArea from '../components/PrescriptionArea'

export default {
  name: 'add',
  components: {
    HotkeyArea,
    PrescriptionArea
  }
}
</script>

<style scoped>

</style>
