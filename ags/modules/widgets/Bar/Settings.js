export const Settings = () => Widget.Button({
    class_name: "icon-button",
    child: Widget.Box({
        spacing: 8,
        children: [
            Widget.Icon({
                icon: `am-settings-symbolic`,
            }),
            Widget.Label({
                label: "设置",
            }),
        ],
    }),
    onClicked: () => Utils.execAsync(['ags', '--toggle-window', 'AdvancedSettings']),
    // onHover: (self) => { self.child.children[1].label = "Exit"; self.child.children[1].css = "" },
    // onHoverLost: (self) => { self.child.children[1].label = ""; self.child.children[1].css = "all: unset" },
})
