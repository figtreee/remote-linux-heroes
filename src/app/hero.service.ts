import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class HeroService {

    constructor(
        private messageService: MessageService,
        private http: HttpClient,
    ) {

    }

    getHeroes(): Observable<any> {
        // client side mock data
        //const heroes = of(HEROES);

        const apiURL = '/api/ListHero';
        const heroes = this.http.get<any>(apiURL);

        this.messageService.add('HeroService: fetched heroes');
        return heroes;
    }

    getHero(id: number): Observable<Hero> {
        // For now, assume that a hero with the specified `id` always exists.
        // Error handling will be added in the next step of the tutorial.
        const hero = HEROES.find(h => h.id === id)!;
        this.messageService.add(`HeroService: fetched hero id=${id}`);
        return of(hero);
    }
}