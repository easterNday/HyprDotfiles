import { Workspaces } from "../widgets/Bar/Workspaces.js"

import { Clock } from "../widgets/Bar/Clock.js"

import { sysTray } from '../widgets/Bar/Tray.js'
import { CircleButton } from "../widgets/CircleButton/index.js"
import { indicatorGroup } from "../widgets/Bar/IndicatorGroup.js"
import { IconButton } from "../widgets/IconButton/index.js"

// layout of the bar
function Left() {
    return Widget.Box({
        spacing: 8,
        children: [
            Widget.Button({
                class_name: "logo",
                vpack: "center",
                child: Widget.Box({
                    children: [
                        Widget.Icon({
                            size: 24,
                            icon: `${App.configDir}/icons/warframe.svg`,
                        }),
                        Widget.Label({
                            label: "Warframe",
                        }),
                    ],
                }),
                onClicked: () => Utils.execAsync(['ags', '--toggle-window', 'launcher']),
            }),
            Workspaces()
        ],
    })
}

function Center() {
    return Clock()
}

function Right() {
    return Widget.Box({
        hpack: "end",
        spacing: 8,
        children: [
            sysTray(),
            CircleButton("Hyprpicker", "color-picker-symbolic", () => Utils.execAsync(['hyprpicker', '-a'])),
            CircleButton("Screenshot", "accessories-screenshot-symbolic", () => Utils.execAsync(['hyprshot', '-m', 'region'])),
            indicatorGroup(),
            IconButton("Settings", "preferences-system-symbolic", "设置", () => Utils.execAsync(['ags', '--toggle-window', 'AdvancedSettings']))
        ],
    })
}

export function Bar(monitor = 0) {
    return Widget.Window({
        name: `bar-${monitor}`, // name has to be unique
        class_name: "topBar",
        monitor,
        anchor: ["top", "left", "right"],
        exclusivity: "exclusive",
        vpack: "center",
        child: Widget.CenterBox({
            class_name: "barContainer",
            start_widget: Left(),
            center_widget: Center(),
            end_widget: Right(),
        }),
    })
}