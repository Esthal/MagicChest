import axios from "axios";

export default class PostService{

    static async userLogin(){
        const response = await axios.post('http://localhost:8080/users/login');
        return response;
    }
    static async userRegistration(login,email,password){
        return await axios.post('http://localhost:8080/users/reg',{login:login,email:email,password:password});
    }
}