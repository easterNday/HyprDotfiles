const systemtray = await Service.import('systemtray')

// TODO: 动态增加和删除

/** @param {import('types/service/systemtray').TrayItem} item */
const SysTrayItem = item => Widget.Button({
    child: Widget.Icon().bind('icon', item, 'icon'),
    tooltipMarkup: item.bind('tooltip_markup'),
    onPrimaryClick: (_, event) => item.activate(event),
    onSecondaryClick: (_, event) => item.openMenu(event),
});

export const sysTray = () => Widget.CenterBox({
    class_name: "tray",
    centerWidget: Widget.Box({
        children: systemtray.bind('items').as(i => i.map(SysTrayItem))
    })
})