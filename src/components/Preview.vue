<template>
  <div id="preview">
    <p>预览：</p>
    <hr />
    <p>
      <span>药方名:</span>
      {{temp_script.name}}
    </p>
    <div>
      <span>组成成分:</span>
      <li>
        <ul v-for="(makeup, index) in temp_script.makeups" :key="index">
          <span>{{makeup.composition}}</span>......
          <span>{{makeup.weight}}</span>
        </ul>
      </li>
    </div>
    <p>
      <span>用法:</span>
      {{temp_script.usage}}
    </p>
    <p>
      <span>功效及其他:</span>
      {{temp_script.description}}
    </p>
  </div>
</template>

<script>
export default {
  name: "preview",
  props: {
    temp_script: Object
  }
};
</script>