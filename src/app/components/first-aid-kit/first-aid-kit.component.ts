import { TranslateService } from '@ngx-translate/core';
import { CommonsService } from './../../services/commons.service';
import { Component, OnInit } from '@angular/core';
import { MedicalItem } from 'src/app/models/medicalItem';
import { MedicalItemsService } from 'src/app/services/medical-items.service';

@Component({
  selector: 'app-first-aid-kit',
  templateUrl: './first-aid-kit.component.html',
  styleUrls: ['./first-aid-kit.component.scss']
})
export class FirstAidKitComponent implements OnInit {
  navBarTitle: string;
  firstAidItems: Array<MedicalItem>;

  constructor(private commonsService: CommonsService, private medicalItemService: MedicalItemsService,
              private translateService: TranslateService) {
    this.translateData();
    this.getData();
  }

  ngOnInit(): void {
    this.commonsService.setStateVisibilityNavigationBar(true);
    this.commonsService.setNavigationBarTitle(this.navBarTitle);
  }

  translateData(): void{
    this.navBarTitle = this.translateService.instant('firstAidKit.navBarTitle');
  }

  getData(): void{
    this.medicalItemService.getMedicalItems().subscribe(
      data => {
        this.firstAidItems = data;
      }
    );
  }

}
