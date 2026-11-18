# 实验报告自动生成 Agent — 使用说明

## 文件说明

- `prompt.md` — 系统提示词, 定义报告的完整格式规范、数据处理口径和编译验证流程
- `guidelines.md` — 检查清单, 用于生成完成后的逐项核对 (与 prompt.md 不重复)
- `README.md` — 本文件

Typst 模板库为 `@local/experiment:0.1.0`, 源文件 (`l.typ`, `typst.toml`) 位于:
`C:\Users\liclo4\AppData\Local\typst\packages\local\experiment\0.1.0\`

以上文件也可在个人主页的实验报告页面 "使用的prompt和模板" 栏目在线获取:
https://kclo4-li.github.io/#/lab

## 使用方法

### 输入

1. **提示词**: 将 `prompt.md` 作为系统提示或上下文, `guidelines.md` 用于完成后核对
2. **实验讲义**: PDF/文本格式
3. **实验数据**: 原始数据文件 (.data, .csv, .Spe 等) 和/或数据照片; 若数据包已含最终分析图和拟合参数, 直接引用其结果
4. **额外注意事项** (可选): 数据处理特殊要求、需要重点讨论的内容等

### PDF 讲义处理

Qoder 的 Read 工具可能误判 PDF 为加密文件, 先用本地工具提取文本:

```bash
node D:\A\pdf-reader.mjs "实验讲义.pdf" "实验讲义.txt"
```

### 运行环境

Python/Node 均在 conda sci 环境中, 先激活再使用:

```bash
source /d/Tools/etc/profile.d/conda.sh && conda activate sci
```

### Agent 运行流程

1. **分析阶段**: 解析讲义和数据, 确认数据口径 (已有最终分析图则直接引用)
2. **展示思路**: 输出数据处理思路 (拟合方法、预期图表、重点难点)
3. **生成文件**: 创建工程文件夹 (主报告、Python 脚本、参考文献; 预习报告仅明确要求时生成)
4. **编译验证**: `typst compile` 零报错后, 逐页检查 PDF 的公式渲染和排版
5. **清理**: 只保留最终版本文件, 删除中间脚本

### 编译

```bash
typst compile <实验名称>.typ
```

注意: 需要本地模板包 `@local/experiment:0.1.0`. 该包不是 preview 仓库包, 不能用命令安装,
将 `l.typ` 和 `typst.toml` 放入本地包目录即可 (Windows):
`%LOCALAPPDATA%\typst\packages\local\experiment\0.1.0\`

## 自定义

- 如需修改作者信息, 在 prompt.md 中搜索 `PB24000070` 并替换
- 如需调整页眉栏宽, 修改 `part` 参数
- 如需添加新的引用格式, 参考已归档报告的 r.yaml 文件
