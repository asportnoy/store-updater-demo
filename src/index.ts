import { Logger } from "replugged";

const logger = Logger.plugin("StoreUpdaterDemo");

export function start(): void {
  logger.log("v1.0.1 of StoreUpdaterDemo (Store source)");
}
