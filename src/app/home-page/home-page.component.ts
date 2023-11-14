import { Component } from '@angular/core';
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

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

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
  public projectsExpanded = false;

  constructor() {

  }

  public expandProjects() {
    if (!this.projectsExpanded) {
      this.projectsExpanded = true;
    }
    else {
      this.projectsExpanded = false;
    }
  }

}


