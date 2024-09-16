import { Bar } from "./modules/Bar.js"
import { Launcher } from "./modules/Launcher.js"
import { Notifications } from "./modules/popups/Notifications.js"

App.config({
    style: "./style.css",
    windows: [
        Bar(),
        Launcher(),
        Notifications()
    ]
})