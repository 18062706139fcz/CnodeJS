import axios from 'axios';
// 统一Loading | Message 的样式
import { Loading } from 'element-ui';
import { Message } from 'element-ui';

const error = () => {
    Message({
        type:'error',
        message: '出现错误！！！',
        duration: 5 * 1000,
    })
}

let loading;
const startLoading = () => {
    loading = Loading.service({
        lock: true,
        text: '正在加载中',
        background: 'rgba(0,0,0,0.7)'
    })
}
const endLoading = () => {
    loading.close();
}

// baseURL
const service = axios.create({
    // 不能写成等于
    baseURL: 'https://cnodejs.org/api/v1',
    timeout: 5000 // 超出时间限制
})

// 请求拦截器
service.interceptors.request.use(
    config => {
        startLoading();
        return config;
    },err => {
        endLoading();
        error();
        Promise.reject(err);
    }
)

// 响应拦截器
service.interceptors.response.use(
    response => {
        endLoading()
        // 这里已经封装好了
        return response.data;
    },
    err => {
        endLoading()
        error()
        return Promise.reject(error);
    }
)

export default service