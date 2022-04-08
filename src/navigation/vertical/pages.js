// ** Icons Import
import { FileText, Circle, Shuffle } from 'react-feather'

export default [
  {
    id: 'pages',
    title: 'Pages',
    icon: <FileText size={20} />,
    children: [
      {
        id: 'profile',
        title: 'Profile',
        icon: <Circle size={12} />,
        permissions: ['admin', 'editor'],
        navLink: '/pages/profile',
        collapsed: true
      }
    ]
  },
  {
    id: 'strategies',
    title: 'Strategies',
    icon: <Shuffle size={20} />,
    children: [
      {
        id: 'details',
        title: 'Details',
        icon: <Circle size={12} />,
        permissions: ['admin', 'editor'],
        navLink: '/strategies/details',
        collapsed: true
      }
    ]
  }
]
