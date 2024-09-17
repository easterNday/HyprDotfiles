
const WINDOW_NAME = "Calendar";
export const Calendar = () => Widget.Window({
    name: WINDOW_NAME,
    // class_name: "launcher-bg",
    visible: false,
    keymode: 'on-demand',
    anchor: ["top"],
    child: Widget.Calendar({
        showDayNames: true,
        showDetails: true,
        showHeading: true,
        showWeekNumbers: true,
        // detail: (self, y, m, d) => {
        //     return `<span color="white">${y}. ${m}. ${d}.</span>`
        // },
        onDaySelected: ({ date: [y, m, d] }) => {
            print(`${y}. ${m}. ${d}.`)
        },
    }),
    setup: self => self.keybind("Escape", () => {
        App.closeWindow(WINDOW_NAME)
    })
})