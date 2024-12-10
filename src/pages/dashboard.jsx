import React from 'react'
import { Gauge } from '@mui/x-charts/Gauge';



const dashboard = () => {
  return (
    <Gauge
      value={75}
      startAngle={0}
      endAngle={360}
      innerRadius="80%"
      outerRadius="100%"
  // ...
    />
  )
}

export default dashboard
