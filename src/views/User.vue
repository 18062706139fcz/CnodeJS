<template>
  <div class="user">
      <ProfilePanel :loginname='loginname' />
      <OtherTopic :simple='false' />
      <RecentReply :simple='false' />
  </div>
</template>

<script>

import ProfilePanel from '@/components/ProfilePanel'
import OtherTopic from '@/components/OtherTopic'
import RecentReply from '@/components/RecentReply'

export default {
    name: 'User',
    components: {
        ProfilePanel,
        OtherTopic,
        RecentReply
    },
    data() {
        return {
            loginname: '',
        }
    },
    created() {
        this.loginname = this.$route.params.id;
    },
    beforeRouteUpdate(to, from, next){
        this.loginname = to.params.id;
        next();
    }
}
</script>

<style lang="scss" scoped>
.user {
  width: 75%;
  margin: auto;
}
</style>