const battery = await Service.import('battery')

export const batteryProgress = () => Widget.Icon({
    class_name: 'battery indicator',
    icon: battery.bind('icon_name')
})
