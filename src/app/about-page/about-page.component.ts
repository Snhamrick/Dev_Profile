import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3 } from "@fortawesome/free-brands-svg-icons";
import { faSass } from "@fortawesome/free-brands-svg-icons";
import { faNodeJs } from "@fortawesome/free-brands-svg-icons";
import { faGitAlt } from "@fortawesome/free-brands-svg-icons";
import { faAws } from "@fortawesome/free-brands-svg-icons";
import { faBootstrap } from "@fortawesome/free-brands-svg-icons";
import { faDocker } from "@fortawesome/free-brands-svg-icons"
import { faAngular } from "@fortawesome/free-brands-svg-icons"
import { faJs } from "@fortawesome/free-brands-svg-icons"
import { faJava } from "@fortawesome/free-brands-svg-icons"
import { faPython } from "@fortawesome/free-brands-svg-icons"

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent {

  public githubIcon = faGithub;
  public htmlIcon = faHtml5;
  public cssIcon = faCss3;
  public sassIcon = faSass;
  public nodeIcon = faNodeJs;
  public gitIcon = faGitAlt;
  public awsIcon = faAws;
  public bootstrapIcon = faBootstrap;
  public dockerIcon = faDocker;
  public angularIcon = faAngular;
  public jsIcon = faJs;
  public javaIcon = faJava;
  public pythonIcon = faPython;


  constructor(
    private router: Router,
  ) {

  }


  public viewContact() {
    this.router.navigateByUrl('contact');
  }
}
