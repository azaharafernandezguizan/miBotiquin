import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Disease, MedicalItem } from '../models/medicalItem';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicalItemsService {

  constructor() { }

  getMedicalItems(): Observable<Array<MedicalItem>> {

    const medicalItemList: Array<MedicalItem> = [
      {
        name: 'Paracetamol',
        description: 'Se utiliza, tanto para aliviar el dolor debido a su actividad analgésica, como para reducir la fiebre, gracias a su actividad antipirética',
        class: 'pillsItem',
        src: '../../../assets/images/pastillas.jpg'
      },
      {
        name: 'Ibuprofeno',
        description: 'El ibuprofeno de venta libre se usa para aliviar dolores leves como dolores de cabeza, de dientes, de espalda, musculares, artritis y cólicos menstruales.',
        class: 'pillsItem',
        src: '../../../assets/images/pastillas.jpg'
      },
      {
        name: 'Spray para heridas',
        description: 'Spray fácil de usar para la limpieza antiséptica de heridas menores tales como cortes, abrasiones, quemaduras de primer grado, de segundo grado menores y ampollas abiertas.',
        class: 'sprayItem',
        src: '../../../assets/images/spray.png'
      },
      {
        name: 'Pomada quemaduras',
        description: 'Aporta a la piel el cuidado SOS que necesita y le ayudará a acelerar la regeneración de la piel. ',
        class: 'pomadeItem',
        src: '../../../assets/images/pomada.jpg'
      },
      {
        name: 'Anti-diarreicos',
        description: 'Indicado para el tratamiento sintomático de la diarrea aguda inespecífica.',
        class: 'pillsItem',
        src: '../../../assets/images/pastillas.jpg'
      },
      {
        name: 'Suero fisiológico',
        description: 'Solución salina esterilizada utilizada para limpieza ocular, nasal, quemaduras y heridas o para al realización de nebulizaciones',
        class: 'liquidItem',
        src: '../../../assets/images/jarabe.jpg'
      },
      {
        name: 'Pastillas para dormir',
        description: 'Reduce el tiempo que tardamos en conciliar el sueño y aumenta la profundidad y duración del mismo',
        class: 'pillsItem',
        src: '../../../assets/images/pastillas.jpg'
      },
      {
        name: 'Apósitos',
        description: 'Almohadilla o compresa estéril que se aplica a una herida para promover la cicatrización y proteger la herida.',
        class: 'boxItem',
        src: '../../../assets/images/cajaTiritas.jpg'
      },
      {
        name: 'Pomada hemorroidal',
        description: 'Tratamiento local sintomático de las manifestaciones asociadas con hemorroides, como la inflamación, el dolor, el picor o el escozor.',
        class: 'pomadeItem',
        src: '../../../assets/images/pomada.jpg'
      },
      {
        name: 'Apósitos para ampollas',
        description: 'Tratamiento de elevada efectividad de las ampollas en los dedos de los pies',
        class: 'boxItem',
        src: '../../../assets/images/cajaTiritas.jpg'
      },
      {
        name: 'Antieméticos',
        description: 'Fármacos utilizados para impedir o controlar náuseas, vómitos y la cinetosis',
        class: 'liquidItem',
        src: '../../../assets/images/jarabe.jpg'
      },
      {
        name: 'Termómetro',
        description: 'Instrumento de medición de temperatura',
        class: 'termometerItem',
        src: '../../../assets/images/termometro.jpg'
      },
      {
        name: 'Tensiometro',
        description: 'Instrumento de medición de tensión',
        class: 'tensiometerItem',
        src: '../../../assets/images/tensionmetro.jpg'
      },
      {
        name: 'Pinzas',
        description: 'Instrumento para extracción de partículas',
        class: 'tweezersItem',
        src: '../../../assets/images/pinzas.jpg'
      },
      {
        name: 'Tijeras',
        description: 'Instrumento de corte',
        class: 'scissorsItem',
        src: '../../../assets/images/tijeras.jpg'
      },
      {
        name: 'Guantes',
        description: 'Guantes para mantener una buena sepsis',
        class: 'glovesItem',
        src: '../../../assets/images/guantes.jpg'
      }
    ];

    return of(medicalItemList);

  }

  getDiseasesAndMedicines(): Observable<Array<Disease>> {
    const diseases: Array<Disease> = [
      {
        name: 'Dolor muscular',
        medicine: 'Ibuprofeno'
      },
      {
        name: 'Artritis',
        medicine: 'Ibuprofeno'
      },
      {
        name: 'Dolor de espalda',
        medicine: 'Ibuprofeno'
      },
      {
        name: 'Dolor menstrual',
        medicine: 'Ibuprofeno'
      },
      {
        name: 'Jaqueca',
        medicine: 'Ibuprofeno'
      },
      {
        name: 'Dolor de cabeza leve',
        medicine: 'Paracetamol'
      },
      {
        name: 'Gripe o catarro',
        medicine: 'Paracetamol'
      },
      {
        name: 'Dolor de garganta',
        medicine: 'Paracetamol'
      },
      {
        name: 'Fiebre',
        medicine: 'Paracetamol'
      }
    ];

    return of(diseases);
  }
}
