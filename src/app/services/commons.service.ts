import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CommonsService {

  private isVisibleNavigationBar: BehaviorSubject<boolean>;
  private navigationBarTitle: BehaviorSubject<string>;

  constructor() {
    this.isVisibleNavigationBar = new BehaviorSubject<boolean>(true);
    this.navigationBarTitle = new BehaviorSubject<string>('');
   }

  getStateVisibilityNavigationBar(): Observable<boolean> {
    return this.isVisibleNavigationBar.asObservable();
  }

  setStateVisibilityNavigationBar(newState: boolean): void {
    this.isVisibleNavigationBar.next(newState);
  }

  getNavigationBarTitle(): Observable<string> {
    return this.navigationBarTitle.asObservable();
  }

  setNavigationBarTitle(newTitle: string): void {
    this.navigationBarTitle.next(newTitle);
  }

}
