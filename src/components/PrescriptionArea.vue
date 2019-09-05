<template>
  <div id="PrescrtionArea">
    <div>
      <label for="name">药方名</label>
      <input type="text" id="name" v-model="temp_script.name" />
      <label for="makeup">组成成分</label>
      <input type="text" id="makeup" v-model="temp_makeup.composition" />
      <span>X</span>
      <input type="text" v-model="temp_makeup.weight" @keyup.enter="addmakeup"/>
      <button @click="addmakeup">确定</button>
      <label for="usage">用法</label>
      <input type="text" id="usage" v-model="temp_script.usage"/>
      <label for="description">功效及其他</label>
      <input type="text" id="description" v-model="temp_script.description" @keyup.enter="savescript"/>
      <button @click="savescript">保存</button>
    </div>
    <preview :temp_script="temp_script"></preview>
  </div>
</template>

<script>
import preview from './Preview'

export default {
  name: "prescrtionArea",
  components: {
    preview
  },
  data() {
    return {
      temp_makeup: {
        composition: "",
        weight: ""
      },
      temp_script: {
        name: "",
        makeups: [],
        usage: "",
        description: ""
      }
    };
  },
  methods: {
    initMakeup: function() {
      this.temp_makeup = {
        composition: "",
        weight: ""
      }
    },
    initScript: function() {
      this.temp_script = {
        name: "",
        makeups: [],
        usage: "",
        description: ""
      }
    },
    addmakeup: function() {
      this.temp_script.makeups.push(this.temp_makeup)
      console.log(this.temp_makeup)
      this.initMakeup()
    },
    savescript: function() {
      this.$EventBus.$emit("savescript", this.temp_script)
      this.initScript()
    }
  }
};
</script>
