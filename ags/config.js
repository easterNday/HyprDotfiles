import { Bar } from "./modules/bar.js"
import { applauncher } from "./modules/launcher.js"

App.config({
    style: "./style.css",
    windows: [
        Bar(),
        applauncher
    ]
})