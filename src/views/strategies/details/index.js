import React from 'react'
import axios from 'axios'

import { TabContent, TabPane } from 'reactstrap'
import { useTranslation } from 'react-i18next'

import Breadcrumbs from '@components/breadcrumbs'
import UILoader from '@components/ui-loader'

import Header from './Header'
import Details from './details'
import Backtest from './backtest'


const StrategyDetails = () => {
    const {t} = useTranslation()
    const [block, setBlock] = React.useState(true)
    const [active, setActive] = React.useState('1')
    const [strategy, setStrategy] = React.useState({})

    React.useEffect(() => {
        const fetchStrategy = async () => {
            const response = await axios.get('https://botspot.com.br/api/strategy/stats/LtTY7UNregnoo4EzTNbGvH')
            setStrategy(response.data)
            setBlock(false)
        }
        fetchStrategy()
      }, [])
    
    const handleToggle = (tab) => {
        if (active !== tab) {
          setActive(tab)
        }
      }

    return (
        <>
        <Breadcrumbs title={t('Strategies')} data={[{ title: t('Strategies') }, { title: t('Details') }]} />
        <UILoader blocking={block} renderChildren={false}>
            {block ? null : <>
            <Header toggle={handleToggle} active={active} strategyName={strategy.estrategia.nome} strategyDescription={strategy.estrategia.descricao}/>
            <TabContent className="py-50" activeTab={active}>
                <TabPane tabId="1">
                    <Details metrics={strategy.metricas}/>
                </TabPane>
                <TabPane tabId="2">
                    <Backtest lineChart={strategy.lineChart}/>
                </TabPane>
            </TabContent> 
            </>
            }
            
        </UILoader>
      </>
        
    )
}

export default StrategyDetails