// 如果遇到需要加载的包是es6的模式导出的 需要在 package.json 增加"type":"module" 。
// 则以.js结尾或没有任何扩展名的文件将作为ES模块进行加载。
import chalk from 'chalk';
import ora from 'ora';

const log = console.log;

log(1)
// 给字体增加颜色
log(chalk.blue(1));
// 增加背景色
log(chalk.rgb(211, 188, 12).bgRed('hello word'));
// 增加图标
const spinner = ora(chalk.red('Hellor word')).start();
// 设置为红色
spinner.color = 'red';

setTimeout(() => {
    // 停止
    spinner.stop();
}, 1000)
