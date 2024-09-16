const network = await Service.import('network')

// {
//     "menu": {
//         "name": "",
//         "width-request": -1,
//         "height-request": -1,
//         "visible": false,
//         "sensitive": true,
//         "app-paintable": false,
//         "can-focus": false,
//         "has-focus": false,
//         "is-focus": false,
//         "focus-on-click": true,
//         "can-default": false,
//         "has-default": false,
//         "receives-default": false,
//         "composite-child": false,
//         "style": {
//             "context": {
//                 "screen": {
//                     "resolution": 96
//                 },
//                 "direction": 1,
//                 "paint-clock": null
//             }
//         },
//         "events": 12288,
//         "no-show-all": false,
//         "has-tooltip": false,
//         "tooltip-markup": null,
//         "tooltip-text": null,
//         "opacity": 1,
//         "double-buffered": true,
//         "halign": 0,
//         "valign": 0,
//         "margin-left": 0,
//         "margin-right": 0,
//         "margin-start": 0,
//         "margin-end": 0,
//         "margin-top": 0,
//         "margin-bottom": 0,
//         "margin": 0,
//         "hexpand": false,
//         "vexpand": false,
//         "hexpand-set": false,
//         "vexpand-set": false,
//         "expand": false,
//         "scale-factor": 1
//     },
//     "category": "SystemServices",
//     "id": "nm-applet",
//     "title": "网络",
//     "status": "Active",
//     "window-id": null,
//     "is-menu": null,
//     "tooltip-markup": "",
//     "icon": "nm-signal-75"
// }

const WifiIndicator = Widget.Button({
    child: Widget.Icon({
        icon: network.wifi.bind('icon_name'),
    }),
    // TODO: 点击左键连接WIFI
    // onPrimaryClick: (_, event) => item.activate(event),
    onSecondaryClick: () => Utils.exec('nm-connection-editor'),
    tooltip_text: network.wifi.internet === "connected" ? network.wifi.ssid : '无连接',
})

const WiredIndicator = Widget.Button({
    child: Widget.Icon({
        icon: network.wired.bind('icon_name'),
    }),
    // onClicked: () => Utils.exec('bash -c "XDG_CURRENT_DESKTOP="gnome" gnome-control-center bluetooth"'),
    tooltip_text: network.wired.internet === "connected" ? network.wifi.ssid : '无连接',
})

export const NetworkIndicator = Widget.Stack({
    class_name: "network indicator",
    children: {
        wifi: WifiIndicator,
        wired: WiredIndicator,
    },
    shown: network.bind('primary').as(p => p || 'wifi'),
})