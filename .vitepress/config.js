import sidebar from "./sidebar";

export default {
    lang: 'zh-CN',
    title: 'Nanote 使用文档',
    description: '🤪',
    themeConfig: {
        logo: '/logo-yellow.png',
        footer: {
            copyright: 'Copyright © 2023 Nickel'
        },
        lastUpdatedText: '更新时间',
        socialLinks: [
            {icon: 'github', link: 'https://github.com/imxuedi/nanote-docs'},
            {
                icon: {
                    svg: '<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="48" height="48"><path d="M1019 369.2L917.8 65.6C904.8 26.4 868.2 0 826.8 0H544v384h477.4c-0.8-5-0.8-10-2.4-14.8zM480 0H197.2c-41.4 0-78 26.4-91 65.6L5 369.2c-1.6 4.8-1.6 9.8-2.4 14.8H480V0zM0 448v480c0 53 43 96 96 96h832c53 0 96-43 96-96V448H0z" fill="#f8c472"></path></svg>'
                },
                link: 'https://www.nanote.cn'
            }
        ],
        docFooter: {
            prev: '刚刚看过',
            next: '即将浏览'
        },
        outlineTitle: '本页目录',
        sidebar
    },
    ignoreDeadLinks: true,
    lastUpdated: true,
    srcDir: './src',
    scrollOffset: 'header'
}