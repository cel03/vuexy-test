// ** Third Party Components
import Chart from 'react-apexcharts'
import { ArrowDown, ArrowUp } from 'react-feather'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, CardSubtitle, Badge } from 'reactstrap'

const ApexLineChart = ({ title, description, xAxisData, yAxisData, direction, warning }) => {
  // ** Chart Options
  const options = {
    chart: {
      zoom: {
        enabled: false
      },
      parentHeightOffset: 0,
      toolbar: {
        show: false
      }
    },

    markers: {
      strokeWidth: 7,
      strokeOpacity: 1,
      strokeColors: ['#fff'],
      colors: [warning]
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    colors: [warning],
    grid: {
      xaxis: {
        lines: {
          show: true
        }
      }
    },
    tooltip: {
      custom(data) {
        return `<div class='px-1 py-50'>
              <span>R$ ${data.series[data.seriesIndex][data.dataPointIndex]}</span>
            </div>`
      }
    },
    xaxis: { 
      categories: xAxisData
    },
    yaxis: {
      opposite: direction === 'rtl'
    }
  }

  // ** Chart Series
  const series = [
    {
      data: yAxisData
    }
  ]

  const winRate = series[0].data.at(-1) / series[0].data.at(0)

  const positiveRate = winRate > 0

  return (
    <Card>
      <CardHeader className="d-flex flex-sm-row flex-column justify-content-md-between align-items-start justify-content-start">
        <div>
          <CardTitle className="mb-75" tag="h4">
            {title}
          </CardTitle>
          <CardSubtitle className="text-muted">{description}</CardSubtitle>
        </div>
        <div className="d-flex align-items-center flex-wrap mt-sm-0 mt-1">
          <h5 className="fw-bolder mb-0 me-1">{`$ ${series[0].data.at(-1)}`}</h5>
          <Badge color="light-secondary">
              {positiveRate ? <ArrowUp size={13} className="text-success" /> : <ArrowDown size={13} className="text-danger" />}
            
            <span className="align-middle ms-25">{`$ ${winRate}`}%</span>
          </Badge>
        </div>
      </CardHeader>
      <CardBody>
        <Chart options={options} series={series} type="line" height={400} />
      </CardBody>
    </Card>
  )
}

export default ApexLineChart