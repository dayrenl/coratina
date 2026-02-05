# Font Substitution Plan: Cinzel → Forum
## Replacing Display Font Across Coratina

> [!IMPORTANT]
> This plan outlines the complete substitution of **Cinzel** with **Forum** for all display typography, specifically the "CORATINA" logo and background "I" watermark.

---

## 📊 Current State Analysis

### Font Usage Breakdown

| Element | Current Font | Class | Location |
|---------|--------------|-------|----------|
| **"CORATINA" Title** | Cinzel | `.font-display` | Hero section |
| **Background "I"** | Cinzel | `.font-display` | Hero section |
| **"EPILOGUE" Title** | Cinzel | `.font-display` | Epilogue section |
| **Roman Numerals (labels)** | Cinzel | `.font-roman` | Throughout |
| **Section Headers** | Cinzel | `.font-display` | Various sections |

### Current Font Definition

**In [global.css](file:///Users/qn202f/.gemini/antigravity/scratch/coratina-blog/src/styles/global.css):**

```css
/* Current */
--font-family-display: 'Cinzel', serif;

.font-display {
    font-family: var(--font-family-display);
}

.font-roman {
    font-family: var(--font-family-display);
    text-transform: uppercase;
}
```

**Google Fonts Import:**
```css
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800;900&...');
```

---

## 🎨 Font Comparison: Cinzel vs Forum

### **Cinzel**
- **Style**: Classical Roman-inspired serif
- **Character**: Bold, commanding, architectural
- **Weights**: 400, 500, 600, 700, 800, 900
- **Best For**: Monumental titles, strong presence
- **Vibe**: Traditional, authoritative, academic

### **Forum**
- **Style**: Ancient Roman inscription serif
- **Character**: Elegant, refined, historical
- **Weights**: 400 (single weight)
- **Best For**: Classical elegance, authentic Roman aesthetic
- **Vibe**: Timeless, sophisticated, archaeological

### Visual Characteristics

**Forum Advantages:**
- ✅ More authentic Roman inscription feel
- ✅ Lighter, more elegant appearance
- ✅ Better letter spacing for readability
- ✅ Unique, distinctive character
- ✅ Pairs beautifully with Cormorant Garamond

**Considerations:**
- ⚠️ Only one weight (400) — less flexibility
- ⚠️ May need font-weight adjustments in CSS
- ⚠️ Lighter appearance may require size adjustments

---

## 🎯 Proposed Changes

### **Phase 1: Font Import & Definition**

#### Update Google Fonts Import
**File:** [global.css](file:///Users/qn202f/.gemini/antigravity/scratch/coratina-blog/src/styles/global.css) (Line 32)

**Before:**
```css
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800;900&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=Tenor+Sans&display=swap');
```

**After:**
```css
@import url('https://fonts.googleapis.com/css2?family=Forum&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=Tenor+Sans&display=swap');
```

**Changes:**
- Remove: `Cinzel:wght@400;500;600;700;800;900`
- Add: `Forum`

---

#### Update CSS Custom Property
**File:** [global.css](file:///Users/qn202f/.gemini/antigravity/scratch/coratina-blog/src/styles/global.css) (Line 17)

**Before:**
```css
--font-family-display: 'Cinzel', serif;
```

**After:**
```css
--font-family-display: 'Forum', serif;
```

---

### **Phase 2: Font Weight Adjustments**

Since Forum only has one weight (400), we need to ensure all elements using `font-display` don't rely on heavier weights.

#### Update Book Title Styling
**File:** [global.css](file:///Users/qn202f/.gemini/antigravity/scratch/coratina-blog/src/styles/global.css) (Line 194-203)

**Before:**
```css
.book-title {
    font-size: clamp(3rem, 12vw, 14rem);
    font-weight: 700;
    letter-spacing: 0.05em;
    line-height: 0.82;
    opacity: 0;
    transform: translateY(50px);
    animation: academicFadeIn 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards;
}
```

**After:**
```css
.book-title {
    font-size: clamp(3rem, 12vw, 14rem);
    font-weight: 400; /* Forum only has 400 weight */
    letter-spacing: 0.08em; /* Slightly increased for Forum's characteristics */
    line-height: 0.82;
    opacity: 0;
    transform: translateY(50px);
    animation: academicFadeIn 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards;
}
```

**Changes:**
- `font-weight: 700` → `font-weight: 400`
- `letter-spacing: 0.05em` → `letter-spacing: 0.08em` (Forum benefits from more spacing)

---

### **Phase 3: Visual Compensation**

Forum is lighter than Cinzel, so we may need to adjust sizing or add subtle effects to maintain visual impact.

#### Option A: Increase Font Size Slightly
```css
.book-title {
    font-size: clamp(3.2rem, 13vw, 15rem); /* Slightly larger */
}
```

#### Option B: Add Subtle Text Shadow (Optional)
```css
.book-title {
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.05); /* Very subtle depth */
}
```

#### Option C: Adjust Letter Spacing
```css
.book-title {
    letter-spacing: 0.1em; /* More spacious, elegant */
}
```

**Recommendation:** Start with Option A + adjusted letter-spacing, test, then add Option B if needed.

---

### **Phase 4: Specific Element Adjustments**

#### Background "I" Watermark
**File:** [index.astro](file:///Users/qn202f/.gemini/antigravity/scratch/coratina-blog/src/pages/index.astro) (Line 103-104)

**Current:**
```astro
<span class="text-[20rem] sm:text-[35rem] md:text-[50rem] lg:text-[65rem] font-display font-light leading-none text-charcoal opacity-[0.05] sm:opacity-[0.08]">I</span>
```

**Considerations:**
- `font-light` (300 weight) won't work with Forum (only has 400)
- May need to adjust opacity to compensate for lighter appearance

**After:**
```astro
<span class="text-[20rem] sm:text-[35rem] md:text-[50rem] lg:text-[65rem] font-display leading-none text-charcoal opacity-[0.06] sm:opacity-[0.10]">I</span>
```

**Changes:**
- Remove `font-light` (not available in Forum)
- Increase opacity slightly: `0.05 → 0.06`, `0.08 → 0.10`

---

#### EPILOGUE Title
**File:** [index.astro](file:///Users/qn202f/.gemini/antigravity/scratch/coratina-blog/src/pages/index.astro) (Line 400)

**Current:**
```astro
<h2 class="text-charcoal font-display text-7xl md:text-8xl lg:text-9xl my-12 leading-[0.85] tracking-tighter">
  EPILOGUE
</h2>
```

**After:**
```astro
<h2 class="text-charcoal font-display text-7xl md:text-8xl lg:text-9xl my-12 leading-[0.85] tracking-normal">
  EPILOGUE
</h2>
```

**Changes:**
- `tracking-tighter` → `tracking-normal` (Forum needs more breathing room)

---

## 📝 Implementation Checklist

### Step 1: Update Font Import (5 min)
- [ ] Update Google Fonts URL in `global.css`
- [ ] Remove Cinzel weights
- [ ] Add Forum font
- [ ] Test font loads correctly

### Step 2: Update CSS Variables (2 min)
- [ ] Change `--font-family-display` to `'Forum', serif`
- [ ] Verify `.font-display` class updates

### Step 3: Adjust Font Weights (10 min)
- [ ] Update `.book-title` font-weight to 400
- [ ] Remove `font-light` from background "I"
- [ ] Search for any other `font-weight` declarations on `.font-display` elements

### Step 4: Fine-Tune Letter Spacing (10 min)
- [ ] Adjust `.book-title` letter-spacing to 0.08em or 0.1em
- [ ] Update EPILOGUE tracking from `tracking-tighter` to `tracking-normal`
- [ ] Test readability at all breakpoints

### Step 5: Visual Compensation (15 min)
- [ ] Test if font size needs adjustment
- [ ] Adjust background "I" opacity if needed
- [ ] Consider subtle text-shadow if impact is too light

### Step 6: Cross-Browser Testing (20 min)
- [ ] Test on Chrome (Mac)
- [ ] Test on Safari (Mac)
- [ ] Test on Firefox (Mac)
- [ ] Test on Chrome (Windows) if available
- [ ] Verify font rendering quality

### Step 7: Responsive Testing (15 min)
- [ ] Mobile (375x667)
- [ ] Tablet (768x1024)
- [ ] Desktop (1920x1080)
- [ ] Verify letter-spacing works at all sizes

---

## 🔍 Files to Modify

### Primary Files

1. **[global.css](file:///Users/qn202f/.gemini/antigravity/scratch/coratina-blog/src/styles/global.css)**
   - Line 32: Google Fonts import
   - Line 17: `--font-family-display` variable
   - Line 196: `.book-title` font-weight
   - Line 197: `.book-title` letter-spacing

2. **[index.astro](file:///Users/qn202f/.gemini/antigravity/scratch/coratina-blog/src/pages/index.astro)**
   - Line 103-104: Background "I" (remove `font-light`, adjust opacity)
   - Line 400: EPILOGUE title (adjust tracking)

### Search & Replace Needed

**Search for:** `font-light` on elements with `font-display`  
**Action:** Remove or replace with appropriate weight

**Search for:** `tracking-tighter` on `.font-display` elements  
**Action:** Consider changing to `tracking-normal` or `tracking-wide`

---

## 🎨 Visual Impact Analysis

### Expected Changes

**"CORATINA" Title:**
- More elegant, refined appearance
- Slightly lighter visual weight
- Better letter spacing (more breathable)
- More authentic Roman inscription feel

**Background "I":**
- Lighter, more subtle watermark
- Better integration with content
- Less dominant, more sophisticated

**Overall Aesthetic:**
- ✅ More refined and elegant
- ✅ Better historical authenticity
- ✅ Improved readability with proper spacing
- ✅ Maintains academic/luxury feel
- ⚠️ May feel less "bold" initially (can be compensated)

---

## ⚠️ Potential Issues & Solutions

### Issue 1: Font Appears Too Light
**Solution:**
- Increase font size by 5-10%
- Add very subtle text-shadow
- Increase opacity of background elements

### Issue 2: Letter Spacing Too Wide
**Solution:**
- Reduce letter-spacing incrementally
- Test at multiple breakpoints
- Find sweet spot between 0.05em and 0.1em

### Issue 3: Less Visual Impact
**Solution:**
- Compensate with size adjustments
- Use color contrast more effectively
- Enhance with subtle animations

### Issue 4: Font Loading Performance
**Solution:**
- Forum is a single-weight font (lighter than Cinzel)
- Should actually improve load times
- Use `font-display: swap` for better UX

---

## 📊 Before & After Comparison

### Typography Hierarchy

**Before (Cinzel):**
```
Display: Cinzel (bold, commanding)
Heading: Cormorant Garamond (elegant)
Body: Lora (readable)
Accent: Tenor Sans (modern)
```

**After (Forum):**
```
Display: Forum (refined, classical)
Heading: Cormorant Garamond (elegant)
Body: Lora (readable)
Accent: Tenor Sans (modern)
```

**Synergy:**
- Forum + Cormorant Garamond = Excellent pairing (both classical serifs)
- Better visual harmony across typography
- More cohesive editorial aesthetic

---

## 🚀 Rollout Strategy

### Option A: Direct Replacement (Recommended)
1. Make all changes in one commit
2. Test thoroughly
3. Deploy if satisfied

**Pros:** Clean, simple, fast  
**Cons:** No fallback if issues arise

### Option B: Feature Flag
1. Add both fonts temporarily
2. Use CSS class to toggle between them
3. Test extensively
4. Remove Cinzel once confirmed

**Pros:** Safe, reversible  
**Cons:** More complex, larger font payload temporarily

### Option C: Staged Rollout
1. Replace logo first
2. Test and gather feedback
3. Replace background "I"
4. Replace remaining elements

**Pros:** Gradual, controlled  
**Cons:** Inconsistent appearance during transition

**Recommendation:** Option A (Direct Replacement) — cleanest approach

---

## ✅ Success Criteria

### Visual Quality
- [ ] "CORATINA" title is elegant and readable
- [ ] Background "I" is subtle but visible
- [ ] Letter spacing is balanced and breathable
- [ ] Font renders cleanly across browsers
- [ ] No jagged edges or rendering issues

### Technical Quality
- [ ] Font loads quickly
- [ ] No console errors
- [ ] CSS is clean and maintainable
- [ ] Responsive scaling works correctly

### Design Integrity
- [ ] Maintains centered editorial aesthetic
- [ ] Preserves luxury/academic feel
- [ ] Enhances (not diminishes) visual hierarchy
- [ ] Improves overall sophistication

---

## 📝 Documentation Updates

After implementation, update:

1. **[DESIGN.md](file:///Users/qn202f/.gemini/antigravity/scratch/coratina-blog/DESIGN.md)**
   - Update typography section
   - Change Cinzel references to Forum
   - Add rationale for font choice

2. **Walkthrough Document**
   - Create new walkthrough: `02-font-substitution.md`
   - Document before/after screenshots
   - Explain design decision

---

## 🎬 Next Steps

1. **Review this plan** — Confirm approach and priorities
2. **Approve changes** — Get sign-off on Forum substitution
3. **Begin implementation** — Execute Phase 1-7
4. **Test thoroughly** — Verify across breakpoints and browsers
5. **Document** — Create walkthrough with screenshots
6. **Deploy** — Push to production

---

## 💡 Additional Recommendations

### Future Enhancements
1. **Variable Font** — Consider Forum's variable font version if available
2. **Font Subsetting** — Subset to only characters used (A-Z, I, etc.)
3. **Preload Font** — Add `<link rel="preload">` for faster rendering
4. **Fallback Font** — Ensure graceful degradation if Forum fails to load

### Alternative Fonts to Consider
If Forum doesn't work as expected:
- **Trajan Pro** — Classic Roman capitals
- **Optima** — Elegant humanist sans-serif
- **Bodoni** — High-contrast serif
- **Didot** — Refined, sophisticated

---

*This plan ensures a smooth transition from Cinzel to Forum while maintaining Coratina's sophisticated, editorial aesthetic.*
