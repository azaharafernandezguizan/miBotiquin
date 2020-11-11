import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonsService } from 'src/app/services/commons.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  navBarTitle: string;

  constructor(private commonsService: CommonsService, private router: Router) { }

  ngOnInit(): void {
    this.getNavBarTitle();
  }

  getNavBarTitle(): void{
    this.commonsService.getNavigationBarTitle().subscribe( data => {
        this.navBarTitle = data;
    });
  }

  goHome(): void{
    this.router.navigate(['/']);
  }

}
