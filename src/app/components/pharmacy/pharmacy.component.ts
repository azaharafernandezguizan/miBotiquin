import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CommonsService } from 'src/app/services/commons.service';
import { MedicalItemsService } from 'src/app/services/medical-items.service';
import * as L from 'leaflet';

@Component({
  selector: 'app-pharmacy',
  templateUrl: './pharmacy.component.html',
  styleUrls: ['./pharmacy.component.scss']
})
export class PharmacyComponent implements OnInit {

  navBarTitle: string;
  mymap: any;
  elEntregoLatitude = 43.2992;
  elEntregoLongitude = -5.6376;
  pharmacyLatitude = 43.28671848;
  pharmacyLongitude = -5.64017594;
  medicalCenterLatitude = 43.28795242;
  medicalCenterLongitude = -5.64115226;


  constructor(private commonsService: CommonsService, private translateService: TranslateService,
              private medicalService: MedicalItemsService) {
    this.translateData();
  }

  ngOnInit(): void {
    this.commonsService.setStateVisibilityNavigationBar(true);
    this.commonsService.setNavigationBarTitle(this.navBarTitle);
    this.createMap(this.elEntregoLatitude, this.elEntregoLongitude);
    this.addUbicationPoint(this.pharmacyLatitude, this.pharmacyLongitude, 'Farmacia Nespral. Teléfono 985 66 01 17');
    this.addUbicationCircle(this.medicalCenterLatitude, this.medicalCenterLongitude,
                            'Centro de salud de El Entrego. Teléfono 985 66 18 67');
  }

  translateData(): void{
    this.navBarTitle = this.translateService.instant('myPharmacy.navBarTitle');
  }

  createMap(latitude: number, longitude: number): void {
    this.mymap = L.map('mapid').setView([latitude, longitude], 13);
    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
      maxZoom: 18
    }).addTo(this.mymap);
  }

  addUbicationPoint(latitude: number, longitude: number, textToShow: string): void {
    L.marker([latitude, longitude]).addTo(this.mymap).bindPopup(textToShow);
  }

  addUbicationCircle(latitude: number, longitude: number, textToShow: string): void {
    L.circle([latitude, longitude], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 50,
      iconUrl: 'leaflet/marker-icon.png',
      shadowUrl: 'leaflet/marker-shadow.png'
    }).addTo(this.mymap).bindPopup(textToShow);
  }


}
