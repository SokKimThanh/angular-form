import { AbtractAngularConsoleLoggerService } from "angular-console-logger";

export class CustomLoggingService implements AbtractAngularConsoleLoggerService {
    warn(message: string): void {
        throw new Error("Method not implemented.");
    }
    error(message: string): void {
        throw new Error("Method not implemented.");
    }
    info(message: string): void {
        throw new Error("Method not implemented.");
    }

}