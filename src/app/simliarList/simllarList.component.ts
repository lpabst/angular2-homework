import { Component } from '@angular/core';

@Component({
    selector: 'app-similarList',
    template: `
    <div>
        <h3>similar Matches</h3>
        <ul>
            <li *ngFor="let profile of profiles">
                <app-shortProfile [profile]="profile"></app-shortProfile>
            </li>
        </ul>
        
    </div>
    `
})

export class SimilarListComponent{
    profiles = [
        'Hot man',
        'Hot woman',
        'Hot dog'
    ]

    // axios or HTTP calls can go here to get data from the server
}