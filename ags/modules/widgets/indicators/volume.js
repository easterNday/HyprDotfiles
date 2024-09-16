const audio = await Service.import('audio');

export const volumeIndicator = () => Widget.Icon({
    class_name: 'volume indicator'
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
    const tooltipText = audio.speaker.is_muted ? 'Volume Muted' : `Volume ${vol}%`;

    self.icon = `audio-volume-${iconName}-symbolic`;
    self.tooltip_text = tooltipText;
});
