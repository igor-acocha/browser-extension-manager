import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Extension {
  logo: string;
  title: string;
  description: string;
  isActive: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ExtensionsService {
  constructor(private http: HttpClient) {}

  getExtensions(): Observable<Extension[]> {
    return this.http.get<Extension[]>('assets/extension.json');
  }
}
