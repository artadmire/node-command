#!/usr/bin/env node

import { program }  from 'commander';

program
  .version('1.0.0')
  .usage('<command> [options]')
  .command('init', 'generate a new project from a template') // 执行 maile init 会执行maile-init文件
  .command('list', 'list available official templates')
  .command('build', 'prototype a new project')
  .command('create', '(for v3 warning only)')

program.parse(process.argv)