# Portfolio Structure — Quick Reference

## 📄 Page Sections (In Order)

```
┌─────────────────────────────────────────────────────────────┐
│  1. HERO SECTION                                            │
│     • Hero portrait image (hero.png)                        │
│     • Main headline + CTA buttons                           │
│     • Fully responsive, visible on all devices              │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  2. IDENTITY SHOWCASE — "Engineering Excellence"            │
│     3-column grid (1 col mobile)                            │
│     ┌──────────┬──────────────┬──────────┐                 │
│     │  MoMo    │    Nexus     │  Endiro  │                 │
│     │  Stack   │  Horizontal  │  Beans   │                 │
│     │  120px   │    240px     │  120px   │                 │
│     └──────────┴──────────────┴──────────┘                 │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  3. BLUEPRINT SHOWCASE — "System Blueprints"                │
│     2-column grid (1 col mobile)                            │
│     ┌─────────────────────┬─────────────────────┐          │
│     │  Nexus Blueprint    │  Summit Blueprint   │          │
│     │  Technical Diagram  │  Technical Diagram  │          │
│     │  16:9 aspect ratio  │  16:9 aspect ratio  │          │
│     └─────────────────────┴─────────────────────┘          │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  4. ALL BRANDS GALLERY — "All Brands" ⭐ MAIN SHOWCASE      │
│     3-column grid (1 col mobile, 2 col tablet)              │
│     ┌──────────┬──────────┬──────────┐                     │
│     │  MoMo    │  Nexus   │  Endiro  │                     │
│     │  110px   │  110px   │  110px   │                     │
│     ├──────────┼──────────┼──────────┤                     │
│     │  Summit  │  Empire  │  Fashion │                     │
│     │  110px   │  110px   │  110px   │                     │
│     └──────────┴──────────┴──────────┘                     │
│                                                              │
│     PLUS: Horizontal Lockup Card                            │
│     ┌─────────────────────────────────────────┐            │
│     │  Nexus Intelligence Systems             │            │
│     │  Horizontal Lockup — 320px              │            │
│     └─────────────────────────────────────────┘            │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  5. EXTENDED PORTFOLIO — "Complete Collection"              │
│     Tier 1: 4-column grid (2 col mobile)                    │
│     ┌────────┬────────┬────────┬────────┐                  │
│     │ Summit │ Empire │Fashion │  MoMo  │                  │
│     │  90px  │  90px  │  90px  │  90px  │                  │
│     └────────┴────────┴────────┴────────┘                  │
│                                                              │
│     Tier 2: 6-column compact grid (3 col mobile)            │
│     ┌───┬───┬───┬───┬───┬───┐                              │
│     │ N │ E │ M │ S │ E │ F │  (50px each)                 │
│     └───┴───┴───┴───┴───┴───┘                              │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  6. GLOBAL DISTRIBUTION MAP                                 │
│     Infrastructure nodes + animated map                     │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  7. BENTO STATS                                             │
│     8+ Brand Systems | 24ms Latency | 98% Optimization     │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  8. SERVICES — "Limitless Systems"                          │
│     4 service cards in 2x2 grid                             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  9. EXPLORE NEXT                                            │
│     Navigation to other pages                               │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  10. FOOTER                                                 │
│      Contact info + social links                            │
└─────────────────────────────────────────────────────────────┘
```

---

## 🎯 Asset Display Strategy

### Primary Showcase (Section 4: All Brands Gallery)
**Purpose:** Main portfolio presentation  
**All 6 brands** displayed with:
- Full descriptions
- Color-coded themes
- Numbered badges
- Large size (110px)
- Premium hover effects

### Supporting Showcases
**Identity (Section 2):** Top 3 flagship brands  
**Extended (Section 5):** Quick reference grids  
**Blueprints (Section 3):** Technical documentation

---

## 📱 Responsive Grid Breakpoints

```
Mobile (< 640px)
├─ Hero: Stacked (image top, text bottom)
├─ Identity: 1 column
├─ Blueprints: 1 column
├─ All Brands: 1 column
├─ Extended Tier 1: 2 columns
└─ Extended Tier 2: 3 columns

Tablet (640px - 1024px)
├─ Hero: Stacked (image top, text bottom)
├─ Identity: 2-3 columns
├─ Blueprints: 2 columns
├─ All Brands: 2 columns
├─ Extended Tier 1: 3 columns
└─ Extended Tier 2: 4 columns

Desktop (> 1024px)
├─ Hero: Side-by-side (text left, image right)
├─ Identity: 3 columns
├─ Blueprints: 2 columns
├─ All Brands: 3 columns
├─ Extended Tier 1: 4 columns
└─ Extended Tier 2: 6 columns
```

---

## ✨ Special Features

### Color-Coded Hover Effects
Each brand has a unique color theme:
- MoMo: Amber
- Nexus: Indigo
- Endiro: Emerald
- Summit: Blue
- Empire: Purple
- Fashion: Pink

### Animation Hierarchy
1. **Hero:** Staggered orb animations
2. **Cards:** Scale + rotate on hover
3. **Logos:** Glow effects on hover
4. **Text:** Color transitions
5. **Borders:** Gradient shifts

### Performance Optimizations
- Priority loading: Hero + first 3 brands
- Lazy loading: Below-fold content
- Next.js Image: Automatic optimization
- CSS animations: GPU-accelerated

---

## 🔍 Testing Checklist

### Visual Verification
- [ ] All 10 assets load correctly
- [ ] No broken images
- [ ] Proper aspect ratios maintained
- [ ] Hover effects work smoothly

### Responsive Testing
- [ ] Mobile (375px): All sections stack properly
- [ ] Tablet (768px): Grids adapt correctly
- [ ] Desktop (1440px): Full layout displays
- [ ] 4K (2560px): No layout breaks

### Performance Testing
- [ ] Lighthouse score > 90
- [ ] Images optimized
- [ ] No layout shift (CLS)
- [ ] Fast interaction (FID)

---

**Built with precision. Deployed with confidence.**
