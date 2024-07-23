import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import metamaskLogo from './metamask.png';

const ModalLogin = ({ show, handleClose, handleLogin }) => {

  const checkNetwork = async () => {
    const { ethereum } = window;
    if (ethereum) {
      const chainId = await ethereum.request({ method: 'eth_chainId' });
      const polygonChainId = '0x89'; // Mainnet Polygon Chain ID

      if (chainId !== polygonChainId) {
        try {
          await ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: polygonChainId }],
          });
        } catch (switchError) {
          if (switchError.code === 4902) {
            console.log('Polygon network is not available in MetaMask, please add it manually.');
          } else {
            console.error(switchError);
          }
          return false;
        }
      }
      return true;
    } else {
      console.log('MetaMask is not installed.');
      return false;
    }
  };

  const handleLoginClick = async () => {
    const isNetworkCorrect = await checkNetwork();
    if (isNetworkCorrect) {
      handleLogin();
    } else {
      console.log('Please switch to the Polygon network.');
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Connect Wallet</Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        <p>Select your wallet to connect:</p>
        <Button variant="outline-primary" className="wallet-button" onClick={handleLoginClick}>
          <img src={metamaskLogo} alt="MetaMask" className="wallet-logo" />
          MetaMask
        </Button>
      </Modal.Body>
    </Modal>
  );
};

export default ModalLogin;
