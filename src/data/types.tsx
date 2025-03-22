export type Pages = {
   to: string;
   label: string;
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
