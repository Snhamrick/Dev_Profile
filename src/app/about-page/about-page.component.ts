import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent {

  constructor(
    private router: Router,
  ) {

  }


  public viewContact() {
    this.router.navigateByUrl('contact');
  }
}
