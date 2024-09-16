const network = await Service.import('network')

const WifiIndicator = () => Widget.Icon({
    icon: network.wifi.bind('icon_name'),
})

const WiredIndicator = () => Widget.Icon({
    icon: network.wired.bind('icon_name'),
})

export const NetworkIndicator = Widget.Stack({
    class_name: "network indicator",
    children: {
        wifi: WifiIndicator(),
        wired: WiredIndicator(),
    },
    shown: network.bind('primary').as(p => p || 'wifi'),
})