// ** React Imports
import React from 'react'

import { useTranslation } from 'react-i18next'

import { Card, Nav, NavItem, NavLink } from 'reactstrap'

const StrategyDetailsHeader = ({ active, toggle, strategyName, strategyDescription }) => {
  const {t} = useTranslation()
  return (
    <>
      <Card className="mb-2 p-2">
        <div className="position-relative">
          <div className="d-flex align-items-center">
            <div className="">
              <h2 className="">{strategyName}</h2>
              <p className="">{strategyDescription}</p>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between flex-wrap">
          <Nav pills className="mt-1">
            <NavItem>
              <NavLink
                active={active === '1'}
                onClick={() => {
                  toggle('1')
                }}
              >
                {t('Details')}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                active={active === '2'}
                onClick={() => {
                  toggle('2')
                }}
              >
                Backtest
              </NavLink>
            </NavItem>
          </Nav>
        </div>
      </Card>
    </>
  )
}

export default StrategyDetailsHeader
