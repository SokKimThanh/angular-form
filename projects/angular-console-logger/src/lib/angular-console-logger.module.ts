import { ModuleWithProviders, NgModule } from '@angular/core';
import { LoggerConfig } from './logger.config';
import { AngularConsoleLoggerComponent } from './angular-console-logger.component';



@NgModule({
  declarations: [
    AngularConsoleLoggerComponent
  ],
  imports: [
  ],
  exports: [
    AngularConsoleLoggerComponent
  ]
})
export class AngularConsoleLoggerModule {
  public static forRoot(config: LoggerConfig): ModuleWithProviders<AngularConsoleLoggerModule> {
    return {
      ngModule: AngularConsoleLoggerModule,
      providers: [
        { provide: LoggerConfig, useValue: config }
      ]
    }
  }
}
