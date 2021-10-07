import { DeviceImplementation } from "./device-implementation";

class Radio implements DeviceImplementation {
  private volume = 10;
  private power = false;
  private name = "Radio";

  getName(): string {
    return this.name;
  }

  getPower(): boolean {
    return this.power;
  }

  getVolume(): number {
    return this.volume;
  }

  setPower(powerStatus: boolean): void {
    this.power = powerStatus;
  }

  setVolume(volume: number): void {
    if (volume >= 0 && volume <= 100) {
      this.volume = volume;
    }
  }
}

export { Radio };
