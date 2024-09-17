export const Hyprpicker = () => Widget.Button({
    class_name: "circle-button circular",
    child: Widget.Box({
        spacing: 12,
        children: [
            Widget.Icon({
                icon: `color-picker-symbolic`,
            }),
        ],
    }),
    onClicked: () => Utils.execAsync(['hyprpicker', '-a'])
})
