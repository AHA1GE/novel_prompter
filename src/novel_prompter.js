// 数据与模板 —— 简洁结构，少分支
const GENRES = [
    "奇幻", "科幻", "悬疑", "惊悚", "浪漫", "历史", "都市", "冒险", "武侠", "推理",
];
const TONES = [
    "黑暗", "明快", "写实", "讽刺", "史诗", "治愈", "阴郁", "荒诞", "轻松", "紧张",
];

// 常见人格枚举（外在/内在）
const OUTER_TRAITS = [
    "冷静", "自信", "幽默", "冷酷", "热情", "沉默寡言", "健谈", "强势", "温和", "冲动", "细致", "粗犷",
];
const INNER_TRAITS = [
    "敏感", "野心", "罪疚", "恐惧", "渴望认可", "责任感", "怀疑", "同情", "复仇心", "自卑", "乐观", "悲观",
];

// 预设背景（分组：世界观类型 -> 条目(label + hint)）
const PRESET_BACKSTORY_GROUPS = [
    {
        group: "通用", items: [
            { label: "贵胄后裔", hint: "贵胄后裔：尊贵的顶级家族后裔，身上背负着家族的血海深仇" },
            { label: "退婚打脸", hint: "退婚打脸：家道中落被退婚，誓要王者归来打脸所有人" },
            { label: "预言之子", hint: "预言之子：农家出生但背负天命的预言之子" },
            { label: "普普通通", hint: "普普通通：中产家庭出生的普通孩子" },
            { label: "异界来客", hint: "异界来客：从另一个世界穿越而来的异人，会随缘路过？还是缘起根生？" },
            { label: "重生老魔", hint: "重生老魔：世界给予你第二次生命，新的挑战还是弥补所有遗憾？" },
            { label: "孤儿出身", hint: "孤儿出身：在边缘与困境中长大，习得自保与敏锐直觉" },
            { label: "战争难民", hint: "战争难民：家园失落于战火，信念与仇恨在废墟中重塑" },
            { label: "失忆者", hint: "失忆者：记忆成谜，真相可能比谎言更危险" },
            { label: "被流放者", hint: "被流放者：被逐出原本的秩序体系，渴望回归或建立新秩序" },
            { label: "叛逃者", hint: "叛逃者：拒绝旧主的束缚，带着禁忌的知识与追兵的阴影" },
        ]
    },
    {
        group: "历史/古代", items: [
            { label: "门阀没落", hint: "门阀没落：曾经荣耀的世家式微，誓要重整门风" },
            { label: "流放边关", hint: "流放边关：因案发配天涯，在边陲夹缝求生" },
            { label: "寄人篱下", hint: "寄人篱下：以门客/家仆身份谋生，忍辱负重蓄势待发" },
        ]
    },
    {
        group: "武侠/仙侠", items: [
            { label: "门派遗孤", hint: "门派遗孤：宗门覆灭的幸存者，肩负复兴之志" },
            { label: "凡人修仙", hint: "凡人修仙：天资平平却百折不挠，走艰难求道之路" },
            { label: "灵根残缺", hint: "灵根残缺：天赋有缺，靠奇遇与苦修补短板" },
            { label: "契灵同体", hint: "契灵同体：与灵体订立契约，共生共死相辅相成" },
        ]
    },
    {
        group: "魔幻/中土", items: [
            { label: "被诅咒的血脉", hint: "被诅咒的血脉：代代相承的诅咒倒计时般催促命运" },
            { label: "放逐术士", hint: "放逐术士：因禁咒被逐出学会，掌握不被允许的力量" },
            { label: "失落王族", hint: "失落王族：王统断绝后的流落子嗣，王冠与流亡同在" },
        ]
    },
    {
        group: "赛博/科幻", items: [
            { label: "赛博改造人", hint: "赛博改造人：破败义体勉强维生，人性与算法拉扯" },
            { label: "记忆植入者", hint: "记忆植入者：被写入他人记忆，真假自我难分" },
            { label: "巨企弃子", hint: "巨企弃子：公司帝国的边缘人，知晓机密而被清算" },
            { label: "边缘黑客", hint: "边缘黑客：在防火墙阴影里交易真相与谎言" },
        ]
    },
    {
        group: "太空歌剧", items: [
            { label: "失落殖民后裔", hint: "失落殖民后裔：祖辈离散星域，传闻中的故乡成谜" },
            { label: "星舰孤儿", hint: "星舰孤儿：在残骸与救生舱间长大，对宇宙有天然直觉" },
            { label: "行星难民", hint: "行星难民：母星生态崩溃后流亡他域" },
        ]
    },
    {
        group: "末世/废土", items: [
            { label: "灾变幸存者", hint: "灾变幸存者：从末日第一夜活下来的人，看尽秩序崩坏" },
            { label: "废土拾荒者", hint: "废土拾荒者：在旧世界废墟里捡拾文明碎片" },
            { label: "庇护所叛逃者", hint: "庇护所叛逃者：逃离封闭系统，拥抱未知与危险" },
        ]
    },
    {
        group: "克苏鲁/神秘学", items: [
            { label: "禁忌学徒", hint: "禁忌学徒：窥见常人不应知的学问，理智值不断消磨" },
            { label: "隐秘教团", hint: "隐秘教团：曾沉迷低语的信徒，如今在清醒与召唤间摇摆" },
            { label: "见证不可名状", hint: "见证不可名状：短暂一瞥改变一生，梦境与现实相互渗透" },
        ]
    },
    {
        group: "都市奇幻", items: [
            { label: "夜巡人家族", hint: "夜巡人家族：代代守护城市秘境的门卫" },
            { label: "隐裔混血", hint: "隐裔混血：人类与异族的交汇体，力量与身份两难" },
            { label: "超常事务所新人", hint: "超常事务所新人：初入行的见习处理员，规章比怪谈更可怕" },
        ]
    },
    {
        group: "蒸汽朋克", items: [
            { label: "发条之心", hint: "发条之心：以齿轮维生，听得到世界的刻度声" },
            { label: "叛逆发明家", hint: "叛逆发明家：拒绝行业行会束缚，用奇技颠覆旧秩序" },
            { label: "飞空艇走私者", hint: "飞空艇走私者：在云海航道间游走灰色边界" },
        ]
    },
    {
        group: "黑色侦探", items: [
            { label: "失势警探", hint: "失势警探：被体制抛弃的理想主义者，仍执拗追查真相" },
            { label: "负债侦探", hint: "负债侦探：债主与委托人同样危险，真相常被价格打折" },
        ]
    },
    {
        group: "校园/魔法学院", items: [
            { label: "迟来觉醒", hint: "迟来觉醒：在不合时宜的年纪觉醒天赋，基础薄弱路径曲折" },
            { label: "放逐学徒", hint: "放逐学徒：因一次禁咒实验被逐出学院" },
            { label: "禁书室守夜人", hint: "禁书室守夜人：看守会自己翻页的书与试图逃跑的文字" },
        ]
    },
    {
        group: "社会现实/都市", items: [
            { label: "破产重启", hint: "破产重启：从谷底打包人生，再学一次活着" },
            { label: "夹缝创业者", hint: "夹缝创业者：在红海里寻找微小的蓝" },
            { label: "异乡追梦人", hint: "异乡追梦人：远离故土，梦想常被房租丈量" },
        ]
    },
    {
        group: "神话/宗教", items: [
            { label: "半神私生子", hint: "半神私生子：在凡人与神明的夹缝里寻找归属" },
            { label: "神灵代言人", hint: "神灵代言人：被选中说出不属于自己的话" },
            { label: "被神遗弃者", hint: "被神遗弃者：曾被眷顾，如今被沉默抛下" },
        ]
    },
];

// 工具函数
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));
const byId = (id) => document.getElementById(id);

function setText(id, text) { byId(id).value = text.trim() + "\n"; }
async function copyFrom(targetId) {
    const el = byId(targetId);
    try {
        await navigator.clipboard.writeText(el.value || "");
    } catch (_) {
        el.select(); document.execCommand("copy");
    }
}

// 选项卡行为
function setupTabs() {
    $$(".tab").forEach((btn) => {
        btn.addEventListener("click", () => {
            $$(".tab").forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");
            const key = btn.dataset.tab;
            $$(".tab-panel").forEach((p) => p.classList.add("hidden"));
            byId(`panel-${key}`).classList.remove("hidden");
        });
    });
}

function initWorldCustomControls() {
    const selects = $$("#panel-world select[data-custom-wrapper]");
    selects.forEach((sel) => {
        const wrapId = sel.dataset.customWrapper;
        const inputId = sel.dataset.customInput;
        const wrap = wrapId ? byId(wrapId) : null;
        const input = inputId ? byId(inputId) : null;
        if (!wrap || !input) return;
        const sync = () => {
            const useCustom = sel.value === "自定义";
            wrap.classList.toggle("hidden", !useCustom);
            wrap.setAttribute("aria-hidden", useCustom ? "false" : "true");
            input.disabled = !useCustom;
        };
        sync();
        sel.addEventListener("change", sync);
    });
}

function readWorldSelection(selectId) {
    const sel = byId(selectId);
    if (!sel) return "";
    if (sel.value === "自定义") {
        const inputId = sel.dataset.customInput;
        const input = inputId ? byId(inputId) : null;
        const fallback = sel.dataset.customFallback || "用户自定义设定";
        const text = (input && !input.disabled && input.value.trim()) || "";
        return text || fallback;
    }
    return sel.value;
}

// 填充多选选项
function populateMultiSelect(id, options) {
    const sel = byId(id);
    sel.innerHTML = options.map((o) => `<option value="${o}">${o}</option>`).join("");
}

// 角色行生成
let charCounter = 0;
function newCharItem() {
    const idx = ++charCounter;
    const wrap = document.createElement("div");
    wrap.className = "char-item";
    wrap.dataset.index = String(idx);
    wrap.innerHTML = `
		<div class="char-grid">
			<div class="field">
				<label>性别</label>
				<select data-k="gender">
					<option value="男">男</option>
					<option value="女">女</option>
					<option value="非二元">非二元</option>
					<option value="不提及">不提及</option>
				</select>
			</div>
			<div class="field">
				<label>名字</label>
                <select data-k="name">
                    <option value="AI 取名">AI 取名</option>
                    <option value="不直接称名">不直接称名</option>
                    <option value="自定义">自定义</option>
                </select>
                <input data-k="nameCustom" class="hidden" placeholder="输入角色名字" />
			</div>
			<div class="field">
				<label>外在人格（多选）</label>
                <select data-k="outerSel" multiple size="6"></select>
			</div>
            <div class="field">
                <label>自定义外在人格（逗号分隔，可选）</label>
                <input data-k="outerCustom" placeholder="例如：冷静, 自信, 幽默" />
            </div>
			<div class="field">
				<label>内在人格（多选）</label>
                <select data-k="innerSel" multiple size="6"></select>
			</div>
            <div class="field">
                <label>自定义内在人格（逗号分隔，可选）</label>
                <input data-k="innerCustom" placeholder="例如：敏感, 野心, 罪疚" />
            </div>
			<div class="field">
				<label>背景选项</label>
                <select data-k="backstory"></select>
			</div>
			<div class="field">
				<label>角色定位</label>
				<select data-k="role">
					<option value="主角">主角</option>
					<option value="反派">反派</option>
					<option value="配角">配角</option>
				</select>
			</div>
		</div>
		<div class="row-actions">
			<button type="button" class="secondary" data-action="dup">复制一行</button>
			<button type="button" class="secondary" data-action="del">删除</button>
		</div>`;
    return wrap;
}

function readCharItem(item) {
    const get = (k) => item.querySelector(`[data-k="${k}"]`);
    const pick = (sel) => Array.from(sel.selectedOptions || []).map(o => o.value);
    const parseList = (s) => (s || "")
        .split(/[，,]/)
        .map(x => x.trim())
        .filter(Boolean);
    const uniq = (arr) => Array.from(new Set(arr));

    const outer = uniq([
        ...pick(get("outerSel")),
        ...parseList(get("outerCustom")?.value || ""),
    ]).join(", ");
    const inner = uniq([
        ...pick(get("innerSel")),
        ...parseList(get("innerCustom")?.value || ""),
    ]).join(", ");

    // 背景：优先取选项的 title 作为完整描述；若无则用值；若值为 AI 生成则使用固定句式
    const bsSel = get("backstory");
    const bsOpt = bsSel?.selectedOptions?.[0];
    const aiText = "由AI生成符合世界观并能合理塑造以上人物性格的背景故事";
    const backstory = ((bsOpt?.value || bsSel?.value) === "AI 生成")
        ? aiText
        : ((bsOpt?.title?.trim()) || bsOpt?.value || bsSel.value || aiText);

    return {
        gender: get("gender").value,
        name: (() => {
            const mode = get("name").value;
            if (mode === "自定义") {
                const v = (get("nameCustom")?.value || "").trim();
                return v || "AI 取名";
            }
            return mode;
        })(),
        outer,
        inner,
        backstory,
        role: get("role").value,
    };
}

// 模板生成函数
function tplWorld({ fantasy, time, scale, ideology }) {
    return `你是资深世界观设定作家。请依据以下条件生成“详细世界观参考”，使用 Markdown 纯文本：

- 幻想程度：${fantasy}
- 时间主题：${time}
- 规模：${scale}
- 意识形态：${ideology}

要求：
1. 结构分为：地理与资源、政治与权力、科技/魔法体系、经济与贸易、文化与宗教、历史与冲突、日常生活。
2. 各节提供明确可用的设定要点与示例，避免空话。
3. 输出仅 Markdown 文本，不包含任何代码块包裹。`;
}

function tplCharacter(c) {
    const avoidGender = c.gender === "不提及" ? "避免使用性别指代和代词" : `性别：${c.gender}`;
    const nameRule = (c.name === "不直接称名")
        ? "不要直接称呼其本名"
        : (c.name === "AI 取名")
            ? "允许由 AI 取名"
            : `固定名字：${c.name}`;
    return `请生成角色详情看板，使用 Markdown 纯文本：

- 角色定位：${c.role}
- ${avoidGender}
- 名字规则：${nameRule}
- 外在人格：${c.outer || "由你补充典型标签"}
- 内在人格：${c.inner || "由你补充潜在动因"}
- 背景：${c.backstory}

板块：
1. 核心一句话形象
2. 外在形象与行为特征（列举）
3. 内在动机、欲望与恐惧（列举）
4. 能力与短板（对立呈现）
5. 关键人际关系（2-4个）
6. 过去事件与创伤（事实化）
7. 当前目标与矛盾
8. 可能弧线（2-3条）`;
}

function tplPlot({ genres, tones, length, pov }) {
    return `你是剧情结构设计师。请基于以下条件生成“整部作品剧情大纲”，使用 Markdown 纯文本：

- 类型：${genres.join(", ") || "由你合理选择"}
- 基调：${tones.join(", ") || "由你确定并保持一致"}
- 篇幅：${length}
- 叙事视角：${pov}

输出：
1. 故事卖点（电梯演讲，<= 80字）
2. 三幕结构主线要点（A1/A2/A3，每幕3-5条）
3. 2-3条重要支线（每条目的、冲突、转折）
4. 角色弧线与主线的交汇点
5. 世界观对剧情的直接影响（3-5点）
6. 篇章节奏与高潮分布（简表）`;
}

function tplChapter1({ length, scenes }) {
    return `你是场景编排教练。请输出“第一章场景拆解”，使用 Markdown 纯文本：

- 章节长度：${length}
- 场景数量：${scenes}

请给出：
1. 章节目标（冲突/钩子）
2. 场景清单（${scenes} 个），每个包含：地点、人物、目的、冲突、转折、悬念/钩子
3. 叙事视角与信息控制建议
4. 风格与节奏提示（与整体基调一致）`;
}

// 初始化与事件绑定
function main() {
    setupTabs();
    populateMultiSelect("plot-genre", GENRES);
    populateMultiSelect("plot-tone", TONES);

    // 初始化角色项中的人格多选选项
    const injectTraitOptions = (wrap) => {
        const outSel = wrap.querySelector('[data-k="outerSel"]');
        const inSel = wrap.querySelector('[data-k="innerSel"]');
        if (outSel) outSel.innerHTML = OUTER_TRAITS.map(t => `<option value="${t}">${t}</option>`).join("");
        if (inSel) inSel.innerHTML = INNER_TRAITS.map(t => `<option value="${t}">${t}</option>`).join("");
    };

    // 注入预设背景选项（含 AI 生成）
    const injectBackstoryOptions = (wrap) => {
        const sel = wrap.querySelector('[data-k="backstory"]');
        if (!sel) return;
        const groupsHtml = PRESET_BACKSTORY_GROUPS.map(g => {
            const options = g.items.map(b => `<option value="${b.label}" title="${b.hint}">${b.label}</option>`).join("");
            return `<optgroup label="${g.group}">${options}</optgroup>`;
        }).join("");
        const tail = `<optgroup label="其他"><option value="AI 生成" title="由AI生成符合世界观并能合理塑造以上人物性格的背景故事">AI 生成</option></optgroup>`;
        sel.innerHTML = groupsHtml + tail;
        // 默认选中 AI 生成 作为占位
        sel.value = "AI 生成";
        // 初始化 select 的悬停提示为当前选中项的 hint
        const syncTitle = () => {
            const opt = sel.selectedOptions && sel.selectedOptions[0];
            sel.title = (opt && opt.title) || "";
        };
        syncTitle();
        sel.addEventListener('change', syncTitle);
    };

    // 复制按钮
    $$("button[data-copy]").forEach((btn) =>
        btn.addEventListener("click", () => copyFrom(btn.dataset.copy))
    );

    // 世界观生成
    initWorldCustomControls();
    byId("wv-generate").addEventListener("click", () => {
        const fantasy = readWorldSelection("wv-fantasy");
        const time = readWorldSelection("wv-time");
        const scale = readWorldSelection("wv-scale");
        const ideology = readWorldSelection("wv-ideology");
        setText("wv-output", tplWorld({ fantasy, time, scale, ideology }));
    });

    // 角色清单：新增/删除/复制
    const list = byId("char-list");
    function addChar(item) {
        const node = item || newCharItem();
        list.appendChild(node);
        // 填充人格多选枚举
        injectTraitOptions(node);
        // 填充背景预设
        injectBackstoryOptions(node);
        // 初始化名字自定义输入显隐
        updateNameCustomVisibility(node);
    }
    byId("char-add").addEventListener("click", () => addChar());
    // 初始至少一行
    addChar();
    list.addEventListener("click", (e) => {
        const btn = e.target.closest("button[data-action]");
        if (!btn) return;
        const item = btn.closest(".char-item");
        if (!item) return;
        const act = btn.dataset.action;
        if (act === "del") item.remove();
        if (act === "dup") {
            const clone = newCharItem();
            // 填充选项后再拷贝值
            injectTraitOptions(clone);
            injectBackstoryOptions(clone);
            const srcFields = item.querySelectorAll("[data-k]");
            srcFields.forEach((srcEl) => {
                const k = srcEl.getAttribute("data-k");
                const dstEl = clone.querySelector(`[data-k="${k}"]`);
                if (!dstEl) return;
                if (srcEl.tagName === "SELECT" && srcEl.multiple) {
                    const values = Array.from(srcEl.selectedOptions).map(o => o.value);
                    Array.from(dstEl.options).forEach(o => { o.selected = values.includes(o.value); });
                } else if (srcEl.tagName === "SELECT") {
                    dstEl.value = srcEl.value;
                } else {
                    dstEl.value = srcEl.value;
                }
            });
            // 根据选择更新自定义名字输入显隐
            updateNameCustomVisibility(clone);
            item.after(clone);
        }
    });

    // 名字选择变化时，切换自定义输入显隐（事件委托）
    list.addEventListener("change", (e) => {
        const sel = e.target.closest('select[data-k="name"]');
        if (!sel) return;
        const wrap = sel.closest('.char-item');
        if (!wrap) return;
        updateNameCustomVisibility(wrap);
    });

    // 工具：根据选择显示/隐藏自定义名字输入
    function updateNameCustomVisibility(wrap) {
        const sel = wrap.querySelector('select[data-k="name"]');
        const input = wrap.querySelector('input[data-k="nameCustom"]');
        if (!sel || !input) return;
        const custom = sel.value === "自定义";
        if (custom) {
            input.classList.remove("hidden");
        } else {
            input.classList.add("hidden");
        }
    }

    // 角色生成
    byId("char-generate").addEventListener("click", () => {
        const items = Array.from(list.querySelectorAll(".char-item"));
        const prompts = items.map((it) => tplCharacter(readCharItem(it)));
        setText("char-output", prompts.join("\n\n---\n\n"));
    });

    // 剧情生成
    byId("plot-generate").addEventListener("click", () => {
        const genres = Array.from(byId("plot-genre").selectedOptions).map((o) => o.value);
        const tones = Array.from(byId("plot-tone").selectedOptions).map((o) => o.value);
        const length = byId("plot-length").value;
        const pov = byId("plot-pov").value;
        setText("plot-output", tplPlot({ genres, tones, length, pov }));
    });

    // 第一章
    byId("c1-generate").addEventListener("click", () => {
        const length = byId("c1-length").value;
        const scenes = byId("c1-scenes").value;
        setText("c1-output", tplChapter1({ length, scenes }));
    });
}

document.addEventListener("DOMContentLoaded", main);

