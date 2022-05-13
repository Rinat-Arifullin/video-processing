import { FfmpegExecuter } from "./commands/ffmpeg/ffmpeg.executer";
import { ConsoleLogger } from "./out/console-logger/console-logger";

export class App {
  async run() {
    new FfmpegExecuter(ConsoleLogger.getLogger()).execute();
  }
}

const app = new App();

app.run();
