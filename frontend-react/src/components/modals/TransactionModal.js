import { useState } from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';

const TransactionModal = ({ showModal, closeModal, handleTransaction, type }) => {
  const [amount, setAmount] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async () => {
    if (amount.trim() === '') {
      setErrorMessage('Please enter the amount.');
    } else {
      setErrorMessage('');
      try {
        const result = await handleTransaction(type, parseFloat(amount));
        if (result?.id) {
            closeModal();
        } else {
            setErrorMessage(result?.Error || 'An error occurred.');    
        }
      } catch (error) {
        setErrorMessage(error || 'An error occurred.');
      }
    }
  };

  return (
    <Modal show={showModal} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>{type === 'deposit' ? 'Deposit' : 'Withdrawal'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="amountInput">
            <Form.Label>Amount:</Form.Label>
            <Form.Control
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            {errorMessage && <Alert className='mt-3' variant="danger" dismissible>{errorMessage}</Alert>}
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TransactionModal;
