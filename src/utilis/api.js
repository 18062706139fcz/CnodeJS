import request from '@/utilis/request';

// get/ '/topics' data getTopics
export const getTopics = (data) => {
    return request({
        method: 'get',
        params: data,
        url: '/topics'
    })
}
// get  '/topic/id/' id getTopicById
export const getTopicById = (id) => {
    return request({
        method: 'get',
        url: `/topic/${id}`
    })
}

// getUserByName loginname '/user/loginname' 'get'
export const getUserByName = (loginname) => {
    return request ({
        method: 'get',
        url: `/user/${loginname}`
    })
}