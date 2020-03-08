import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromTranslationAction from './translation/state/translation.actions';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'AngularSample';

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.store.dispatch(
      fromTranslationAction.addTranslations({
        translations: [{ key: 'asd', value: 'asd' }]
      })
    );
  }
}
