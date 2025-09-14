/*
    Build script: inline src/novel_prompter.css and src/novel_prompter.js into src/novel_prompter.html,
    then write the result to index.html at the repo root.
*/

const fs = require('fs');
const path = require('path');

async function main() {
    const rootDir = process.cwd();
    const srcDir = path.join(rootDir, 'src');

    const files = {
        html: path.join(srcDir, 'novel_prompter.html'),
        css: path.join(srcDir, 'novel_prompter.css'),
        js: path.join(srcDir, 'novel_prompter.js'),
    };

    // Read all source files
    let html, cssContent, jsContent;
    try {
        [html, cssContent, jsContent] = await Promise.all([
            fs.promises.readFile(files.html, 'utf8'),
            fs.promises.readFile(files.css, 'utf8'),
            fs.promises.readFile(files.js, 'utf8'),
        ]);
    } catch (err) {
        console.error('[build] 读取源文件失败:', err.message);
        process.exitCode = 1;
        return;
    }

    let out = html;

    // Replace a <link ... href="novel_prompter.css" ...> with <style>...</style>
    const linkRegex = new RegExp('<link\\s+[^>]*href=["\\\'](?:\\./?|\\.\\./)?novel_prompter\\.css["\\\'][^>]*\\/?\\s*>', 'i');
    const styleTag = `\n  <style>\n${cssContent}\n  </style>\n`;
    if (linkRegex.test(out)) {
        out = out.replace(linkRegex, () => styleTag.trim());
    } else {
        // Fallback: inject before </head> or at top
        if (/(<\/head>)/i.test(out)) {
            out = out.replace(/<\/head>/i, (m) => `${styleTag}${m}`);
        } else {
            out = styleTag + out;
        }
    }

    // Replace a <script ... src="novel_prompter.js" ...></script> with <script>...</script>
    const scriptSrcRegex = new RegExp('<script\\s+[^>]*src=["\\\'](?:\\./?|\\.\\./)?novel_prompter\\.js["\\\'][^>]*>\\s*<\\/script>', 'i');
    const inlineScriptTag = `\n  <script>\n${jsContent}\n  </script>\n`;
    if (scriptSrcRegex.test(out)) {
        out = out.replace(scriptSrcRegex, () => inlineScriptTag.trim());
    } else {
        // Fallback: inject before </body> or at end
        if (/(<\/body>)/i.test(out)) {
            out = out.replace(/<\/body>/i, (m) => `${inlineScriptTag}${m}`);
        } else {
            out = out + inlineScriptTag;
        }
    }

    const outPath = path.join(rootDir, 'index.html');
    try {
        await fs.promises.writeFile(outPath, out, 'utf8');
        const rel = path.relative(rootDir, outPath) || 'index.html';
        console.log(`[build] 生成成功 -> ${rel}`);
    } catch (err) {
        console.error('[build] 写入 index.html 失败:', err.message);
        process.exitCode = 1;
    }
}

main();

