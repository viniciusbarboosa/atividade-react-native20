import React , {useState, createContext,ReactNode} from 'react';

import {api} from '../services/api'

type AuthContextData = {
    user:UserProps;
    isAuthenticated:boolean;
    signIn:(credentials:SignInProps) => Promise<void>;
}

type UserProps = {
    id:String;
    name:String;
    email:String;
    token:String;
}

type AuthProviderProps = {
    children:ReactNode;
}

type SignInProps = {
    email:String;
    password:String;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({children}:AuthProviderProps){
    const [user,setUser] = useState<UserProps>({
        id:'',
        name:'',
        email:'',
        token:''
    })

    const isAuthenticated = !!user.name;

    async function signIn({email,password}:SignInProps){
        console.log(email)
        console.log(password)
    }

    return(
        <AuthContext.Provider value={{user,isAuthenticated,signIn}}>
            {children}
        </AuthContext.Provider>
    )
}