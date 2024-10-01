export const CircleButton = (name, icon, primaryClickEvent) => Widget.Button({
    name: name,
    class_name: "circle-button",
    child: Widget.Box({
        spacing: 12,
        children: [
            Widget.Icon({
                icon: icon,
            }),
        ],
    }),
    onClicked: () => primaryClickEvent()
})