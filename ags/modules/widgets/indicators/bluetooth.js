const bluetooth = await Service.import('bluetooth')

export const bluetoothIndicator = Widget.Button({
    class_name: "bluetooth indicator",
    child: Widget.Icon(),
    onClicked: () => Utils.exec('blueberry'),
}).
    hook(bluetooth, (self, address) => {
        self.child.icon = `bluetooth-${bluetooth.enabled ? 'active' : 'disabled'}-symbolic`;
        self.tooltip_text = bluetooth.connected_devices.length > 0 ? '点击查看已连接设备' : '无设备连接';
        // TODO: address 添加广播
    }, 'device-added').
    hook(bluetooth, (self, address) => {
        self.child.icon = `bluetooth-${bluetooth.enabled ? 'active' : 'disabled'}-symbolic`;
        self.tooltip_text = bluetooth.connected_devices.length > 0 ? '点击查看已连接设备' : '无设备连接';
        // TODO: address 移除广播
    }, 'device-removed')