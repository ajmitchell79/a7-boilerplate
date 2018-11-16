import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER, ErrorHandler } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, routingComponents } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';

import { TokenInterceptor } from './shared/interceptor/token.interceptor';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ToastrModule } from 'ngx-toastr';

import { MatNativeDateModule, MatFormFieldModule, MatInputModule, MatCheckboxModule, MatProgressBarModule, MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatTableModule,
  MatPaginatorModule , MAT_DATE_LOCALE, 
  MatDialogModule,
  MatSortModule,
  MatProgressSpinnerModule
} from '@angular/material';

import {AuthenticationService} from './services/authentication.service';
import {ConfigService} from './services/config.service';

import { GlobalErrorHandler } from './shared/error/GlobalErrorHandler';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent, 
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    MatTableModule,
    MatDialogModule,

    ToastrModule.forRoot()
  ],
  providers: [ 
     {   //pre-load config service, which will check auth token exists
     provide: APP_INITIALIZER, 
     useFactory: configServiceFactory,
     deps: [ConfigService],
     multi: true
   },
  // {
  //   provide: ErrorHandler, 
  //   useClass: GlobalErrorHandler
  // },
  // {
  //   provide: HTTP_INTERCEPTORS, 
  //   useClass: TokenInterceptor,
  //   multi: true
  // },

  AuthenticationService,
  ConfigService,
],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function configServiceFactory(configService: ConfigService): Function {  
  return () => configService.getConfig();
}

