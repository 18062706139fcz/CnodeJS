<template>
<div class="home">
    <el-tabs v-model="tab" @tab-click="tabChanged">
        <el-tab-pane label="全部" name="all">
            <Content :list="list" />
        </el-tab-pane>
        <el-tab-pane label="精华" name="good">
            <Content :list="list" />
        </el-tab-pane>
        <el-tab-pane label="分享" name="share">
            <Content :list="list" />
        </el-tab-pane>
        <el-tab-pane label="问答" name="ask">
            <Content :list="list" />
        </el-tab-pane>
        <el-tab-pane label="招聘" name="job">
            <Content :list="list" />
        </el-tab-pane>
    </el-tabs>
</div>
</template>

<script>
import Content from '@/components/Content';
import { getTopics } from '@/utilis/api';
// import { setSession, getSession } from '@/utils/util';
export default {
    data() {
        return {
            list: [],
            page: 1,
            limit: 20,
            tab: 'all',
            store: {},
        }
    },
    methods: {
        getTopics() {
            getTopics({
                page: this.page,
                limit: this.limit,
                tab: this.tab,
            }).then((res) => {
                this.list = res.data;
                this.limit = this.limit + 10;

                const store = this.store;
                store[this.tab] = {
                    limit: this.limit,
                    data: res.data,
                };
            });
        },
        scrollMethod() {
            const sumH = document.body.scrollHeight || document.documentElement.scrollHeight;
            // 
            const sumW = document.body.scrollTop || document.documentElement.scrollTop
            // 视觉高度
            const view = document.documentElement.clientHeight
            if(view + sumW >= sumH){
                this.getTopics()
            }
        },
        tabChanged() {
            const store = this.store;
            // window.sessionStorage.setItem('activeTab', this.tab);
            // 如果未得到值，那我们再获取一遍
            if(!store[this.tab]) {
                this.limit = 20;
                this.list = [];
                this.getTopics();
                return;
            }
            this.list = store[this.tab].data;
            this.limit = store[this.tab].limit;
        },
    },
    created() {
        // this.tab = window.sessionStorage.getItem('activeTab') ? window.sessionStorage.getItem('activeTab') : 'all';
        this.getTopics();
        window.addEventListener('scroll',this.scrollMethod);
    },
    destroyed() {
        window.removeEventListener('scroll', this.scrollMethod);
    }
    ,
    components: {
        Content
    }
}
</script>

<style lang="scss" scoped>
.home {
  margin: auto;
  width: 75%;
  padding: 20px 30px;
  box-sizing: border-box;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
</style>
