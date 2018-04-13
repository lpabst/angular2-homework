import { Component } from '@angular/core';

@Component({
    selector: 'app-profile',
    template: `
    <div>
        <h3>Profile Information</h3>
        <p>Name: {{profileInfo.name | nameLabel: 'Name: '}}</p>
        <p>Age: {{profileInfo.age}}</p>
        <p>Hotness: {{profileInfo.hotness}}</p>
    </div>
    `
})

export class ProfileComponent{
    profileInfo = {
        name: 'lOREN', // Custom built nameLabel pipe transforms this value to a good casing
        age: 25,
        hotness: 10
    }
}