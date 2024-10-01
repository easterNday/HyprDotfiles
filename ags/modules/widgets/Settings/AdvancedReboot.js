import { CircleButton } from "../CircleButton/index.js"

const Lock = CircleButton("LockScreen", `screen-lock-symbolic`, () => Utils.execAsync(['hyprlock', '--immediate']))

const Logout = CircleButton("Logout", `system-log-out-symbolic`, () => Utils.execAsync(['hyprctl', 'dispatch', 'exit', '0']))

const Shutdown = CircleButton("Shutdown", `system-shutdown-symbolic`, () => Utils.execAsync(['systemctl', 'poweroff']))

const Reboot = CircleButton("Reboot", `system-reboot-symbolic`, () => Utils.execAsync(['systemctl', 'reboot']))

export const AdvancedReboot = ({ spacing = 12 }) => Widget.Box({
    spacing: spacing,
    vertical: true,
    class_name: "advanced-reboot",
    hpack: "end",
    vpack: "center",
    children: [
        Lock,
        Logout,
        Shutdown,
        Reboot,
    ]
})