import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  public setItem(key: string, value: any): void {
    if (!(typeof value == 'string')) value = JSON.stringify(value);
    localStorage.setItem(key, value);
  }

  public getItem(key: string) {
    let value: string = localStorage.getItem(key);
    if (!value) value = null;
    try {
      value = JSON.parse(value);
    } catch (error) {}
    return value;
  }

  public removeItem(key: string) {
    localStorage.removeItem(key);
  }
}
