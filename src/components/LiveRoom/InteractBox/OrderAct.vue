<template>
  <div class="order_act">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="主播才艺" name="first">
        <ul class="act">
          <li>
            <p>至少还有你</p>
            <div class="buy">
              <span>1000星钻</span>
              <button class="db">点播</button>
            </div>
          </li>
          <li>
            <p>至少还有你</p>
            <div class="buy">
              <span>1000星钻</span>
              <button class="db">点播</button>
            </div>
          </li>
          <li>
            <p>至少还有你</p>
            <div class="buy">
              <span>1000星钻</span>
              <button class="db">点播</button>
            </div>
          </li>
          <li>
            <p>至少还有你</p>
            <div class="buy">
              <span>1000星钻</span>
              <button class="db">点播</button>
            </div>
          </li>
          <li>
            <p>至少还有你</p>
            <div class="buy">
              <span>1000星钻</span>
              <button class="db">点播</button>
            </div>
          </li>
        </ul>
        <div class="optional">
          <div class="optional_name">
            <span>自选才艺:</span>
            <input type="text" placeholder="请填写才艺名" />
          </div>
          <div class="optional_money">
            <span>才艺价目:</span>
            <select name id>
              <option value="100">100星钻</option>
              <option value="200">100星钻</option>
              <option value="300">100星钻</option>
              <option value="100">100星钻</option>
            </select>
          </div>
          <div class="confirm_db">点播</div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="已点才艺" name="second">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="name" label="才艺名称"></el-table-column>
          <el-table-column prop="money" label="价格"></el-table-column>
          <el-table-column prop="fans" label="粉丝"></el-table-column>
          <el-table-column prop="status" label="状态"></el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "OrderAct",
  data() {
    return {
      activeName: "first",
      tableData: [
        {
          name: "跑车",
          money: 3,
          fans: "sdjfhskj",
          status: "12:33"
        },
        {
          name: "跑车",
          money: 3,
          fans: "sdjfhskj",
          status: "12:33"
        },
        {
          name: "跑车",
          money: 3,
          fans: "sdjfhskj",
          status: "12:33"
        },
        {
          name: "跑车",
          money: 3,
          fans: "sdjfhskj",
          status: "12:33"
        },
        {
          name: "跑车",
          money: 3,
          fans: "sdjfhskj",
          status: "12:33"
        }
      ]
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>
<style scoped lang="less">
.order_act {
  height: 755px;
  width: 100%;
  z-index: 100;
  /deep/.el-tabs__header {
    padding-left: 22px;
    padding-right: 22px;
  }
  .act {
    padding: 0 22px;
    height: 700px;
    overflow: auto;
    li {
      height: 45px;
      line-height: 45px;
      border-bottom: 1px solid #eee;
      p {
        float: left;
      }
      .buy {
        float: right;
        button {
          width: 50px;
          height: 22px;
          font-size: 12px;
          border-radius: 6px;
          border: solid 1px #707070;
          margin-left: 12px;
          background-color: #fff;
          &:focus,
          &:hover {
            outline: none;
            background-image: linear-gradient(282deg, #cc66cc 0%, #ffcccc 100%);
            color: white;
            border: none;
          }
        }
      }
    }
  }
  .optional {
    height: 87px;
    line-height: 87px;
    padding-left: 22px;
    width: 100%;
    position: absolute;
    bottom: 0;
    background-color: #eee;
    .confirm_db {
      width: 74px;
      height: 36px;
      background-image: linear-gradient(180deg, #cc66cc 0%, #ffcccc 100%);
      border-radius: 18px;
      color: white;
      line-height: 36px;
      text-align: center;
      display: inline-block;
      margin-left: 12px;
    }
    .optional_name,
    .optional_money {
      display: inline-block;
      span {
        color: #ff3399;
        font-size: 12px;
      }
      input {
        width: 141px;
        height: 32px;
        background-color: #ffffff;
        border-radius: 16px;
        border: 1px solid #ccc;
        &:focus{
          outline: none;
        }
      }
      select{
        width: 101px;
        height: 32px;
        background-color: #ffffff;
        border-radius: 16px;
        border: 1px solid #ccc;
        &:focus{
          outline: none;
        }
      }
    }
    .optional_money {
    }
  }
  /deep/.cell {
    text-align: center;
  }
  /deep/.el-tabs__item.is-active {
    color: #ff3399;
  }
  /deep/.el-tabs__item:hover {
    color: #ff3399;
  }
  /deep/.el-tabs__active-bar {
    border-bottom: 2px solid #ff3399;
  }
}
</style>