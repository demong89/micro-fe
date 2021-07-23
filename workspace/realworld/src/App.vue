<template>
  <div id="app">
    <Parcel :config="parcelConfig" :mountParcel="mountParcel" />
    <h1>{{ name }}</h1>
    <button @click="handleClick">{{ name }}</button>
    <router-link to="/foo">Go to Foo</router-link>
    <router-link to="/bar">Go to Bar</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import Parcel from "single-spa-vue/dist/esm/parcel";
import { mountRootParcel } from "single-spa";

export default {
  name: "App",
  props: ["name"],
  components: {
    Parcel,
  },
  data() {
    return {
      parcelConfig: window.System.import("@study/parcel"),
      mountParcel: mountRootParcel,
    };
  },
  async mounted() {
    let toolsModule = await window.System.import("@study/tools");
    toolsModule.sharedSubject.subscribe(console.log);
  },
  methods: {
    async handleClick() {
      let toolsModule = await window.System.import("@study/tools");
      toolsModule.sayHello("realworld");
    },
  },
};
</script>
