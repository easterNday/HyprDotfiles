import { Bar } from "./modules/bar.js"
import { Launcher } from "./modules/launcher.js"

App.config({
    style: "./style.css",
    windows: [
        Bar(),
        Launcher
    ]
})