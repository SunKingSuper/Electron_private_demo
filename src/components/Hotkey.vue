<template>
  <div class="Hotkey">
    <button @click="fill">{{hotkey}}</button>
    <button v-if="del_flag" @click="deleteHotkey">删除</button>
  </div>
</template>

<script>

export default {
  name: 'Hotkey',
  props: {
    hotkey: String,
    index: Number,
    del_flag: Boolean
  },
  methods: {
    // 用hotkey对应填充位置
    fill: function () {
      event.$emit('fill', this.hotkey)
      console.log(this.hotkey)
    },
    deleteHotkey: function () {
      this.$EventBus.$emit('delete-hotkey', this.index)
      console.log(this.hotkey + ' delete')
    }
  }
}
</script>
