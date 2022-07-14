<template>
<div class="panel">
    <router-link class="user" :to="{path: '/user/' + user.loginname}">
        <img :src="user.avatar_url" alt="头像">
        <div>{{ user.loginname }}</div>
    </router-link>
    <div>积分:{{user.score}}</div>
    <div>
        Github:
        <a :href="'https://github.com/' + user.githubUsername">{{user.githubUsername}}</a>
    </div>
    <div>
      注册时间：
      {{
        $moment(date,'YYYY-MM-DD')
                        .startOf('day')
                        .fromNow()
      }}
    </div>
</div>
</template>
<script>
var moment = require('moment');
import {
    getUserByName
} from '@/utilis/api';
import eventProxy from '@/utilis/eventProxy'

export default {
    name: 'ProfilePanel',
    props: ['loginname'],
    data() {
        return {
            user: {},
            date: '',
        }
    },
    methods: {
        fetchData(loginname) {
            getUserByName(loginname).then(res => {
                this.user = res.data;
                eventProxy.trigger('user', res.data);
                const date = this.user.create_at;
                this.date = moment(date,'YYYY-MM-DD')
                        .startOf('day')
                        .fromNow()
            })
        },
    },
    created() {
        // 如果没有，那就别拿了
        if (!this.loginname) {
            return;
        }
        this.fetchData(this.loginname);      
    },
    watch: {
        loginname(loginname) {
            if (!loginname) {
                return;
            }
            this.fetchData(loginname)
        }

    }
}
</script>

<style lang="scss" scoped>
.panel {
    display: flex;
    flex-direction: column;
    color: black;
    padding: 20px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);

    >a {
        display: flex;
        align-items: center;

        img {
            width: 48px;
            height: 48px;
            border-radius: 5px;
            margin-right: 20px;
        }
    }

    .user {
        margin-bottom: 10px;
    }
}
</style>
