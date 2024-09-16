const bluetooth = await Service.import('bluetooth')

export const bluetoothIndicator = Widget.Icon({
    class_name: "bluetooth indicator",
    icon: bluetooth.bind('enabled').as(on =>
        `bluetooth-${on ? 'active' : 'disabled'}-symbolic`),
    tooltip_text: bluetooth.connected_devices.length > 0 ? '已启动' : '无设备连接',
})