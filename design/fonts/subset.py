"""Regenerate the optional page-content subset: python3 design/fonts/subset.py.
Requires fonttools[woff]. Full LINE Seed JP remains as fallback for new text.
"""
from pathlib import Path
from fontTools import subset
root = Path(__file__).resolve().parents[2]
text = ''.join(p.read_text() for p in (root / 'src').rglob('*') if p.suffix in {'.tsx', '.ts'})
text += ''.join(p.read_text() for p in (root / 'public/lp/tools').glob('*.svg'))
text += ''.join(chr(n) for n in range(32, 127))
for weight in [400, 700, 800]:
    source = root / f'node_modules/@fontsource/line-seed-jp/files/line-seed-jp-japanese-{weight}-normal.woff2'
    font = subset.load_font(str(source), subset.Options())
    sub = subset.Subsetter()
    sub.populate(text=text)
    sub.subset(font)
    font.flavor = 'woff2'
    target = root / f'public/fonts/line-seed-jp-site-{weight}.woff2'
    font.save(target)
    print(target.name, target.stat().st_size)
