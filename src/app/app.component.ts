import { CommonsService } from './services/commons.service';
import { AfterViewChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit,  AfterViewChecked{
  isVisibleNavigationBar: boolean;

  constructor(private commonsService: CommonsService, private translate: TranslateService, private cdRef: ChangeDetectorRef){
    this.translate.setDefaultLang(window.localStorage.getItem('language') || 'es');
    document.getElementsByTagName('html')[0].setAttribute('lang', window.localStorage.getItem('language') || 'es'); // Set HTML language
  }

  ngOnInit(): void {
    this.getNavigationBarVisibility();
  }

  getNavigationBarVisibility(): void{
    this.commonsService.getStateVisibilityNavigationBar().subscribe(
      response => {
        this.isVisibleNavigationBar = response;
      }, err => {
        this.isVisibleNavigationBar = false;
      }
    );
  }

  ngAfterViewChecked(): void{
    this.cdRef.detectChanges();
  }
}
