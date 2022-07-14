<template>
<div class="header">
    <div class="info">
        <a href="/">
            <img :src='require("@/assets/image/cnodejs.svg")' alt="网站logo">
            <!-- <img src="https://www.baidu.com/link?url=l2PTpB92AuO2U9IBx758X0ydVyuaBU6LDFlUinSAxkTY7LfvvleX-108cr4dfAB7vz4pLALatVwSmc_ebL23kRV03dpewQ-fV9ADz3Io36CgpAEr6nB_dzBRTC_yJgoBINMxRJSYJkzTdM_2uMm-wq34NEPcYQgGDnQk1tAg4AHc1JssOLhAYc0Ty9KyRqoYJZCAYekfOF7G_00OVEqCQ0zgSjHr-2GOAVP1gtjAHlYUq1gxlZjBpP06iLyrUApCZQA013m9KDeHf1MYbwRAU1R9PQkYT3dJb6TfbuSCVLFMc7ih0LldWY2l7cEbB4J8OcxU66p-fBTyD_jeg7IAAGBnkiCu-Tn-VUW8U6cKbt2wjaE8OfGzUhwL9mvUR242z24rT6nZURpoA_Z4WEExcwlvEpMO-Yph2hwcAaIYLVyJ4dyLIA_QdFwbn7em2-NCnzHAtITkRCeqxQDUJUS5A_0H6UWko3t5RVARSHbtpzgfuB0PFCXDlHN6pgZ32s25cNjt_3C4O4wwrCFdn71UVey_tq_CtmUO1_EHJLzKa175A-lHzmSd4Ew1WONKfEW78a1CvHenkFeKA05T1ff1YSUjMsfgl3RM0XuzlJ9HtO9D9l2024OkoFjZx-ajrAN49MTgblVQcRaSqfo4kdll5_&wd=&eqid=e539b6ec0003619b0000000662ce9fb1" alt="网站logo"> -->
        </a>
        <span @click="dialogVisible = true">关于</span>
    </div>
    <el-dialog title="关于本项目" :visible.sync="dialogVisible">
        <div class="inside-dialog">
            <p>
                练习者：
                <!-- target:"_blank"在新标签页打开 -->
                <a href="https://rykerfeng.cn" target="_blank" rel="nofollow noopener noreferrer">
                    Ryker
                </a>
            </p>
            <p>
                项目源码：
                <el-icon type="star" class='el-icon-star-off' />
                <a href="https://github.com/shuiRong/VueCnodeJS" target="_blank" rel="nofollow noopener noreferrer">
                    VueCnodeJS
                </a>
                <el-icon type="star" class='el-icon-star-off' />
                &nbsp;欢迎Star~&nbsp;
                <el-icon type="star" class='el-icon-star-off' />
            </p>
            <div>
                <p>技术栈</p>
                <ul class="distance">
                    <li>Vue</li>
                    <li>Vue Router</li>
                    <li>ElementUI</li>
                    <li>Axios</li>
                </ul>
            </div>
        </div>
        <div slot="footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </div>
    </el-dialog>
</div>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            dialogVisible: false
        }
    }
}
</script>

<style lang="scss" scoped>
.header {
    width: 100%;
    height: 50px;
    background: #444;

    // 子结构里面
    >div.info {
        width: 1200px;
        height: 100%;
        margin: auto;

        a {
            width: 120px;
            height: 50px;
            display: block;
            float: left;

            img {
                padding: 10px;
                display: block;
                width: 100%;
            }
        }

        span {
            float: right;
            height: 50px;
            // color: white;
            color: #fff;
            cursor: pointer;
            font-size: 15px;
            font-weight: bold;
            line-height: 50px;
        }
    }
}
</style>

<style lang='scss'>
.header {
  .el-dialog__body {
    padding-top: 10px;
    padding-bottom: 0;
    .inside-dialog {
      p {
        margin: auto;
      }
      .el-icon-star-off::before {
        color: #eb2f96;
      }
    }
  }
  .distance {
      margin-left: 25px;
  }
  a {
      text-decoration: none;
  }
}
</style>