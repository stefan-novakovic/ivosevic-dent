export type Pages = {
   to: string;
   label: string;
};

export type ThemeColors = {
   'light-bg': string;
   'dark-bg': string;
   text: string;
   'text-inverse': string;
   'light-bg-service-card': string;
   'dark-bg-service-card': string;
   'light-service-card-shadow': string;
   'dark-service-card-shadow': string;
   'service-card-image-overlay': string;
   'light-nav-menu-selected': string;
   'light-page-layout-bg': string;
   'dark-page-layout-bg': string;
   'dark-mobile-page-layout-bg': string;
   'light-hero-overlay': string;
   'dark-hero-overlay': string;
   'mobile-overlay': string;
   'footer-border': string;
};

export type SideBarMenuProps = {
   pages: {
      to: string;
      label: string;
   }[];
   logo?: string;
   side?: 'left' | 'right';
   bgColor?: string;
   textColor?: string;
   selectedBgColor?: string;
   selectedTextColor?: string;
};
