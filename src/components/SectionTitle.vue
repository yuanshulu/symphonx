<template>
  <div class="SectionTitle">
    <div class="text">{{ text }}</div>
  </div>
</template>

<script>
export default {
  name: "SectionTitle",
  props: {
    text: String,
  },
};
</script>

<style lang="scss" scoped>
/* 009f49 434343 F5F5F5 */
.SectionTitle {
  padding: 10px 4.3%;
  background-color: #f5f5f5;
  .text {
    position: relative;
    padding-left: 15px;
    color: #434343;
    &::before {
      position: absolute;
      left: 0;
      top: 0;
      content: "";
      display: block;
      height: 22px;
      width: 5px;
      background-color: #009fa9;
    }
  }
}
</style>
