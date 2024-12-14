import React from 'react';
import Header from '../components/header';
import Stack from '@mui/material/Stack';
import { Gauge } from '@mui/x-charts/Gauge';
import { MdManageAccounts, MdEmail } from 'react-icons/md';
import { IoMdPersonAdd } from 'react-icons/io';
import { FaTerminal } from 'react-icons/fa';
import Switch from '@mui/joy/Switch';
import ProgressBar from 'react-bootstrap/ProgressBar';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import { SiMysql } from "react-icons/si";
import { FaFolder } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";
import { SiSqlite } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { Link } from 'react-router-dom';


const GaugeList = ({ gauges }) => (
  <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 2, md: 3 }}>
    {gauges.map((gauge, index) => (
      <div key={index} >
        <Gauge
          width={100}
          height={100}
          value={gauge.value}
          fill={gauge.fill || '#000'}
        />
        <p style={{ marginTop: '0.5rem', fontSize: '12px', fontWeight: '300' }}>
          {gauge.label}
        </p>
      </div>
    ))}
  </Stack>
);

const LinearDeterminate = () => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress variant="determinate" value={progress} />
    </Box>
  );
};
const SwitchList = ({ switchCount, checked, onChange }) => (
  <div>
    {Array.from({ length: switchCount }).map((_, index) => (
      <div
        key={index}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '1rem',
          gap: '1rem',
        }}
      >
        
        <div style={{ flex: 1 }}>
          {checked[index] && <LinearDeterminate />}
        </div>

        
        <Switch
          checked={checked[index]}
          onChange={(event) => onChange(index, event.target.checked)}
        />
      </div>
    ))}
  </div>
);



const Dashboard = () => {
  const [checked, setChecked] = React.useState([false, false, false]); 

  const handleSwitchChange = (index, value) => {
    const updatedChecked = [...checked];
    updatedChecked[index] = value;
    setChecked(updatedChecked);
  };
  


  const gaugesData = [
    { value: 60, label: 'CPU Usage' },
    { value: 10, label: 'Memory Usage' },
    { value: 90, fill: '#52b202', label: 'Disk Space' },
  ];

  return (
    <div className="container">
      
      <Header />

    
      <section>
        <div className="system-cont">
          
          <div className="box">
            <h4>SYSTEM INFO</h4>
            <div className="contents">
            <GaugeList gauges={gaugesData} />
            </div>
          </div>

          
          <div className="box">
            <h4>STATUS</h4>
            <ProgressBar />
            <SwitchList
              switchCount={3}
              checked={checked}
              onChange={handleSwitchChange}
            />
          </div>
          
         

          

        </div>
      </section>

      
      <section>
        <div className="user">
          <div className="user-manage">
            <h4>USER</h4>
            <Link to="/accounts" className="contents-user">
              <MdManageAccounts />
              <h5>Accounts</h5>
            </Link>
            <Link to="/create" className="contents-user">
              <IoMdPersonAdd />
              <h5>Create Account</h5>
            </Link>
            <Link to="/email" className="contents-user">
              <MdEmail />
              <h5>Emails</h5>
            </Link>
            <Link to="/terminal" className="contents-user">
              <FaTerminal />
              <h5>Terminal</h5>
            </Link>
            <Link to="/certificate" className="contents-user">
              <FaTerminal />
              <h5>SSL Certificate</h5>
            </Link>
          </div>
        </div>
      </section>
      <section>
        <div className="user">
          <div className="user-manage">
            <h4>FILES</h4>
            <Link to="/file-manager" className="contents-user">
              <FaFolder />
              <h5>File Manager</h5>
            </Link>
            
          </div>
        </div>
      </section>
      <section>
        <div className="user">
          <div className="user-manage">
            <h4>DATABASES</h4>
            <Link to="/mysql" className="contents-user">
              <SiMysql />
              <h5>MySQL</h5>
            </Link>
            <Link to="/postgresql" className="contents-user">
              <SiPostgresql />
              <h5>PostgreSQL</h5>
            </Link>
            <Link to="/sqlite" className="contents-user">
              <SiSqlite />
              <h5>SQLite</h5>
            </Link>
            <Link to="/mongodb" className="contents-user">
              <DiMongodb />
              <h5>MongoDB</h5>
            </Link>
          </div>
        </div>
      </section>
     
     
    </div>
  );
};

export default Dashboard;
