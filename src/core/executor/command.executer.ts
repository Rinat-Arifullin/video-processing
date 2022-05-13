import { ChildProcessWithoutNullStreams } from "child_process";
import { IStreamLogger } from "../handlers/stream-logger.interface";
import { ICommandExec } from "./command.types";

export abstract class CommandExecuter<Input> {
  constructor(private logger: IStreamLogger) {}

  public async execute() {
    const input = await this.prompt();
    const command = this.build(input);
    const stream = this.spawn(command);
    this.precessStrem(stream, this.logger);
  }

  protected abstract prompt(): Promise<Input>;
  protected abstract build(input: Input): ICommandExec;
  protected abstract spawn(
    command: ICommandExec
  ): ChildProcessWithoutNullStreams;
  protected abstract precessStrem(
    stream: ChildProcessWithoutNullStreams,
    logger: IStreamLogger
  ): void;
}
