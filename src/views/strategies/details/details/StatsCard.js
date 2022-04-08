// ** Third Party Components
import classnames from 'classnames'
import { TrendingUp, BarChart2, ArrowUpRight, ArrowDownRight, Target, Percent, TrendingDown } from 'react-feather'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, CardText, Row, Col } from 'reactstrap'

import { useTranslation } from 'react-i18next'

const StatsCard = ({ cols, metrics = {} }) => {
  const {t} = useTranslation()
  const data = [
    {
      title:  `R$ ${metrics.totalLucro}`,
      subtitle: t('Total Profit'),
      color: 'light-success',
      icon: <TrendingUp size={24} />
    },
    {
      title: `R$ ${metrics.mediaMensal}`,
      subtitle: t('Monthly Average'),
      color: 'light-info',
      icon: <BarChart2 size={24} />
    },
    {
      title: metrics.taxaAcerto,
      subtitle: t('Hit rate'),
      color: 'light-primary',
      icon: <Target size={24} />
    },
    {
      title: metrics.payoff,
      subtitle: 'Payoff',
      color: 'light-info',
      icon: <Percent size={24} />
    },
    {
      title: Number.parseInt(metrics.mediaDiasPositivos),
      subtitle: t('Positive Days'),
      color: 'light-success',
      icon: <ArrowUpRight size={24} />
    },
    {
      title: Number.parseInt(metrics.mediaDiasPositivos),
      subtitle: t('Positive Days Average'),
      color: 'light-success',
      icon: <TrendingUp size={24} />
    },
    {
      title: Number.parseInt(metrics.diasNegativos),
      subtitle: t('Negative Days'),
      color: 'light-danger',
      icon: <ArrowDownRight size={24} />
    },
    {
      title: Number.parseInt(metrics.mediaDiasNegativos),
      subtitle: t('Negative Days Average'),
      color: 'light-danger',
      icon: <TrendingDown size={24} />
    }
  ]

  const renderData = () => {

    return Object.keys(metrics).length ? data.map((item, index) => {
      const colMargin = Object.keys(cols)
      const margin = colMargin[0]
      return (
        <Col 
          key={index}
          {...cols}
          className={classnames({
            [`mb-2 mb-${margin}-0`]: index !== data.length - 1
          })}
        >
          <div className="d-flex align-items-center">
            <Avatar color={item.color} icon={item.icon} className="me-2" />
            <div className="my-auto">
              <h4 className="fw-bolder mb-0 text-nowrap">{item.title}</h4>
              <CardText className="font-small-3 mb-0">{item.subtitle}</CardText>
            </div>
          </div>
        </Col>
      )
    }) : <></>
  }

  return (
    <Card className="card-statistics">
      <CardHeader>
        <CardTitle tag="h4">{t("Statistics")}</CardTitle>
        <CardText className="card-text font-small-2 me-25 mb-0">Updated now</CardText>
      </CardHeader>
      <CardBody className="statistics-body">
        <Row xs="1" sm="2" md="3" lg="4">{renderData()}</Row>
      </CardBody>
    </Card>
  )
}

export default StatsCard
