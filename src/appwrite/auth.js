import config from '../config/config.js'
import { Client, Account ,ID }  from 'appwrite';

export class AuthService {
    client = new Client();
    account;

    cosnstructor(){
        this.client
        .setEndpoint(config.appwriteUrl)
        .setProject(config.appwriteProjectId)

        this.account = new this.login({email,password});
    }

    async createAccount({email,password,name}){
        try{
           const userAccount =  await this.account.create(ID.unique(),email,password,name)
           if(userAccount){
              //call another method
                return userAccount;
           }else{
              return userAccount;
           }

        }catch(error){
            throw error;
        }
    }

    async login({email,password}){
        try {
            return await this.account.createEmailSession(email,password);

    
        } catch (error) {
            throw error
        }

    }

    async getCurrentUser() {
        try {
            await this.account.get();
            
        } catch (error) {
            throw error;
        }

        return null;
    }

    async logout(){
        try {
            await this.account.deleteSessions();
            
        } catch (error) {
            throw error;
            
        }
    }
}


const AuthService = new AuthService();

export default AuthService




