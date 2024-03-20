import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, SlickCarouselModule,]
})
export class AppComponent {
   
}
