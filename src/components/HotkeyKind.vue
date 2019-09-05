<template>
  <div class="hotkeykind">
    <h3>{{kind.name}}</h3>
    <button v-if="del_kind_flag" @click="deletekind">删除</button>
    <hr />
    <div id="editarea">
      <input type="text" v-model="temp_hotkey" @keyup.enter="addHotkey" />
      <button @click="addHotkey">增加热键</button>
      <button @click="del_flag = !del_flag">管理</button>
    </div>
    <Hotkey
      v-for="(hotkey, index) in kind.hotkeys"
      :key="index"
      :index="index"
      :hotkey="hotkey"
      :del_flag="del_flag"
    ></Hotkey>
  </div>
</template>

<script>
import Hotkey from "./Hotkey";

export default {
  name: "hotkeyKind",
  data() {
    return {
      temp_hotkey: "",
      del_flag: false
    };
  },
  props: {
    kind: Object, // 即父组件传进来的kind容器
    index: Number,
    del_kind_flag: Boolean
  },
  components: {
    Hotkey: Hotkey
  },
  methods: {
    addHotkey: function() {
      this.kind.hotkeys.push(this.temp_hotkey);
      this.temp_hotkey = "";
    },
    deletehotkey: function(index) {
      this.kind.hotkeys.splice(index, 1);
    },
    deletekind: function() {
      this.$EventBus.$emit("deletekind", this.index);
    }
  },
  created: function() {
    this.$EventBus.$on("delete-hotkey", this.deletehotkey);
  },
  beforeDestroy: function() {
    this.$EventBus.$off("delete-hotkey", this.deletehotkey);
  }
};
</script>
