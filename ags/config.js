import { Bar } from "./modules/Bar/index.js";
import { Launcher } from "./modules/Launcher.js";
import { Notifications } from "./modules/widgets/Notification/Notifications.js";
import { Calendar } from "./modules/widgets/Bar/Calendar.js";
import { AdvancedSettings } from "./modules/widgets/Settings/AdvancedSettings.js";

// 配置App的样式和窗口组件
App.config({
    // 定义App的样式文件路径
    style: `${App.configDir}/style.css`,
    // 定义App的窗口组件列表
    windows: [
        // 顶部导航栏
        Bar(),
        Launcher(),
        Notifications(),
        Calendar(),
        AdvancedSettings(),
    ]
});