import { warframe_logo } from "../icons/warframe.js"
import { Workspaces } from "./widgets/workspaces.js"

import { Clock } from "./widgets/clock.js"

import { sysTray } from './widgets/tray.js'
import { bluetoothIndicator } from "./widgets/bluetooth.js"
import { NetworkIndicator } from "./widgets/network.js"
import { slider } from "./widgets/brightness.js"
import { volumeIndicator } from "./widgets/audio.js"
import { batteryProgress } from "./widgets/battery.js"

// layout of the bar
function Left() {
    return Widget.Box({
        spacing: 8,
        children: [
            warframe_logo,
            Workspaces()
        ],
    })
}

function Center() {
    return Widget.Box({
        spacing: 8,
        children: [
            Clock()
        ],
    })
}

function Right() {
    return Widget.Box({
        hpack: "end",
        spacing: 8,
        children: [
            sysTray(),
            bluetoothIndicator(),
            NetworkIndicator(),
            slider,
            volumeIndicator,
            batteryProgress
        ],
    })
}

export function Bar(monitor = 0) {
    return Widget.Window({
        name: `bar-${monitor}`, // name has to be unique
        class_name: "bar-bg",
        monitor,
        anchor: ["top", "left", "right"],
        exclusivity: "exclusive",
        child: Widget.CenterBox({
            class_name: "bar",
            start_widget: Left(),
            center_widget: Center(),
            end_widget: Right(),
        }),
    })
}