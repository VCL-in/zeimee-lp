from pathlib import Path
import base64

root = Path(__file__).resolve().parent
prefix = ""
for name, filename in [("FIELDWORK_B64", "fieldwork-lineart-v3.png"), ("REVIEW_B64", "review-lineart-v3.png")]:
    data = base64.b64encode((root / "assets" / filename).read_bytes()).decode()
    prefix += f'const {name}="{data}";\n'
(root / "code.js").write_text(prefix + (root / "source.js").read_text())
print("Built code.js from source.js and local concept assets")
