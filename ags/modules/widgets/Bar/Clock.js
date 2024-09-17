const date = Variable("", {
    poll: [6000, 'date "+%m 月 %d 日 %H:%M"'],
})

export const Clock = () => Widget.Button({
    class_name: "clock",
    child: Widget.Label({
        label: date.bind(),
    }),
    onClicked: () => Utils.execAsync(['ags', '--toggle-window', 'Calendar']),
})
