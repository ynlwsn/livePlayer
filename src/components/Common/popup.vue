<template>
  <div class="popup">
      <el-dialog
        :visible.sync="centerDialogVisible"
         :modal-append-to-body="false"
        width="30%"
        center>
        <!-- <span>需要注意的是内容是默认不居中的</span>
        <span slot="footer" class="dialog-footer">
            <el-button @click="centerDialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
        </span> -->
        <h4>this is login</h4>
        </el-dialog>
  </div>
</template>

<script>
export default {
    name:'Popup',
    props:['centerDialogVisible']
}

</script>
<style scoped lang="less">
.popup{
    .v-modal{
        z-index:1000!important;
    }
    .el-dialog__headerbtn{
        left: 20px;
    }
}
</style>