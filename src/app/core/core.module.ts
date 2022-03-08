import { CustomLoggingService } from './services/custom-logger.service';
import { NgModule } from '@angular/core';
import { AngularConsoleLoggerModule, AngularConsoleLoggerService } from 'angular-console-logger';



@NgModule({
  imports: [
    AngularConsoleLoggerModule.forRoot({
      isProduction: true,
      appPrefix: 'pluralsight-app'
    }),
  ],
  providers: [
    { provide: AngularConsoleLoggerService, useClass: CustomLoggingService }
  ],

})
export class CoreModule { }
