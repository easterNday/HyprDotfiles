const battery = await Service.import('battery')

export const batteryProgress = () => Widget.Button({
    class_name: 'battery indicator',
    child: Widget.Icon({
        icon: battery.bind('icon_name')
    }),
    onClicked: () => Utils.exec('tlpui'),
    tooltip_text: battery.bind('charging').as(ch => ch ? 'charging' : `当前电量: ${battery.percent}%`),
})
