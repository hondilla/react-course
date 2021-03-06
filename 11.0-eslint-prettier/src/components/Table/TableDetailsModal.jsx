import { createPortal } from 'react-dom';

const TableDetailsModal = ({ modalState, setModalState }) => {
  const onCloseHandler = () => {
    setModalState({ isOpen: false, country: {} });
  };

  const Modal = () =>
    createPortal(
      <>
        <div
          className='modal fade show'
          tabIndex='-1'
          style={{ display: modalState.isOpen ? 'block' : 'none' }}
          role='dialog'
        >
          <div className='modal-dialog'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title'>Name: {modalState.country.name}</h5>
                <button
                  type='button'
                  className='btn-close'
                  onClick={onCloseHandler}
                ></button>
              </div>
            </div>
          </div>
        </div>
        <div className='modal-backdrop fade show'></div>
      </>,
      document.getElementById('modal-root')
    );

  return (
    modalState.isOpen && (
      <Modal modalState={modalState} setModalState={setModalState} />
    )
  );
};
export default TableDetailsModal;
