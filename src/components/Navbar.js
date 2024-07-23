import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ModalLogin from './ModalLogin';
import '../index.css';

const adminWallet = "0xb9030ab08Fb47b310aBe3D4Be7680807C10deba5";

const Navbar = ({ account, onLoginClick, onLogoutClick }) => {
  const [showModal, setShowModal] = useState(false);
  const [walletAddress, setWalletAddress] = useState(account);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleLogin = async () => {
    await onLoginClick();
    handleClose();
    if (window.ethereum) {
      const accounts = await window.ethereum.request({ method: 'eth_accounts' });
      if (accounts.length > 0) {
        setWalletAddress(accounts[0]);
      }
    }
  };

  useEffect(() => {
    if (account) {
      setWalletAddress(account);
    } else {
      setWalletAddress(null);
    }
  }, [account]);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">DesignHub</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {walletAddress ? (
                <li className="nav-item d-flex align-items-center">
                  <span className="navbar-text text-white me-3">
                    {walletAddress.toLowerCase() === adminWallet.toLowerCase() ? "Welcome King" : walletAddress}
                  </span>
                  <button className="btn btn-danger" onClick={onLogoutClick}>Logout</button>
                </li>
              ) : (
                <li className="nav-item">
                  <button className="btn btn-success" onClick={handleShow}>Login</button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <ModalLogin show={showModal} handleClose={handleClose} handleLogin={handleLogin} />
    </>
  );
};

export default Navbar;
