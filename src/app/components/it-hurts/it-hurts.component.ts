import { MedicalItemsService } from 'src/app/services/medical-items.service';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CommonsService } from 'src/app/services/commons.service';
import { Disease } from 'src/app/models/medicalItem';

@Component({
  selector: 'app-it-hurts',
  templateUrl: './it-hurts.component.html',
  styleUrls: ['./it-hurts.component.scss']
})
export class ItHurtsComponent implements OnInit {
  navBarTitle: string;
  diseases: Array<Disease>;
  suggestedMedicine: string;
  suggestedMedicineFirstPart: string;

  constructor(private commonsService: CommonsService, private translateService: TranslateService,
              private medicalService: MedicalItemsService) {
    this.translateData();
    this.getData();
  }

  ngOnInit(): void {
    this.commonsService.setStateVisibilityNavigationBar(true);
    this.commonsService.setNavigationBarTitle(this.navBarTitle);
  }

  translateData(): void{
    this.navBarTitle = this.translateService.instant('itHurts.navBarTitle');
    this.suggestedMedicineFirstPart = this.translateService.instant('itHurts.medicine');
  }

  getData(): void{
    this.medicalService.getDiseasesAndMedicines().subscribe(
      data => {
        this.diseases = data;
      }
    );
  }

  showDiseaseMedicine(diseaseMedicine: string) : void{
    this.suggestedMedicine = this.suggestedMedicineFirstPart + diseaseMedicine;
  }

}
