const Lock = () => Widget.Button({
    class_name: "circle-button",
    child: Widget.Box({
        spacing: 12,
        children: [
            Widget.Icon({
                icon: `screen-lock-symbolic`,
            }),
        ],
    }),
    onClicked: () => Utils.execAsync(['hyprlock', '--immediate'])
})

const Logout = () => Widget.Button({
    class_name: "circle-button",
    child: Widget.Box({
        spacing: 12,
        children: [
            Widget.Icon({
                icon: `system-log-out-symbolic`,
            }),
        ],
    }),
    onClicked: () => Utils.execAsync(['hyprctl', 'dispatch', 'exit', '0'])
})

const Shutdown = () => Widget.Button({
    class_name: "circle-button",
    child: Widget.Box({
        spacing: 12,
        children: [
            Widget.Icon({
                icon: `/usr/share/icons/Colloid-Red-Dark/actions/symbolic/system-shutdown-symbolic.svg`,
            }),
        ],
    }),
    onClicked: () => Utils.execAsync(['systemctl', 'poweroff'])
})

const Reboot = () => Widget.Button({
    class_name: "circle-button",
    child: Widget.Box({
        spacing: 12,
        children: [
            Widget.Icon({
                icon: `system-reboot-symbolic`,
            }),
        ],
    }),
    onClicked: () => Utils.execAsync(['systemctl', 'reboot'])
})

export const AdvancedReboot = ({ spacing = 12 }) => Widget.Box({
    spacing: spacing,
    vertical: true,
    class_name: "advanced-reboot",
    hpack: "end",
    vpack: "center",
    children: [
        Lock(),
        Logout(),
        Shutdown(),
        Reboot(),
    ]
})