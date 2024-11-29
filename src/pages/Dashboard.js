import React, { useEffect, useRef, useState } from 'react';
import { logOut } from '../config/firebase';
import Chart from 'chart.js/auto';
import './Dashboard.css'; // Import your CSS for the dashboard

import logoImage from '../assets/logo-color.png';

const Dashboard = () => {
  const [userInfo, setUserInfo] = useState("Loading User Information...");
  const heartRateRef = useRef(null);
  const bloodPressureRef = useRef(null);
  const glucoseLevelRef = useRef(null);
  const heartRateChartRef = useRef(null);
  const bloodPressureChartRef = useRef(null);
  const glucoseLevelChartRef = useRef(null);

  useEffect(() => {
    // Simulate fetching user info
    const fetchUserInfo = () => {
      // Replace this with actual user fetching logic
      setTimeout(() => {
        setUserInfo("John Doe"); // Simulated user info
      }, 1000);
    };

    fetchUserInfo();
    createCharts();

    // Cleanup function to destroy charts when component unmounts
    return () => {
      if (heartRateChartRef.current) {
        heartRateChartRef.current.destroy();
      }
      if (bloodPressureChartRef.current) {
        bloodPressureChartRef.current.destroy();
      }
      if (glucoseLevelChartRef.current) {
        glucoseLevelChartRef.current.destroy();
      }
    };
  }, []);

  const createCharts = () => {
    const heartRateCtx = heartRateRef.current.getContext('2d');
    const bloodPressureCtx = bloodPressureRef.current.getContext('2d');
    const glucoseLevelCtx = glucoseLevelRef.current.getContext('2d');

    heartRateChartRef.current = new Chart(heartRateCtx, {
      type: 'line',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
          label: 'Heart Rate',
          data: [72, 75, 78, 76, 74, 77, 80],
          borderColor: '#ff6384',
          borderWidth: 2,
          fill: true,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          x: {
            display: false
          },
          y: {
            display: false,
            beginAtZero: true,
          }
        }
      }
    });

    bloodPressureChartRef.current = new Chart(bloodPressureCtx, {
      type: 'line',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
          label: 'Blood Pressure',
          data: [118, 120, 119, 121, 120, 122, 120],
          borderColor: '#36a2eb',
          borderWidth: 2,
          fill: true,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          stepped: true
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          x: {
            display: false
          },
          y: {
            display: false,
            beginAtZero: true,
          }
        }
      }
    });

    glucoseLevelChartRef.current = new Chart(glucoseLevelCtx, {
      type: 'line',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
          label: 'Glucose Level',
          data: [85, 80, 78, 82, 79, 77, 80],
          borderColor: '#ffcd56',
          borderWidth: 2,
          fill: true,
          backgroundColor: 'rgba(255, 205, 86, 0.2)',
          stepped: true
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          x: {
            display: false
          },
          y: {
            display: false,
 beginAtZero: true,
          }
        }
      }
    });
  };

  const handleLogout = async () => {
    await logOut();
    // Optionally redirect to login after logout
  };

  return (
    <div id='dashboard-module'>
      <header className="header">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="../index.html">
              <img src={logoImage} alt="QuickMed Logo" width="150px" />
            </a>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <a className="nav-link active" href="#">Overview </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Document</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Messages</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Labs</a>
                </li>
              </ul>
              <div className="nav-item">
                <a href="#" className="nav-link"><i className="fas fa-bell"></i></a>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <div className="container mt-4 d-flex justify-content-between align-items-center">
        <div>
          <h4>Welcome,</h4>
          <h3 id="user-info">{userInfo}</h3>
        </div>
        <button className="btn logout-button" id="logout-button" onClick={handleLogout}>Logout</button>
      </div>

      <div className="container dashboard-section">
        <div className="grid-container">
          <div className="data-block">
            <h5>Heart Rate</h5>
            <p>80 BPM</p>
            <div className="chart-container">
              <canvas ref={heartRateRef}></canvas>
            </div>
          </div>
          <div className="data-block">
            <h5>Blood Pressure</h5>
            <p>120/80 mmHg</p>
            <div className="chart-container">
              <canvas ref={bloodPressureRef}></canvas>
            </div>
          </div>
          <div className="data-block">
            <h5>Glucose Level</h5>
            <p>80 mg/dl</p>
            <div className="chart-container">
              <canvas ref={glucoseLevelRef}></canvas>
            </div>
          </div>
        </div>

        <div className="grid-container">
          <div className="card">
            <div className="card-header">
              Upcoming Consultations
            </div>
            <div className="card-body">
              <p>No upcoming consultations at the moment.</p>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              Lab Reports
            </div>
            <div className="card-body">
              <p>You have 3 new lab reports available.</p>
              <a href="#" className="btn btn-reorder">View Reports</a>
            </div>
          </div>
        </div>

        <div className="grid-container">
          <div className="card">
            <div className="card-header">
              Previous Orders
            </div>
            <div className="card-body">
              <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Order #12345 - 01/10/2024
                  <button className="btn btn-reorder">Reorder</button>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Order #12346 - 12/09/2024
                  <button className="btn btn-reorder">Reorder</button>
                </li>
              </ul>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              Previous Consultations
            </div>
            <div className="card-body">
              <p>Consultation with Dr. Smith - 15/09/2024</p>
              <p>Consultation with Dr. Johnson - 05/08/2024</p>
            </div>
          </div>
        </div>
      </div>
 </div>
  );
};

export default Dashboard;