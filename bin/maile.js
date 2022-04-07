#! /usr/bin/env node

import { program } from 'commander'; // commander负责读取命令

const log = console.log;

program
    .command('sass')
    .version('1.0.0', '-v, --version')
    .option('-w, --watch', '监听sass变化自动执行编译') //  maile sass -w option: {w: true} 第一个参数数命令，第二个参数是解释信息，第三个参数是一个回调
    .option('--no-person', 'remove person') // maile sass --no-person  option: {person: false}
    .alias('sa') // sass 命令简写为sa  maile sa
    .description('sass转化css')
    .action(function (option) {
        console.log(option) // 上面输入的值
        var isWatch = option.w ? true : false;
        if (isWatch) {
          console.log('开始监听');
        }else {
           console.log('只编译一次');
        }
    });

program.parse(process.argv);
log(program.args);
