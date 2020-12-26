import axios from 'axios';
import NProgress from 'nprogress';
import { getToken } from '@/utils/auth';
  

axios.interceptors.request.use(config => {
	NProgress.start();
	const token = getToken(process.env.REACT_APP_TOKEN);
	config.headers = {'Authorization': token, ...config.headers};
	return config;
});

axios.interceptors.response.use(response => {
	NProgress.done(true);
	return response;
}, error => {
	NProgress.done(true);
	return Promise.reject(error);
});

