"""Regenerate the column subset of Noto Sans JP: python3 design/fonts/subset_column.py

Run after adding or editing column articles. Characters are collected from the
column pages, components and data files; kana, ASCII and common punctuation are
always included so small edits do not fall back to system fonts.
Requires fonttools[woff].
"""
from pathlib import Path
from fontTools import subset
from fontTools.ttLib import TTFont
from fontTools.varLib import instancer

root = Path(__file__).resolve().parents[2]
source = root / "design/fonts/source/NotoSansJP-variable.ttf"
sources = [
    *(root / "src/app/column").rglob("*.tsx"),
    *(root / "src/app/column").rglob("*.ts"),
    *(root / "src/app/design").rglob("*.tsx"),
    *(root / "src/components").glob("Column*.tsx"),
    *(root / "src/lib").glob("*.ts"),
    root / "src/components/DetailShell.tsx",
    root / "src/app/lp/SiteHeader.tsx",
]
text = "".join(p.read_text() for p in sources if p.exists())
ranges = [(0x20, 0x7E), (0x3000, 0x303F), (0x3041, 0x309F), (0x30A0, 0x30FF), (0xFF01, 0xFF5E), (0x2010, 0x2027), (0x2190, 0x21FF), (0x2460, 0x2473), (0x25A0, 0x25FF)]
text += "".join(chr(n) for a, b in ranges for n in range(a, b + 1))

for weight in (400, 700):
    font = TTFont(source)
    font = instancer.instantiateVariableFont(font, {"wght": weight})
    options = subset.Options()
    options.flavor = "woff"
    options.layout_features = ["*"]
    sub = subset.Subsetter(options)
    sub.populate(text=text)
    sub.subset(font)
    font.flavor = "woff"
    target = root / f"public/fonts/column/noto-sans-jp-column-{weight}-v1.woff"
    font.save(target)
    print(target.name, target.stat().st_size, "bytes", len(font.getBestCmap()), "glyphs")
