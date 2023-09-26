import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SessionStorageService {
  public setItem(key: string, value: any): void {
    if (!(typeof value == 'string')) value = JSON.stringify(value);
    sessionStorage.setItem(key, value);
  }

  public getItem(key: string) {
    let value: string = sessionStorage.getItem(key);
    if (!value) value = null;
    try {
      value = JSON.parse(value);
    } catch (error) {}
    return value;
  }

  public removeItem(key: string) {
    sessionStorage.removeItem(key);
  }
}
