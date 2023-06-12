import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { TodolistModule } from './todolist/todolist.module';

import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from './shared/shared.module';

import { todolistReducer } from './store/reducers/todolist.reducer';
import { TodolistEffects } from './store/effects/todolist.effects';
import { alertsReducer } from './store/reducers/alerts.reducer';
import { HeaderComponent } from './core/components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({
      todolist: todolistReducer,
      alerts: alertsReducer
    }
    ),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([
      TodolistEffects
    ]),
    SharedModule,
    TodolistModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
