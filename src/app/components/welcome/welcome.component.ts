import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CommonsService } from 'src/app/services/commons.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(private translate: TranslateService, private commonsService: CommonsService, private router: Router) { }

  ngOnInit(): void {
    this.commonsService.setStateVisibilityNavigationBar(false);
  }

  navigateTo(routerTo): void {
    this.router.navigate(['/' + routerTo]);
  }



}
