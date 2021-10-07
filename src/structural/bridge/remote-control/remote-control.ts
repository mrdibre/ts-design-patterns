import { DeviceImplementation } from "../device/device-implementation";

class RemoteControl {
  constructor(protected readonly device: DeviceImplementation) {}

  togglePower(): void {
    this.device.setPower(!this.device.getPower());

    console.log(`${this.device.getName()} power status: ${this.device.getPower()}`);
  }
}

export { RemoteControl };
