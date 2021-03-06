import inquirer from 'inquirer';

const promptList = [
    {
        type: "expand",
        message: "请选择样式文件：",
        name: "style",
        choices: [
            {
                key: "l",
                name: "less",
                value: "less"
            },
            {
                key: "s",
                name: "scss",
                value: "scss"
            },
            {
                key: "c",
                name: "css",
                value: "css"
            }
        ]
    },
    {
        type: 'input',
        message: '文件夹名字:',
        name: 'fileName',
        default: "my-project" // 默认值
    },
    {
        type: 'rawlist',
        message: '请选择样式文件:',
        name: 'style1',
        choices: [
            "less",
            "scss",
            "css"
        ]
    }
];

inquirer.prompt(promptList).then((answers) => {
    console.log(answers)
})