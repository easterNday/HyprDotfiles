const audio = await Service.import('audio');
const { query } = await Service.import("applications");

export const volumeIndicator = () => Widget.Button({
    class_name: 'volume indicator',
    child: Widget.Icon(),
    onClicked: () => query('pavucontrol')[0].launch(),
}).hook(audio.speaker, self => {
    const vol = Math.floor(audio.speaker.volume * 100);
    const iconMap = [
        [101, 'overamplified'],
        [67, 'high'],
        [34, 'medium'],
        [1, 'low'],
        [0, 'muted'],
    ];
    const iconName = audio.speaker.is_muted ? 'muted' : iconMap.find(([threshold]) => threshold <= vol)?.[1] || 'muted';
    const tooltipText = audio.speaker.is_muted ? '已静音' : `当前音量: ${vol}%`;

    self.child.icon = `audio-volume-${iconName}-symbolic`;
    self.tooltip_text = tooltipText;
});
