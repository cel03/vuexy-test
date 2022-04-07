// ** Icons Import
import { FileText, Circle, Square, UserCheck } from 'react-feather'

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
  }
]
