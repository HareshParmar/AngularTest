import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { UserModel } from "../model/userModel";


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class UserService {
    constructor(private http: HttpClient){

    }
    private BaseUrl = 'https://jsonplaceholder.typicode.com';

    getUsers():Observable<UserModel[]>{
        const url = `${this.BaseUrl}/users`;
        return this.http.get(url,httpOptions).pipe((res:any)=>{
            return res;
        })
    }
    getUser(id: number):Observable<UserModel>{
        const url = `${this.BaseUrl}/users/${id}`;
        return this.http.get(url,httpOptions).pipe((res:any)=>{
            return res;
        })
    }
}