import { NavItem } from './nav-item.model';

export const items: NavItem[] = [
  {
    type: 'expandable',
    label: 'Dashboard',
    icon: 'home',
    badge: {
      type: 'danger',
      content: 'New',
    },
    children: [
      {
        type: 'link',
        label: 'Dashboard',
        link: [''],
      },
      {
        type: 'link',
        label: 'eCommerce',
        link: ['eCommerce'],
      },
    ],
  },
  {
    type: 'section',
    label: 'Apps & Pages',
  },
  {
    type: 'link',
    label: 'Email',
    icon: 'mail',
    link: ['email'],
  },
  {
    type: 'link',
    label: 'Chat',
    icon: 'message-square',
    link: ['chat'],
    badge: {
      type: 'success',
      content: 3,
    },
  },
];
