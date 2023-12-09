import axios from 'axios';
import { showToast } from 'vant';
let baseURL = '/api';
const service = axios.create({
	baseURL: baseURL, // api的base_url
	timeout: 10000, // 请求超时时间
	headers: {
		'Content-Type': 'application/json;charset=UTF-8',
	},
});
// 请求拦截器
service.interceptors.request.use(
	(config) => {
		const token = localStorage.getItem('token');
		if (token) {
			config.params = {
				token: token,
			};
		}
		return config;
	},
	(error) => Promise.reject(error)
);
// 响应拦截器
service.interceptors.response.use(
	(response) => {
		const res = response.data;
		if (res.code !== 200) {
			return Promise.reject(res.message || 'Error');
		} else {
			if (res.code === 200) {
				return res.result;
			} else {
				showToast(res.message);
			}
		}
	},
	(error) => Promise.reject(error)
);

export default service;
