export const AdvancedSettings = () => Widget.Button({
    class_name: "icon-button",
    child: Widget.Box({
        spacing: 8,
        children: [
            Widget.Icon({
                icon: `am-settings-symbolic`,
            }),
            Widget.Label({
                // css: "all: unset",
                label: "设置",
            }),
        ],
    }),
    // onHover: (self) => { self.child.children[1].label = "Exit"; self.child.children[1].css = "" },
    // onHoverLost: (self) => { self.child.children[1].label = ""; self.child.children[1].css = "all: unset" },
})
