import axios from 'axios';

class apiClient {
    constructor() {
        this.devUrl = "http://127.0.0.1:8000/";
        this.prodUrl = "https://example.com/";

        this.axios = axios.create({
            baseURL: this.prodUrl,
            timeout: 5000,
            headers: {
                'X-Requested-Width': 'XMLHttpRequest',
            },
            withCredentials: false,     // todo: toggle if u need/not safe mode (safe mode not working on localhost)
        });
    }
    login(log, pas, cb = ()=>{}, cb2 = ()=>{}){
        this.axios.get('sanctum/csrf-cookie')
            .then(res => {
                this.axios.post('api/login', {email: log, password: pas})
                    .then(res =>{
                        console.log(res);
                        cb(res.data.user);
                        cb2(res.data.token);
                    })
            });
    }
    registration(log, pas){
        this.axios.get('sanctum/csrf-cookie')
            .then(res => {
                this.axios.post('api/register',
                    {name: 'HR0N', email: log, password: pas, password_confirmation: pas})
                    .then(res =>{
                        console.log(res);
                    })
            });
    }
    with_token(token){
        this.axios.get('sanctum/csrf-cookie')
            .then(res => {
                this.axios.get('api/get'
                    , {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer '+token
                        },})
                    .then(res =>{
                        console.log(res);
                    })
            });
    }

}
export default apiClient;