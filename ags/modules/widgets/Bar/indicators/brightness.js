import brightness from '../../../services/brightness.js';

const BRIGHTNESS_THRESHOLDS = [
    { threshold: 0.2, icon: 'display-brightness-off-symbolic' },
    { threshold: 0.5, icon: 'display-brightness-low-symbolic' },
    { threshold: 0.8, icon: 'display-brightness-medium-symbolic' },
    { threshold: Infinity, icon: 'display-brightness-high-symbolic' }
];

export const brightnessIndicator = () => Widget.Button({
    class_name: "brightness indicator",
    child: Widget.Icon(),
    // TODO: 点击显示设置面板
    // onClicked: () => Utils.exec('bash -c "XDG_CURRENT_DESKTOP="gnome" gnome-control-center bluetooth"'),
}).hook(brightness, (self) => {
    const icon = [
        [0.8, 'high'],
        [0.5, 'medium'],
        [0.2, 'low'],
        [0, 'off'],
    ].find(([threshold]) => threshold <= brightness.screen_value)?.[1];

    self.child.icon = `display-brightness-${icon}-symbolic`;
    self.tooltip_text = `亮度 ${brightness.screen_value * 100}%`
}, 'screen-changed')


