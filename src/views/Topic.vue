<template>
<div class="topic">
    <div class="left">
        <div class="title">{{topic.title}}</div>
        <div class="info">
            作者
            <router-link :to="{path: '/user/' + topic.loginname}">
                {{ topic.loginname }}
            </router-link>
            &nbsp;•&nbsp;
            <span>{{topic.visit_count}}次浏览&nbsp;•&nbsp;</span>
            <span>
                来自:
                {{ tab[topic.tab].name }}
            </span>
        </div>
        <Divider />
        <div class="content" v-html="topic.content" />
        <Reply :data="topic.replies" />
    </div>
            <div class="right">
            <ProfilePanel :loginname='topic.loginname' />
            <OtherTopic />
            <RecentReply />
        </div>
</div>
</template>

<script>
import {
    getTopicById,
    getTopics
} from '@/utilis/api';
import OtherTopic from '@/components/OtherTopic'
import ProfilePanel from '@/components/ProfilePanel';
import Divider from '@/components/Divider'
import RecentReply from '@/components/RecentReply'
import Reply from '@/components/Reply'
import tab from '@/utilis/tab'
export default {
    name: 'Topic',
    components: {
        OtherTopic,
        ProfilePanel,
        Divider,
        RecentReply,
        Reply
    },
    data() {
        return {
            topic: {},
            tab
        };
    },
    methods: {
        fetchData(id) {
            getTopicById(id).then(res => {
                this.topic = {
                    ...res.data,
                    ...res.data.author
                }
            })
        }
    },
    created() {
        this.fetchData(this.$route.params.id);
        this.tab = tab
    },
    beforeRouteUpdate(to, from, next) {
        this.fetchData(to.params.id);
        next()
    }
}
</script>

<style lang="scss" scoped>
$grey-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);

.topic {
    display: flex;
    margin-bottom: 100px;

    .title {
        color: black;
        font-weight: bold;
        font-size: 25px;
        margin-bottom: 8px;
    }

    .content {
        color: #333;
        line-height: 1.6;
        margin-bottom: 50px;

        img {
            width: 100%;
        }
    }

    .left {
        width: 72%;
        float: left;
        box-shadow: $grey-shadow;
        padding: 20px;

        .info {
            display: flex;
            align-items: center;
            color: #838383;
            font-size: 12px;
        }
    }

    .right {
        float: right;
        width: 25%;
        height: 100%;
        margin-left: 2%;
    }
}
</style>
