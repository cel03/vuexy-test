// ** React Imports
import { Fragment, useContext } from 'react'

// ** Reactstrap Imports
import { Row, Col } from 'reactstrap'
import { useTranslation } from 'react-i18next'

// ** Custom Hooks
import { useRTL } from '@hooks/useRTL'

// ** Context
import { ThemeColors } from '@src/utility/context/ThemeColors'

// ** Charts
import LineChart from './LineChart'
import {formatDateToMonthShort} from '../../../../utility/Utils'

const Backtest = ({lineChart = []}) => {
  const {t} = useTranslation()
  // ** Hooks
  const [isRtl] = useRTL()

  // ** Theme Colors
  const { colors } = useContext(ThemeColors)

  return (
    <Fragment>
      <Row className="match-height">
        <Col sm="12">
          <LineChart title="Capital" description={t("Total capital accumulated")} xAxisData={lineChart.map(data => formatDateToMonthShort(data.x))} yAxisData={lineChart.map(data => data.y)} direction={isRtl ? 'rtl' : 'ltr'} warning={colors.warning.main} />
        </Col>
      </Row>
    </Fragment>
  )
}

export default Backtest