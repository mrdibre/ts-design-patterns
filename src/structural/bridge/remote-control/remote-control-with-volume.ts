import { RemoteControl } from "./remote-control";

class RemoteControlWithVolume extends RemoteControl {
  volumeUp(): void {
    const oldVolume = this.device.getVolume();

    this.device.setVolume(oldVolume + 10);

    console.log(`${this.device.getName()} o volume ${oldVolume} agora tem ${this.device.getVolume()}`);
  }

  volumeDown(): void {
    const oldVolume = this.device.getVolume();

    this.device.setVolume(oldVolume - 10);

    console.log(`${this.device.getName()} o volume ${oldVolume} agora tem ${this.device.getVolume()}`);
  }
}

export { RemoteControlWithVolume };
