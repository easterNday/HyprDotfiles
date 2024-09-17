const hyprland = await Service.import("hyprland");

const dispatch = event => {
    hyprland.messageAsync(`dispatch workspace ${event}`)
    // TODO: 对于 10 个以上的工作区，需要考虑如何显示
};

export const Workspaces = () => {
    const activeId = hyprland.active.workspace.bind("id");
    return Widget.EventBox({
        class_name: "workspaces",
        onScrollUp: () => dispatch('-1'),
        onScrollDown: () => dispatch('+1'),
        child: Widget.Box({
            children: Array.from({ length: 10 }, (_, i) => i + 1).map(i => Widget.Button({
                attribute: i,
                label: activeId.as(id => `${i === id ? "🟡" : "⚪"}`),
                onClicked: () => {
                    dispatch(i);
                },
                class_name: activeId.as(id => id === i ? "focused" : "")
            })),
            setup: self => self.hook(hyprland, () => self.children.forEach(btn => 
                btn.visible = hyprland.workspaces.some(ws => (btn.attribute <= 5 || ws.id === btn.attribute))
            ))
        })
    })
}