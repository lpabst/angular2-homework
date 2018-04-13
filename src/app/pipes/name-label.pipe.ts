import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'nameLabel'
})

export class NameLabel implements PipeTransform{
    transform(value: String, prepend: String): String{
        return prepend + value.substring(0,1).toUpperCase() + value.substring(1).toLowerCase();
    }
}

/*
    Below I have copied the contents from profile.component.ts for ease of reference. On line 27 we are using our custom built pipe nameLabel,
    and we are passing it the string 'Name: ', which on line 8 we have called 'prepend'. We can use that variable prepend anywhere inside our 
    transform function. Lines 1-11 is how you set up a custom pipe. You also have to declare your pipe in app.module.ts so that it's available
    to your entire app, then you can use it anywhere you like, like we did on line 27: ... | nameLabel: 'Name: ' ...
*/

// import { Component } from '@angular/core';

// @Component({
//     selector: 'app-profile',
//     template: `
//     <div>
//         <h3>Profile Information</h3>
//         <p>Name: {{profileInfo.name | nameLabel: 'Name: '}}</p>
//         <p>Age: {{profileInfo.age}}</p>
//         <p>Hotness: {{profileInfo.hotness}}</p>
//     </div>
//     `
// })

// export class ProfileComponent{
//     profileInfo = {
//         name: 'lOREN', // Custom built nameLabel pipe transforms this value to a good casing
//         age: 25,
//         hotness: 10
//     }
// }
