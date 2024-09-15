import { applauncher } from "./widgets/launcher.js"
import { Bar } from "./widgets/bar.js"


App.config({
    style: "./style.css",
    windows: [
        Bar(),
        applauncher
    ]
})