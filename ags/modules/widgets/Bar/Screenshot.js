export const Screenshot = () => Widget.Button({
    class_name: "circle-button",
    child: Widget.Box({
        spacing: 12,
        children: [
            Widget.Icon({
                icon: `accessories-screenshot-symbolic`,
            }),
        ],
    }),
    // TODO: 更多截图选择
    onClicked: () => Utils.execAsync(['hyprshot', '-m', 'region'])
})
