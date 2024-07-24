import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ModalLogin from './components/ModalLogin';
import Web3 from 'web3';
import './index.css';

const App = () => {
  const [account, setAccount] = useState(null);
  const [web3, setWeb3] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const adminAddress = '0xb9030ab08Fb47b310aBe3D4Be7680807C10deba5';

  useEffect(() => {
    const loadAccount = async () => {
      if (window.ethereum) {
        const web3Instance = new Web3(window.ethereum);
        setWeb3(web3Instance);
        const accounts = await web3Instance.eth.getAccounts();
        if (accounts.length > 0) {
          const storedAccount = sessionStorage.getItem('account');
          if (storedAccount) {
            setAccount(storedAccount);
          } else {
            setAccount(accounts[0]);
          }
        }
      }
    };
    loadAccount();
  }, []);

  const onLoginClick = async () => {
    if (window.ethereum) {
      const web3Instance = new Web3(window.ethereum);
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
        sessionStorage.setItem('account', accounts[0]);
        setWeb3(web3Instance);
        setShowModal(false); // Tutup modal setelah login berhasil
      } catch (error) {
        console.error("User denied account access", error);
      }
    } else {
      console.error("MetaMask not detected");
    }
  };

  const onLogoutClick = () => {
    setAccount(null);
    setWeb3(null);
    sessionStorage.removeItem('account');
  };

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <Router>
      <Navbar account={account} onLoginClick={onLoginClick} onLogoutClick={onLogoutClick} />
      <div className="container-fluid">
        <Routes>
          <Route path="/" element={<HomePage web3={web3} account={account} adminAddress={adminAddress} handleShowModal={handleShowModal} />} />
        </Routes>
        <SpeedInsights />
        <Analytics />
      </div>
      <ModalLogin show={showModal} handleClose={handleCloseModal} handleLogin={onLoginClick} />
    </Router>
  );
};

export default App;
