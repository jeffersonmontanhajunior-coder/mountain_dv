import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--color-primary)",
          hover: "var(--color-primary-hover)",
          active: "var(--color-primary-active)",
        },
        secondary: "var(--color-secondary)",
        success: "var(--color-success)",
        warning: "var(--color-warning)",
        danger: "var(--color-danger)",
        info: "var(--color-info)",
        bg: {
          DEFAULT: "var(--bg)",
          soft: "var(--bg-soft)",
          dark: "var(--bg-dark)",
        },
        surface: {
          DEFAULT: "var(--surface)",
          dark: "var(--surface-dark)",
          elevated: "var(--surface-elevated)",
        },
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
          disabled: "var(--text-disabled)",
          inverse: "var(--text-inverse)",
        },
        border: {
          light: "var(--border-light)",
          DEFAULT: "var(--border-default)",
          strong: "var(--border-strong)",
          dark: "var(--border-dark)",
        },
      },
      fontFamily: {
        sans: ["var(--font-primary)"],
        display: ["var(--font-display)"],
      },
      fontSize: {
        "display-xl": ["var(--text-display-xl)", { lineHeight: "1.04", fontWeight: "800" }],
        "display-lg": ["var(--text-display-lg)", { lineHeight: "1.1", fontWeight: "800" }],
        "display-md": ["var(--text-display-md)", { lineHeight: "1.11", fontWeight: "800" }],
        h1: ["var(--text-h1)", { lineHeight: "1.125", fontWeight: "700" }],
        h2: ["var(--text-h2)", { lineHeight: "1.14", fontWeight: "700" }],
        h3: ["var(--text-h3)", { lineHeight: "1.2", fontWeight: "700" }],
        h4: ["var(--text-h4)", { lineHeight: "1.25", fontWeight: "600" }],
        h5: ["var(--text-h5)", { lineHeight: "1.33", fontWeight: "600" }],
        h6: ["var(--text-h6)", { lineHeight: "1.4", fontWeight: "600" }],
        "body-lg": ["var(--text-body-lg)", { lineHeight: "1.78" }],
        body: ["var(--text-body)", { lineHeight: "1.75" }],
        "body-sm": ["var(--text-body-sm)", { lineHeight: "1.71" }],
        caption: ["var(--text-caption)", { lineHeight: "1.5", fontWeight: "500" }],
      },
      spacing: {
        1: "var(--space-1)", 2: "var(--space-2)", 3: "var(--space-3)",
        4: "var(--space-4)", 5: "var(--space-5)", 6: "var(--space-6)",
        8: "var(--space-8)", 10: "var(--space-10)", 12: "var(--space-12)",
        14: "var(--space-14)", 16: "var(--space-16)", 20: "var(--space-20)",
        24: "var(--space-24)", 30: "var(--space-30)", 40: "var(--space-40)",
        50: "var(--space-50)",
      },
      borderRadius: {
        xs: "var(--radius-xs)",
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        pill: "var(--radius-pill)",
      },
      boxShadow: {
        xs: "var(--shadow-xs)",
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        xl: "var(--shadow-xl)",
      },
      backdropBlur: {
        xs: "var(--blur-xs)",
        sm: "var(--blur-sm)",
        md: "var(--blur-md)",
        lg: "var(--blur-lg)",
        xl: "var(--blur-xl)",
      },
      transitionDuration: {
        instant: "var(--duration-instant)",
        ultrafast: "var(--duration-ultrafast)",
        fast: "var(--duration-fast)",
        normal: "var(--duration-normal)",
        medium: "var(--duration-medium)",
        slow: "var(--duration-slow)",
        reveal: "var(--duration-reveal)",
        large: "var(--duration-large)",
        xl: "var(--duration-xl)",
      },
      transitionTimingFunction: {
        summit: "var(--ease-summit)",
      },
      zIndex: {
        background: "var(--z-background)",
        base: "var(--z-base)",
        cards: "var(--z-cards)",
        sticky: "var(--z-sticky)",
        navbar: "var(--z-navbar)",
        dropdown: "var(--z-dropdown)",
        drawer: "var(--z-drawer)",
        modal: "var(--z-modal)",
        toast: "var(--z-toast)",
        tooltip: "var(--z-tooltip)",
        command: "var(--z-command)",
        "floating-cta": "var(--z-floating-cta)",
        debug: "var(--z-debug)",
      },
      maxWidth: {
        "container-xl": "1440px",
        container: "1320px",
        notebook: "1200px",
      },
      screens: {
        xs: "360px",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "whatsapp-pulse": {
          "0%, 90%, 100%": { transform: "scale(1)", boxShadow: "0 0 0 0 rgba(16, 185, 129, 0.4)" },
          "5%": { transform: "scale(1.08)", boxShadow: "0 0 0 12px rgba(16, 185, 129, 0)" },
        },
      },
      animation: {
        shimmer: "shimmer 1.5s ease-in-out infinite",
        marquee: "marquee 40s linear infinite",
        "whatsapp-pulse": "whatsapp-pulse 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
