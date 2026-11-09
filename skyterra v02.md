# SKYTERRA NUSANTARA

## Company Profile Design System

> **Status:** Initial design direction · Version 0.1\
> **Purpose:** Visual foundation for the Skyterra Nusantara company
> profile. This document can be expanded as content, layout, and brand
> requirements are finalized.

------------------------------------------------------------------------

## 1. Brand direction

The visual identity should feel **modern, precise, calm, and
trustworthy**. It should communicate geospatial expertise and technical
capability without looking overly industrial or visually aggressive.

The design takes its cues from the existing Skyterra Nusantara logo: -
**Ivory** provides a warm, quiet canvas. - **Soft blue** carries the
sense of sky, technology, accuracy, and forward movement. - **Soft
green** brings in terrain, nature, and spatial understanding. - **Deep
navy** anchors the identity and keeps text and key information
authoritative.

Overall direction: **minimal, editorial, and technology-led**, with
generous whitespace, restrained color, and clear information hierarchy.

## 2. Color palette

The primary canvas is an ivory-tinted white, not pure white. The blue
and green are softened from the logo into pastel-leaning supporting
colors. Deep navy is retained as the main text and contrast color.

  ------------------------------------------------------------------------
  Role             Color name                         HEX Intended use
  ---------------- ---------------- --------------------- ----------------
  Primary          Warm Ivory                   `#F7F5EF` Main page
                                                          background,
                                                          large sections

  Primary surface  Soft Porcelain               `#FCFBF8` Cards, content
                                                          panels, elevated
                                                          surfaces

  Secondary        Sky Blue                     `#A9C8E0` Secondary
                                                          highlights,
                                                          icons, diagrams,
                                                          subtle section
                                                          accents

  Secondary strong Logo Blue                    `#1769A6` Links, active
                                                          states, selected
                                                          buttons,
                                                          restrained
                                                          emphasis

  Tertiary         Sage Teal                    `#A8CEC2` Supporting
                                                          accents, data
                                                          visuals,
                                                          nature/terrain
                                                          references

  Tertiary strong  Logo Teal                    `#258B80` Secondary
                                                          emphasis,
                                                          charts, small
                                                          graphic elements

  Anchor           Deep Navy                    `#102C46` Headings, body
                                                          text,
                                                          navigation,
                                                          footer

  Neutral          Muted Slate                  `#647482` Secondary text,
                                                          captions,
                                                          metadata

  Border           Warm Stone                   `#E7E3DA` Dividers, card
                                                          borders, subtle
                                                          outlines
  ------------------------------------------------------------------------

### Color balance

Suggested starting ratio across the overall interface: - **70%** Warm
Ivory / Soft Porcelain - **15%** Deep Navy and neutral text - **10%**
Sky Blue - **5%** Sage Teal

Blue and green should behave as accents, not compete with the ivory
background. Use the stronger logo-derived shades sparingly for
interactive elements and moments that need more contrast.

### Color usage rules

-   Do not use pure white (`#FFFFFF`) as the dominant page background.
-   Use Warm Ivory for the main canvas and Soft Porcelain when a surface
    needs to stand apart.
-   Avoid placing long paragraphs directly on pastel blue or pastel
    green.
-   Use Deep Navy for text on light backgrounds.
-   Do not use pastel colors for small text, thin text, or essential
    interface states unless contrast is verified.
-   Gradients are optional and should be subtle. If used, keep them
    within the blue-to-teal family and reserve them for decorative
    graphics or hero details.

## 3. Typography

Typography should feel contemporary, technical, and highly readable.

**Suggested font pairing** - **Headings:** Manrope - **Body and UI:**
Inter

If a single-family system is preferred, use **Manrope** throughout and
adjust weights to create hierarchy.

### Type hierarchy

  -----------------------------------------------------------------------
  Element                             Suggested style
  ----------------------------------- -----------------------------------
  Hero headline                       Manrope, bold/extra-bold, large,
                                      tight line-height

  Section heading                     Manrope, bold, clear and compact

  Subheading                          Manrope, semibold

  Body copy                           Inter, regular, comfortable
                                      line-height

  Labels / metadata                   Inter, medium, slightly
                                      letter-spaced

  Technical figures                   Inter, medium or semibold; use
                                      tabular numerals where available
  -----------------------------------------------------------------------

Avoid excessive uppercase text. Reserve letter-spaced uppercase styling
for short labels, navigation categories, and small section identifiers.

## 4. Layout and composition

-   Use a spacious editorial layout with a clear grid.
-   Keep generous margins and consistent vertical spacing.
-   Alternate between open text sections and structured visual sections
    to prevent the profile from feeling like a long brochure.
-   Prefer clean rectangular cards with subtle borders over heavy
    shadows.
-   Use rounded corners sparingly and consistently.
-   Keep diagrams, maps, project imagery, and technical visuals crisp
    and uncluttered.
-   Use asymmetrical compositions where appropriate, especially in the
    hero and capability sections, while preserving alignment and
    readability.

## 5. UI components

### Buttons

-   **Primary button:** Deep Navy background with ivory text.
-   **Secondary button:** Transparent or ivory background with Deep Navy
    text and a Warm Stone border.
-   **Accent button:** Logo Blue for selected high-priority actions
    only.
-   Keep button shapes simple, with modest corner radius.

### Cards

-   Background: Soft Porcelain.
-   Border: Warm Stone, thin and subtle.
-   Text: Deep Navy with Muted Slate for supporting copy.
-   Use Sky Blue or Sage Teal only for small icon backgrounds, category
    markers, or data accents.

### Navigation

-   Use a light ivory surface.
-   Keep labels concise.
-   Use Deep Navy for default text and Logo Blue for the active state.
-   Avoid a heavy, dark navigation bar unless a later page-specific
    direction calls for it.

### Data visualization

-   Use Logo Blue and Logo Teal as the main data series colors.
-   Use Sky Blue and Sage Teal for supporting series or filled areas.
-   Use Deep Navy for labels and axes.
-   Ensure charts remain understandable without relying on color alone.

## 6. Photography and visual assets

Photography should reinforce the company's real capabilities and
operating environments.

Prioritize: - Aerial and drone-based survey imagery. - Terrain,
infrastructure, coastlines, and project environments. - LiDAR point
clouds, orthomosaics, 3D models, and spatial data outputs. - Field
operations and equipment, photographed in a clean and professional way.

Image treatment: - Prefer natural lighting and realistic colors. - Avoid
excessive filters, oversaturation, and generic corporate stock
photography. - Use consistent crops and aspect ratios within the same
section. - Let technical imagery remain legible. Do not place decorative
overlays over important data.

## 7. Brand expression

**Desired impression:** precise, capable, forward-looking, grounded.

The company profile should balance two sides of the brand: 1. **Sky:**
aerial perspective, technology, innovation, and forward movement. 2.
**Terra:** land, infrastructure, environment, and spatial understanding.

Keep the tone confident and clear. Avoid exaggerated claims, overly
futuristic visual effects, and unnecessary decorative elements.

## 8. Initial design tokens

``` css
:root {
  --color-primary: #F7F5EF;
  --color-surface: #FCFBF8;

  --color-blue-soft: #A9C8E0;
  --color-blue: #1769A6;

  --color-green-soft: #A8CEC2;
  --color-green: #258B80;

  --color-navy: #102C46;
  --color-text-muted: #647482;

  --color-border: #E7E3DA;
}
```

## 9. Current decisions and open items

### Confirmed direction

-   Main/primary color: warm ivory, not plain white.
-   Secondary color family: soft pastel blue, derived from the logo.
-   Tertiary color family: soft pastel green/teal, derived from the
    logo.
-   Overall style: minimal, spacious, modern, and professional.

### To define in the next iteration

-   Company profile format: website, PDF, or both.
-   Final page/section structure and content.
-   Preferred typography, if different from the suggestions above.
-   Photography and project portfolio selection.
-   Whether the visual direction should lean more corporate, editorial,
    or technology-focused.
-   Final accessibility/contrast checks once actual layouts are
    available.

------------------------------------------------------------------------

*This is a starting design system, not a locked brand guideline. Colors
and component rules can be refined as the company profile takes shape.*


## 10. Website visual style

### Core direction: Modern Geospatial Editorial

The website should feel like a contemporary geospatial technology studio: precise and credible, but visually expressive. Combine the clarity of a premium technology website with the visual storytelling of an architecture or design publication.

The experience should be:
- **Light-first:** use the approved Warm Ivory palette as the foundation. Do not introduce a dark-mode design.
- **Editorial:** use confident typography, generous whitespace, strong image compositions, and varied section layouts.
- **Visual-led:** let real project imagery, aerial perspectives, maps, point clouds, and 3D outputs communicate capability.
- **Technical, but approachable:** use restrained interface details inspired by mapping, coordinates, grids, contours, and spatial data.
- **Calm and deliberate:** avoid crowded layouts, excessive gradients, noisy backgrounds, and unnecessary animation.

### 10.1 Overall page composition

- Use a centered content container with a consistent maximum width and generous side gutters.
- Build a clear vertical rhythm between sections. Give major sections room to breathe.
- Alternate between full-width visual moments and narrower editorial content blocks.
- Use asymmetrical two-column layouts where they improve storytelling, especially for the hero, company introduction, and service highlights.
- Keep text line lengths comfortable. Avoid very wide paragraphs.
- Use subtle section separators, thin borders, and changes between Warm Ivory and Soft Porcelain to establish structure without heavy panels.

### 10.2 Header and navigation

- Use a clean, light header on a Warm Ivory or Soft Porcelain surface.
- Place the logo on the left and primary navigation on the right.
- Keep navigation concise: About, Services, Projects, and Contact are a suitable starting point.
- Use Deep Navy for default navigation text and Logo Blue for hover and active states.
- The header may become sticky after scrolling, with a subtle background and border treatment.
- On mobile, use a compact menu with clear touch targets.
- Avoid a heavy dark navigation bar or oversized navigation effects.

### 10.3 Homepage hero

The hero should immediately establish Skyterra as a geospatial technology company.

**Initial headline direction:**

> Mapping the future from above.

**Supporting descriptor:**

> GEOSPATIAL · AERIAL · DIGITAL

- Use a strong editorial headline with a large but controlled type scale.
- Pair the text with one high-quality visual: aerial landscape, infrastructure survey, point cloud, or a carefully selected 3D mapping output.
- Consider an asymmetric split layout, with text occupying one side and a large image or visual composition occupying the other.
- Keep the primary call to action clear and understated, for example “Explore our capabilities”.
- Avoid generic animated blobs, stock-tech illustrations, and excessive decorative gradients.
- The hero should remain understandable and visually compelling on mobile, with the image repositioned below or behind the text as appropriate.

### 10.4 Section styles

**Company introduction**
- Use a short, confident editorial statement rather than a long corporate paragraph.
- Pair the statement with a supporting project image, field photograph, or spatial visualization.
- Use typography and whitespace to create hierarchy.

**Services and capabilities**
- Present services in a structured grid or editorial list.
- Each item should have a clear title, concise explanation, and optional technical visual or simple line icon.
- Use small blue or teal accents to distinguish categories.
- Avoid making every service a large, identical colored card.

**Projects and portfolio**
- Treat the project portfolio as a major visual feature of the website.
- Use large images and varied image ratios where appropriate, while keeping the overall grid aligned.
- Include project title, location, service category, and a concise description.
- Prioritize authentic project imagery and actual deliverables over generic stock photos.
- Provide enough image space for aerial photography, orthomosaics, point clouds, terrain models, and 3D outputs to be appreciated.

**Technology and workflow**
- Explain the workflow with a clean sequence or diagram.
- Use restrained technical motifs such as coordinate labels, grid lines, elevation values, contour lines, and data annotations.
- Ensure these details support the explanation rather than becoming decoration.

**Contact and footer**
- Keep the contact section direct and easy to use.
- Use Deep Navy selectively for a strong closing section or footer, while retaining the light-first identity across the main website.
- Include clear contact details, relevant navigation links, and company information.

### 10.5 Imagery and technical visual treatment

- Prefer real Skyterra project assets wherever available.
- Use aerial imagery and landscape photography as large visual anchors.
- Show technical outputs at a scale where details can be understood.
- Use consistent image corner treatments and avoid excessive rounded-card styling.
- Do not apply strong color filters that distort the original project imagery.
- Where text overlays are necessary, ensure readability with a restrained overlay rather than placing text directly over visually busy imagery.

### 10.6 Interaction and motion

Motion should make the website feel polished, not animated for its own sake.

Recommended:
- Subtle fade-up or fade-in on section entry.
- Gentle image reveal or clipping transitions.
- Small hover shifts or color transitions on links and buttons.
- Smooth but restrained navigation transitions.
- Light parallax only for selected hero or portfolio imagery, and only when it does not affect usability.

Avoid:
- Constant looping animations.
- Aggressive parallax or scroll-jacking.
- Large bouncing elements.
- Long loading animations.
- Motion that delays access to content.

Respect reduced-motion preferences and keep all essential information available without animation.

### 10.7 Responsive behavior

- Design mobile layouts intentionally rather than simply shrinking desktop layouts.
- Collapse multi-column sections into a clear single-column reading order.
- Keep navigation, buttons, and interactive elements comfortable for touch.
- Preserve the visual importance of project images while controlling their height on smaller screens.
- Prevent oversized headings from creating awkward line breaks.
- Avoid horizontal overflow, especially in tables, diagrams, and technical visualizations.

### 10.8 Website elements to avoid

- Pure-white backgrounds as the dominant canvas.
- Dark-mode-first or permanently dark page layouts.
- Generic corporate stock photography.
- Excessive glassmorphism, neon effects, and glowing gradients.
- Heavy drop shadows and thick borders.
- Too many rounded cards with identical layouts.
- Dense paragraphs and crowded service lists.
- Decorative technical graphics that look like data but communicate nothing.
- Animation that competes with content.

### 10.9 Website style summary

| Dimension | Direction |
|---|---|
| Visual identity | Modern Geospatial Editorial |
| Theme | Light only |
| Main canvas | Warm Ivory |
| Layout | Spacious, editorial, occasionally asymmetrical |
| Typography | Large, confident headlines; readable body copy |
| Imagery | Real aerial, survey, mapping, and 3D project visuals |
| Components | Minimal, structured, subtle borders |
| Motion | Restrained, smooth, purposeful |
| Overall impression | Precise, premium, calm, technology-led |

*The approved color palette in Section 2 remains unchanged. This section defines how that palette should be expressed through the website experience.*
