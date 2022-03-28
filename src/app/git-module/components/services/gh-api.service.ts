import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GhRepos } from '../gh-users/users/models/ghRepos';
import { GhUser } from '../gh-users/users/models/ghUser';

@Injectable({
  providedIn: 'root'
})
export class GhApiService {
  baseUrl: string = 'https://api.github.com/users'


  constructor(
    private http: HttpClient
    ) { }

    findUser(username: string): Observable<GhUser>{

      return this.http.get<GhUser>(`${this.baseUrl}/${username}`)

    }

    findRepositoryName(username: string): Observable<GhRepos[]>{

      return this.http.get<GhRepos[]>(`${this.baseUrl}/${username}/repos`)

    }
}
