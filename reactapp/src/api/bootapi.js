const base_url = "http://localhost:9090";
const axios = require('axios').default;

// axois object
const axiosObject = axios.create({
        baseURL: base_url,
        //timeout: 1500,
});



// Add a request interceptor
axiosObject.interceptors.request.use(function (config) {
        // set token
        var token = localStorage.getItem('jwtToken');
        token = token.replace(/^"(.*)"$/, '$1'); 

        if (token) {
                config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
}, function (error) {
        return Promise.reject(error);
});

export default axiosObject;