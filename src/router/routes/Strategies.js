import { lazy } from 'react'

const STDetails = lazy(() => import('../../views/strategies'))

const StrategiesRoutes = [
  {
    path: '/strategies/details',
    element: <STDetails />
  }
]

export default StrategiesRoutes
