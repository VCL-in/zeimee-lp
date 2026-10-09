# Zeimee FDE / Illustrated 04

Current revision: user-approved illustrations, LINE Seed JP Bold/Regular, and LayerX-inspired blue violet (#534DFF), navy (#152632), white, light gray (#F6F6F7) and sky blue (#8DBBFF). [Style preview](style-preview.html) shows this combination; it is not a full LP or a Figma screenshot.

The plugin now starts generation automatically on launch. It resolves an available LINE Seed JP family and requires Regular/Bold. Official font files came from https://seed.line.me/src/images/fonts/LINE_Seed_JP.zip on 2026-09-08. The official repository license is retained in assets/fonts/OFL.txt.

Figma currently reports a connection issue affecting saves. Illustrated 04 canvas creation and cloud save are not confirmed. Earlier revision details below are historical where superseded by this note.

Status: Draft; Figma execution and visual review pending.
Updated: 2026-09-08

An editable Figma proposal for an FDE service dedicated to accounting and tax firms. This is a local, network-free authoring tool for the user's specified file. It does not change the running LP.

Target: https://www.figma.com/design/dV3tZXJxm7OrjWwRdUwlJI/Vibe-Coding-Lab?node-id=3192-60

## Direction

- Main reference: Takram — typography, spacing, editorial image composition.
- Supporting reference: Work & Co — collaboration and process narrative.
- Motion reference: Ramp — making workflow changes understandable.
- Pure white, black ink, fine rules and restrained blue accents. White process section.
- User direction: sparse abstract human illustrations close to the supplied LINEヤフーDESIGN references. Tiny dot eyes, solid black hair, thin contours, minimal clothing detail. No realistic photos or detailed manga-like drawings.
- No diagonal ribbons or animated decorative geometric patterns.
- Main headline: 会計の現場から、仕事のしくみを変える。
- Primary action: 事務所の課題を相談する。

## Prepared frames

Desktop 1440px and Mobile 390px, each containing navigation, hero, FDE explanation, three service themes, collaboration/process, FAQ, consultation and footer. Separate boards explain the design direction and a three-state motion storyboard. Motion is a storyboard, not a working scroll animation.

Uses the file's existing Zeimee logo components. Creates namespaced local color variables, text styles and an editable consultation button component. All new top-level frames are placed to the right of existing content. Existing content is not rewritten. No claims of quantified results or universal accounting-software compatibility are introduced.

## Build and run

Run `python3 build.py`, then use Figma Desktop's Plugins → Development → Import plugin from manifest, selecting `manifest.json`. Run **Zeimee FDE — Editorial concept**. Click **Build illustrated proposal** once to create all 14 sections/boards and run the layout audit. Review PC and mobile layouts after completion. The tool refuses to initialize twice if the proposal root already exists.

The built-in Figma connector reached its plan's tool-call quota during read-only discovery. This local authoring route uses Figma's normal development-plugin workflow. The connector made no canvas writes in that attempt.

## Current illustration assets

- `assets/fieldwork-lineart-v3.png`: two abstract colleagues discussing a sheet.
- `assets/review-lineart-v3.png`: abstract person reviewing a tablet.
- Original fictional images generated and refined with the built-in imagegen tool on 2026-09-08. Raster PNG; people are not editable vectors.
- [Full prompts](ILLUSTRATION_PROMPTS.md). User references guide style only; their branded slide assets are not embedded.
- Both images use FIT without cropping; final art selection and Figma visual inspection remain pending.

## Previous photographic assets — Superseded

`assets/fieldwork-desk.png`: original image generated with the built-in imagegen tool on 2026-09-08. Fictional editorial work scene; not evidence of a client engagement. Prompt:

> Use case: photorealistic-natural. Asset: original editorial photograph for a Japanese accounting-firm FDE consulting website concept. Landscape 3:2 image. Quiet overhead / high oblique close view of a warm pale oak desk, two people's hands genuinely collaborating on printed accounting worksheets and a simple pencil workflow sketch in an open notebook, a partial thin graphite laptop at upper right, one dark blue pen, neat binder clip, small stack of receipts. Faces not visible. Documents contain only indistinct fine print and generic ruled tables, NO legible personal/client data or logos. Natural raking morning window light and soft real shadows, warm-neutral film color, refined Japanese design-journal art direction, tactile paper grain, restrained composition with breathing room, candid not staged stock, extremely realistic hands. No decorative geometry, no gradients, no neon AI imagery, no overlaid text or branding. This is a fictional illustrative work scene, not a real client.

`assets/collaboration-concept.png`: existing original AI concept image copied from `public/lp/fde-collaboration-v2.png`; people around a desk, not a real client testimonial.

These photographic assets are retained only as history. Illustrated 03 does not embed them. The photographic direction was superseded by the user’s explicit illustration instruction.

## Verification

- JavaScript syntax checked with `node --check code.js`.
- Editorial 02 PC and mobile frames were observed in Figma on 2026-09-08.
- Illustrated 03 launch was attempted. The plugin container appears in accessibility state, but its controls/content do not render in available UI observations; Illustrated 03 canvas execution and visual review are not confirmed.
