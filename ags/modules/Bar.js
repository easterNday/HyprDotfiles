import { Workspaces } from "./widgets/Workspaces.js"

import { Clock } from "./widgets/Clock.js"

import { sysTray } from './widgets/Tray.js'
import { Hyprpicker } from "./widgets/Hyprpicker.js"
import { Screenshot } from "./widgets/Screenshot.js"
import { indicatorGroup } from "./widgets/IndicatorGroup.js"
import { AdvancedSettings } from "./widgets/AdvancedSettings.js"

// layout of the bar
function Left() {
    return Widget.Box({
        spacing: 8,
        children: [
            Widget.Button({
                class_name: "logo",
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
            Hyprpicker(),
            Screenshot(),
            indicatorGroup(),
            AdvancedSettings()
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