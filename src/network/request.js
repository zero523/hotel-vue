import axios from 'axios'

export function request(config){
	const instance = axios.create({
		// baseURL: 'http://106.54.54.237:8000',
		timeout:5000
	})
	// 拦截器
	instance.interceptors.response.use(res => {
		return res.data
	},err => {
		console.log(err)
	})

	return instance(config);
}