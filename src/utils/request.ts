/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const handleResponse = (data: GlobalRequest.Response<any>) => {
    const { code, message } = data;
    return { code, message };
};

const handleError = (res: any) => {
    if (!res) {
        return;
    }
};

const instance = axios.create({
    baseURL: '', // TODO: config it after deploy
    timeout: 500000,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
    },
});

instance.interceptors.request.use(
    (config: any) => {
        if (typeof window !== 'undefined') {
            const xToken = localStorage.getItem('x-token');
            if (xToken) {
                config.headers = {
                    ...config.headers,
                    'x-token': xToken,
                };
            }
        }
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
);

instance.interceptors.response.use(
    (response: AxiosResponse) => {
        // const data: GlobalRequest.Response<any> = response.data;
        //
        // if (!response.config.headers.noTip) {
        //     handleResponse(data);
        // }

        return response;
    },
    (err) => {
        // 对响应错误做些什么
        handleError(err.response);
        return Promise.reject(err);
    }
);

function request<T>(config: AxiosRequestConfig) {
    return instance
        .request<GlobalRequest.Response<T>>(config)
        .then((res) => res.data)
        .catch((e) => {
            console.error(
                new Date(),
                'request error:',
                JSON.stringify(config),
                e.name,
                e.message
            );
            throw e;
        });
}

export default request;
