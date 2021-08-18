<template>
  <div class="orderItem" :class="{ done: isDone }">
    <div class="logo">
      <img :src="item.logo" alt="logo" />
    </div>
    <div class="content">
      <div class="status">
        <div class="type">{{ item.status.type }}</div>
        <div class="date">預計出貨：{{ item.date }}</div>
      </div>
      <div class="name">
        {{ item.name }}
      </div>
    </div>
    <div class="goDetail">
      <i class="fas fa-chevron-right"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderItem",
  props: {
    item: {
      type: Object,
      default: () => {
        return {
          name: "",
          logo: "",
          status: {
            code: 0,
            type: "",
          },
          date: "",
        };
      },
    },
  },
  computed: {
    isDone: function() {
      const code = this.item.status.code
      return code === 3 || code === 4;
    },
  },
};
</script>

<style lang="scss" scoped>
.orderItem {
  padding: 12.5px 4.3%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: solid 1px #e5e5e5;
  & ~ & {
    border-top: none;
  }
  .logo {
    flex-shrink: 0;
    width: 60px;
    img {
      vertical-align: middle;
      width: 100%;
    }
  }
  .content {
    flex-grow: 1;
    padding-left: 3%;
    padding-right: 10px;
    line-height: 1.5;
    .status {
      display: flex;
      justify-content: space-between;
      white-space: nowrap;
      .type {
        color: #13a053;
        font-weight: bold;
        padding-right: 12px;
      }
      .date {
        color: #5f5f5f;
      }
    }
    .name {
      font-size: 14px;
      color: #727272;
      padding-right: 8px;
      min-height: 42px;
    }
  }
  .goDetail {
    color: #909090;
  }

  &.done {
    .logo {
      filter: grayscale(100%);
    }
    .content {
      .type {
        color: #393939;
      }
      .date {
        display: none;
      }
    }
  }
}
</style>
