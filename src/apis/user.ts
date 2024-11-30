import request from '@/utils/request';

const GOOGLE_AUTH_ADDRESS =
    'https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?response_type=code&client_id=544069305312-8mkfju7ch19mm4t36qkpaurmnb6i3j4l.apps.googleusercontent.com&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauth%2Fgoogle&scope=openid%20email%20profile&access_type=offline&service=lso&o2v=2&ddm=1&flowName=GeneralOAuthFlow';

interface LoginData {
    email: string;
    password: string;
}

export const login = (data: LoginData) => {
    return request({
        url: 'http://localhost:3000/api/auth/login',
        method: 'post',
        data,
    });
};

export const loginWithGoogle = () => {
    // return request({
    //     url: GOOGLE_AUTH_ADDRESS,
    //     method: 'get',
    // });

    window.location.href = GOOGLE_AUTH_ADDRESS;
};
