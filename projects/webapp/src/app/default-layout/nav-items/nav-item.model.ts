export interface NavItem {
  type: 'section' | 'expandable' | 'link';
  label: string;
  id?: string;
  icon?: string;
  link?: string[];
  children?: NavItem[];
  badge?: {
    content: any;
    type: 'success' | 'info' | 'primary' | 'warning' | 'danger';
  };
}
