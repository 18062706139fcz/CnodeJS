<template>
  <div>
    <div class="topic" v-for="item in list" :key="item.id">
      <router-link :to="{ path: '/user/' + item.author.loginname }">
        <img
          :src="item.author.avatar_url | imgCheck"
          alt="人物头像"
          @error="imgErr(tem.author.avatar_url)"
        />
      </router-link>
      <span class="count">
        <em>{{ item.reply_count }}</em>/<em>{{ item.visit_count }}</em>
      </span>
      <el-tag :type="tab[item.tab] && tab[item.tab].type">
        {{ item.tab ? tab[item.tab] && tab[item.tab].name : "无分类" }}
      </el-tag>
      <router-link class="title" :to="{ path: '/topic/' + item.id }">
        {{ item.title }}
      </router-link>
    </div>
  </div>
</template>

<script>
import tab from '@/utilis/tab'
export default {
  name: "Topics",
  props: ["list"],
  data() {
    return {
      article: [],
      tab: []
    };
  },
  created() {
      this.tab = tab;
  },
  methods: {
    imgErr(url) {
      console.log(url);
    },
  },
  filters: {
    imgCheck(url) {
      return url.replace(/avatars[0-9]/, "avatars");
    },
  },
};
</script>

<style lang="scss" scoped>
.topic {
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 50px;
    border-radius: 50%;
    height: 50px;
  }
  span.count {
    width: 50px;
    text-align: center;
    em:first-child {
      font-size: 1.2em;
      color: purple;
    }
    em:last-child {
      color: grey;
    }
  }
  .title {
    width: 60%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 0;
  }
  span.time {
    width: 70px;
    text-align: right;
  }
}
</style>
