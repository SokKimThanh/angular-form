import { Injectable } from '@angular/core';
import { LoggerConfig } from './logger.config';

export abstract class AbtractAngularConsoleLoggerService {
  abstract warn(message: string): void;
  abstract error(message: string): void;
  abstract info(message: string): void;
}

@Injectable({
  providedIn: 'root'
})
export class AngularConsoleLoggerService implements AbtractAngularConsoleLoggerService {

  constructor(private loggerConfig: LoggerConfig) { }
  warn(message: string) {
    if (this.loggerConfig.isProduction) {
      return;
    }
    console.warn(`${this.loggerConfig.appPrefix} ${message}`);
  }
  error(message: string) {
    if (this.loggerConfig.isProduction) {
      return;
    }
    console.error(`${this.loggerConfig.appPrefix} ${message}`);
  }
  info(message: string) {
    if (this.loggerConfig.isProduction) {
      return;
    }
    console.info(`${this.loggerConfig.appPrefix} ${message}`);
  }
}
