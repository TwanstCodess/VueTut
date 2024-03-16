<!-- <script setup>
import { onMounted, ref } from "vue";

const randomuser = ref(null);

async function GetDataUser() {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/users");
    const data = await response.json();
    randomuser.value = data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

onMounted(async () => {
  await GetDataUser();
});
</script> -->
<template>
  <div
    data-aos="fade-up"
    class="flex flex-col items-center justify-center gap-y-3"
  >
    <select name="lang" v-model="lang">
      <option value="en">English</option>
      <option value="ku">Kurdish</option>
    </select>
    <p>{{ translate("hi") }}</p>
    <p>{{ translate("name") }}</p>
  </div>
</template>

<script>
import { Translation } from "vue-i18n";
import en from "../lang/en.js";
import ku from "../lang/ku.js";
var x = en;
export default {
  mixins: [x, ku],
  data() {
    return {
      lang: "en",
    };
  },
  methods: {
    translate(props) {
      return this[this.lang][props];
    },
  },
};
var eng = en;
</script>
