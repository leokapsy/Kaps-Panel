import React from 'react'
import Header from '../components/header';
import Stack from '@mui/material/Stack';
import { Gauge } from '@mui/x-charts/Gauge';


const Gauges = () => {
  return (
    <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 1, md: 3 }}>
      <Gauge width={100} height={100} value={60} />
      <Gauge width={100} height={100} value={60} />
      <Gauge width={100} height={100} value={90} fill={'#52b202'}/>
      
    </Stack>
  );
}

const dashboard = () => {
  
    return (
      
      <div className="container">
         <Header/>
         
          <section>
            <div className="system-cont">
                <div className="box">
                 <h4>System Info</h4>
                    <div className="contents">
                        <Gauges/>
                    </div>
                </div>
            </div>
            
          
          </section>
         
      </div>
    )
  }

export default dashboard
