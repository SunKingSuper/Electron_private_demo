<template>
  <div id="hotkeyarea">
    <div id="editarea">
      <input type="text" v-model="temp_kind_name" @keyup.enter="addKind" />
      <button @click="addKind">增加类别</button>
      <button @click="del_kind_flag = !del_kind_flag">管理</button>
    </div>
    <div id="hotkeykind">
      <HotkeyKind
        v-for="(kind, index) in kinds"
        :key="index"
        :index="index"
        :kind="kind"
        :del_kind_flag="del_kind_flag"
      ></HotkeyKind>
    </div>
  </div>
</template>

<script>
import HotkeyKind from "./HotkeyKind";
import store from "../lib/store.js"

export default {
  name: "HotkeyArea",
  components: {
    HotkeyKind
  },
  data() {
    return {
      temp_kind_name: "",
      kinds: [],
      del_kind_flag: false
    };
  },
  methods: {
    addKind: function() {
      var kind = {
        name: this.temp_kind_name,
        hotkeys: []
      };
      this.kinds.push(kind);
      this.temp_kind_name = "";
    },
    deletekind: function(index) {
      this.kinds.splice(index, 1);
    }
  },
  created: function() {
    var kinds = store.get("kinds");
    if (typeof a == "object") {
      this.kinds = kinds;
    }
    this.$EventBus.$on("deletekind", this.deletekind);
  },
  beforeDestroy: function() {
    store.put("kinds", this.kinds);
    this.$EventBus.$off("deletekind", this.deletekind);
  }
};
</script>
