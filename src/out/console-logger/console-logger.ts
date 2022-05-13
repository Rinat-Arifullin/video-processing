import { IStreamLogger } from "../../core/handlers/stream-logger.interface";

export class ConsoleLogger implements IStreamLogger {
  private static logger: ConsoleLogger;

  private constructor() {}

  public static getLogger(): ConsoleLogger {
    if (!ConsoleLogger.logger) {
      ConsoleLogger.logger = new ConsoleLogger();
    }
    return this.logger;
  }

  log(...args: any[]): void {
    console.log(...args);
  }
  end(): void {
    console.log("End");
  }
  error(...args: any[]): void {
    console.log(...args);
  }
}
