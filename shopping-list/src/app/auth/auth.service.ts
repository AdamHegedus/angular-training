import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface AuthResponseData {
    token: string;
    email: string;
    expiresIn: string;
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private http: HttpClient) {

    }

    signUp(email: string, password: string) {
        return this.http.post<AuthResponseData>('http://localhost:8080/auth', {
            email,
            password
        });
    }
}