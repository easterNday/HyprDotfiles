import { Bar } from "./modules/bar.js"
import { Launcher } from "./modules/launcher.js"
import { Notifications } from "./modules/popups/Notification.js"

App.config({
    style: "./style.css",
    windows: [
        Bar(),
        Launcher,
        Notifications()
    ]
})