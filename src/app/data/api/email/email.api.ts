import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '@app/core/models/contact.model';
import { API_URLS } from '@app/data/constants/api.constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmailApi {
  constructor(private _http: HttpClient) {}

  public sendContactEmail(contact: Contact): Observable<void> {
    return this._http.post<void>(API_URLS.EMAILS.POST_CONTACT, contact);
  }
}
