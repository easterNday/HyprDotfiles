const date = Variable("", {
    poll: [6000, 'date "+%Y 年 %m 月 %d 日 %H:%M"'],
})

export const Clock = () => Widget.Label({
    class_name: "clock",
    label: date.bind(),
})
