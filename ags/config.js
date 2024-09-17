import { Bar } from "./modules/Bar.js"
import { Launcher } from "./modules/Launcher.js"
import { Notifications } from "./modules/widgets/Notification/Notifications.js"
import { Calendar } from "./modules/widgets/Bar/Calendar.js"
import { AdvancedSettings } from "./modules/widgets/Settings/AdvancedSettings.js"

App.config({
    style: "./style.css",
    windows: [
        Bar(),
        Launcher(),
        Notifications(),
        Calendar(),
        AdvancedSettings(),
    ]
})