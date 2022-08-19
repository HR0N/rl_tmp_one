import axios from 'axios';

class ApiClient {
    constructor() {
        this.devUrl = "http://127.0.0.1:8000/";
        this.prodUrl = "https://temp1b.evilcode.space/";

        this.axios = axios.create({
            baseURL: this.prodUrl,
            timeout: 5000,
            headers: {
                'X-Requested-Width': 'XMLHttpRequest',
            },
            withCredentials: true,
        });
    }
    login(data){
        let {email, pass} = data;
        this.axios.get('sanctum/csrf-cookie')
            .then(res => {
                this.axios.post('api/login', {email: email, password: pass})
                    .then(res =>{
                        console.log(res);
                    })
            });
    }
    registration(data){
        let {name, email, pass, pass2} = data;
        this.axios.get('sanctum/csrf-cookie')
            .then(res => {
                this.axios.post('api/register',
                    {name: name, email: email, password: pass, password_confirmation: pass2})
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
export default ApiClient;