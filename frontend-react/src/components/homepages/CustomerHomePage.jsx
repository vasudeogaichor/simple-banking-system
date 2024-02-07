import { useState } from 'react'
import { useSelector } from 'react-redux';
import CommonHeader from '../CommonHeader'
import TransactionList from '../TransactionList'
import TransactionModal from '../modals/TransactionModal';
import { createTxn } from '../../apis/accounts';

export default function CustomerHomePage() {
  const token = useSelector(state => state.auth.token);
  const [transactionType, setTransactionType] = useState('deposit')
  const [showTransactionModal, setShowTransactionModal] = useState(false);
  const loggedInUser = useSelector(state => state.auth.user);

  const handleTransaction = async (type, amount) => {
    const user_id = loggedInUser.id

    try {
      const res = await createTxn(token, { type, amount, user_id });
      return res;
    } catch (error) {
      throw error;
    }
  }

  const closeTransactionModal = () => {
    setShowTransactionModal(false)
  }

  return (
    <div>
      <CommonHeader setShowTransactionModal={setShowTransactionModal} setTransactionType={setTransactionType} />
      <TransactionList showTransactionModal={showTransactionModal} />
      <TransactionModal showModal={showTransactionModal}
        handleTransaction={handleTransaction}
        closeModal={closeTransactionModal}
        type={transactionType}
      />
    </div>
  )
}
