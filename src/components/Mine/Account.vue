<template>
  <div class="account">
    <div class="title_">
      <h4>账户提现</h4>
      <button class="add_account" @click="dialogFormVisible = true">添加账户</button>
    </div>
    <div class="myAccount">
      <p>我的提现账户</p>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="type" label="类型"></el-table-column>
        <el-table-column prop="account" label="账号"></el-table-column>
        <el-table-column prop="address" label="所属行"></el-table-column>
        <el-table-column prop="name" label="姓名"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog title="添加提现账户" :visible.sync="dialogFormVisible">
      <div class="popup_content">
        <div class="choose_">
          <label for="type">账户类型：</label>
          <select v-model="ProductActive" @change="changeProduct($event)">
            <option v-for="(item,index) in productList" :key="index" :value="item.id">{{item.title}}</option>
          </select>
        </div>
        <div class="pop_input" v-show="ProductActive === '1'">
          <input type="text" placeholder="请输入支付宝账号" />
          <br />
          <input type="text" placeholder="请输入支付宝账号姓名" />
        </div>
        <div class="pop_input" v-show="ProductActive === '2'">
          <input type="text" placeholder="请输入微信账号" />
        </div>
        <div class="pop_input" v-show="ProductActive === '3'">
          <input type="text" placeholder="请输入银行名称" />
          <br />
          <input type="text" placeholder="请输入银行卡卡号" />
          <br />
          <input type="text" placeholder="请输入持卡人姓名" />
        </div>
      </div>
      <div slot="footer" class="dialog-footer" style="textAlign:center">
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "Account",
  data() {
    return {
      tableData: [
        {
          type: "支付宝",
          account: "23423453",
          address: "南京银行",
          name: "王小虎"
        },
        {
          type: "支付宝",
          account: "23423453",
          address: "南京银行",
          name: "王小虎"
        },
        {
          type: "支付宝",
          account: "23423453",
          address: "南京银行",
          name: "王小虎"
        },
        {
          type: "支付宝",
          account: "23423453",
          address: "南京银行",
          name: "王小虎"
        },
        {
          type: "支付宝",
          account: "23423453",
          address: "南京银行",
          name: "王小虎"
        }
      ],
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      dialogFormVisible: false,
      productList: [
        { id: 1, title: "支付宝" },
        { id: 2, title: "微信" },
        { id: 3, title: "银行卡" }
      ],
      ProductActive: "1"
    };
  },
  methods: {
    changeProduct(event) {
      this.ProductActive = event.target.value; //获取option对应的value值
      // console.log("你选中了", this.ProductActive);
    }
  }
};
</script>
<style scoped lang="less">
.account {
  .title_ {
    height: 62px;
    border-bottom: 1px solid #ccc;
    font-size: 20px;
    font-weight: 800;
    line-height: 62px;
    padding-left: 81px;
    margin-bottom: 22px;
    h4 {
      float: left;
    }
    .add_account {
      float: right;
      margin-right: 81px;
      width: 97px;
      height: 34px;
      background-image: linear-gradient(291deg, #cc66cc 0%, #ffcccc 100%);
      border-radius: 4px;
      color: white;
      margin-top: 14px;
      &:focus {
        outline: none;
      }
    }
  }
  .myAccount {
    margin-left: 81px;
    margin-right: 81px;
    p {
      font-size: 16px;
      line-height: 64px;
    }
    /deep/.cell {
      text-align: center;
    }
  }
  .pop_input {
    input {
      width: 271px;
      height: 36px;
      border-radius: 6px;
      border: solid 1px #999999;
      margin-bottom: 10px;
    }
  }
  .choose_ {
    margin-bottom: 12px;
    text-align: left;
    margin-left: 22px;
    select {
      width: 108px;
      height: 30px;
      border-radius: 6px;
      border: solid 1px #999999;
    }
  }
  /deep/.el-dialog {
    text-align: center;
    width: 346px;
    border-radius: 6px;
  }
  /deep/.el-dialog__header {
    width: 346px;
    height: 54px;
    background-image: linear-gradient(270deg, #d981cc 0%, #fcced2 100%);
    border-radius: 6px 6px 0px 0px;
  }
  /deep/.el-dialog__title {
    color: white;
  }
  /deep/.el-button--primary {
    width: 74px;
    height: 46px;
    background-image: linear-gradient(270deg, #d981cc 0%, #fcced2 100%);
    border-radius: 6px;
    border: none;
  }
}
</style>