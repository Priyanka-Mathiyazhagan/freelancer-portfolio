import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface ContactRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Injectable({
  providedIn: 'root',
})

export class Contact {
   private apiUrl = 'http://192.168.1.13:8080/contact';

  constructor(private http: HttpClient) {}

  sendMessage(data: ContactRequest): Observable<any> {

  const headers = {
    'Content-Type': 'application/json'
  };

  return this.http.post(
    this.apiUrl,
    data,
    { headers }
  );
}
}
