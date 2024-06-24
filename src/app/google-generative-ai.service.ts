import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoogleGenerativeAiService { private apiKey: string = 'AIzaSyCjB7ylHTSf9Mioik8VqAj0JHFoboZWF_M'; // Replace with your actual API key
  private apiUrl: string = 'https://example-api-endpoint.com'; // Replace with actual API endpoint

  constructor(private http: HttpClient) {}

  getGenerativeModel(model: string): Observable<any> {
    const url = `${this.apiUrl}/models/${model}`;
    return this.http.get(url, {
      headers: {
        'Authorization': `Bearer ${this.apiKey}`
      }
    });
  }
}
