import { AdvancedReboot } from "./AdvancedReboot.js"

const WINDOW_NAME = "AdvancedSettings"

const AdvancedSettingsPanel = ({ spacing = 12 }) => Widget.Box({
    spacing: spacing,
    class_name: "advanced-settings",
    children: [
        Widget.Box({
            hpack: "fill",
            vpack: "fill",
            hexpand: true,
            vexpand: true,
            children: [
                Widget.Label({
                    label: "高级设置",
                    css: "font-size: 20px; font-weight: bold;",
                }),
            ]
        }),
        AdvancedReboot({ spacing: spacing })
    ]
})

export const AdvancedSettings = () => Widget.Window({
    name: WINDOW_NAME,
    class_name: "advanced-settings-popups",
    visible: false,
    keymode: 'on-demand',
    anchor: ["top", "right"],
    child: AdvancedSettingsPanel({
        spacing: 12,
    }),
    setup: self => self.keybind("Escape", () => {
        App.closeWindow(WINDOW_NAME)
    }),
})
