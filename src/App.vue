<template>
  <div id="app">
    <SectionTitle text="進行中"/>
    <div class="orderList">
      <OrderItem
        v-for="order, index in processingOrderList"
        :key="'order' + index" 
        :item="order"
      />
    </div>
    <SectionTitle text="已完成"/>
    <div class="orderList">
      <OrderItem
        v-for="orderDone, index in doneOrderList"
        :key="'orderDone' + index"
        :item="orderDone"
      />
    </div>
  </div>
</template>

<script>
import SectionTitle from './components/SectionTitle.vue'
import OrderItem from './components/OrderItem.vue'


export default {
  name: 'App',
  components: {
    SectionTitle,
    OrderItem
  },
  methods: {
    getOrderList: function() {
      this.$store.dispatch('order/getOrderList')
      .then(data => {
        console.log(data)
      }).catch((e) => {
        console.log(e)
      })
    },
  },
  computed: {
    processingOrderList: function() {
      return this.$store.getters['order/processingOrderList']
    },
    doneOrderList: function() {
      return this.$store.getters['order/doneOrderList']
    },
  },
  created:function() {
    this.getOrderList()
  } 
}
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.orderList {
  background-color: #fff;
}
</style>
