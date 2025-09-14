# 小说创作提示词生成器

单页 Web 应用，动态文本替换，生成 4 段中文提示词：

1. 世界观参考
2. 角色 Character Dashboard（可添加多角色）
3. 全局剧情大纲
4. 第一章场景拆解

使用方法：

- 双击打开 index.html 即可离线使用。
- 选择各项参数，点击“生成”，点击“复制”即可复制提示词（纯 Markdown 文本）。

# overview

This is a "single page AI prompt generate tool", which technically is a "dynamic text replacer"

- user want to generate AI prompt for Novel creation
- This page take user input(mostly selection)
- This page ouput 4 paragraph of Chinese prompt text

## Prompt 1 world view generate

- input: fantasy level: simple selection from history based, current world based fiction, science fiction, to magical fantasy
- input: time theme: pre-history to near future, selection
- input: scale of world view geometry: state, continet, planet, universe, multiverse
- input: ideology, selection
- output: fill in user selected requirement into a precomposed template that request the AI to generate a "detailed world view reference" then output markdown as pure text and add a copy button for user to click

## Prompt 2 character list

This part of the web page allow user to create a list(with +, - buttons) of main characters include the protagonist and antagonist that will appear in the story.

- input for single character: gender, select from m,f,non-binary, dont-mention(which instruct the AI to avoid use pronouns taht diclose the characters gender)
- input for single character: outer layer of personality, multi select from common personality.
- input for single character: inner layer of personality, multi select from common personality.
- input for single character: name option, select from AI-pick, not-disclose(shich should instruct the AI to avoid directly call the character)
- input for single character: back story options, select from precomposed backstory or let AI generate
- output: for each character user selected, fill in user selected requirement into a precomposed template that request the AI to generate a "Character Dashboard".

## Prompt 3 whole plot

This part of the web page allow user request a whole plot outline prompt.

- input: genre, multi select from common genre
- input: tone, multi select from common tone
- input: length, select from short story, novelette, novella, novel
- input: pov, select from first person, third person limited, third person omniscient
- output: fill in user selected requirement into a precomposed template that request the AI to generate a "whole plot outline" with main plot points and sub plot points.

## Prompt 4 first chapter scene breakdown

This part of the web page allow user request a first chapter scene breakdown prompt.

- input: chapter length, select from short(1000-2000 words), medium(2000-4000 words), long(4000-8000 words)
- input: number of scenes, select from 3,5,7,10
- output: fill in user selected requirement into a precomposed template that request the AI to generate a "first chapter scene breakdown" with main scenes and sub scenes.

# design

- single page web app
- frontend: static html, css, js
- html: 4 horizontal tabs, each tab is a form with input fields and a output area
- css: simple layout, responsive design
- js: handle user input, stores precomposed templates, generate output text, handle copy button

开发说明：

- 纯前端：index.html / index.css / index.js
- 无依赖、无构建，适合静态托管。
