import { Bar } from "./modules/Bar/index.js";
import { Launcher } from "./modules/Launcher.js";
import { Notifications } from "./modules/widgets/Notification/Notifications.js";
import { Calendar } from "./modules/widgets/Bar/Calendar.js";
import { AdvancedSettings } from "./modules/widgets/Settings/AdvancedSettings.js";


// 编译 SCSS 文件为 CSS 文件
const scssPath = `${App.configDir}/style/style.scss`;
const cssPath = `${App.configDir}/style.css`;

// 确保 sassc 已安装
Utils.exec(`sassc ${scssPath} ${cssPath} -M -t expanded`);
App.applyCss(cssPath);

// 监听 SCSS 文件变化并重新编译
Utils.monitorFile(
    `${App.configDir}/style`,
    () => {
        // 当 SCSS 文件变化时，重新编译并应用新的 CSS 样式
        Utils.exec(`sassc ${scssPath} ${cssPath} -M -t expanded`);
        App.resetCss();
        App.applyCss(cssPath);
    }
);

// 配置 App 的样式和窗口组件
App.config({
    // 定义App的样式文件路径
    style: `${App.configDir}/style.css`,
    // 定义 App 的窗口组件列表
    windows: [
        Bar(),
        Launcher(),
        Notifications(),
        Calendar(),
        AdvancedSettings(),
    ],
});