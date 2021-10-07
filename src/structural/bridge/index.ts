import { RemoteControl } from "./remote-control/remote-control";
import { RemoteControlWithVolume } from "./remote-control/remote-control-with-volume";
import { Tv } from "./device/tv";
import { Radio } from "./device/radio";

function client(abstraction: RemoteControl | RemoteControlWithVolume): void {
  abstraction.togglePower();
  abstraction.togglePower();

  if (abstraction instanceof RemoteControlWithVolume) {
    for(let i = 0; i < 12; i++) abstraction.volumeUp();
    for(let i = 0; i < 12; i++) abstraction.volumeDown();
  }
}

const tv = new Tv();
const radio = new Radio();

const remoteControl = new RemoteControl(radio);
const remoteControlWithVolume = new RemoteControlWithVolume(tv);

client(remoteControl);
client(remoteControlWithVolume);
