const battery = await Service.import('battery');
const { query } = await Service.import("applications");

export const batteryProgress = () => Widget.Button({
    class_name: 'battery indicator',
    child: Widget.Icon({
        icon: battery.bind('icon_name')
    }),
    onClicked: () => query('tlpui')[0].launch(),
    tooltip_text: battery.bind('charging').as(ch => ch ? 'charging' : `当前电量: ${battery.percent}%`),
})
