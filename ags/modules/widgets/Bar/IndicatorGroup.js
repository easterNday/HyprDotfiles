
import { bluetoothIndicator } from "./indicators/bluetooth.js"
import { NetworkIndicator } from "./indicators/network.js"
import { brightnessIndicator } from "./indicators/brightness.js"
import { volumeIndicator } from "./indicators/volume.js"
import { batteryProgress } from "./indicators/battery.js"

export const indicatorGroup = () => Widget.Box({
    class_name: "indicator-group",
    spacing: 0,
    children: [
        bluetoothIndicator(),
        NetworkIndicator(),
        brightnessIndicator(),
        volumeIndicator(),
        batteryProgress()
    ]
})