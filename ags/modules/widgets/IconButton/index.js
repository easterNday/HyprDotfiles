export const IconButton = (name, icon, label, primaryClickEvent) => Widget.Button({
    name: name,
    class_name: "icon-button",
    child: Widget.Box({
        spacing: 8,
        children: [
            Widget.Icon({
                icon: icon,
            }),
            Widget.Label({
                label: label,
            }),
        ],
    }),
    onClicked: () => primaryClickEvent()
    // onHover: (self) => { self.child.children[1].label = "Exit"; self.child.children[1].css = "" },
    // onHoverLost: (self) => { self.child.children[1].label = ""; self.child.children[1].css = "all: unset" },
})