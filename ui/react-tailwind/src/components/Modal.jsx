import BasicTabs from './ModalNav'

function Modal({ open, children, onClose, city }) {
    if (!open) return null;
  
    return (
      <>
        {open && (
          
          <div className="fixed inset-0 z-20 flex items-center justify-center">
            <div className="fixed inset-0 bg-black opacity-50"></div>
              <div className="absolute bg-white rounded-lg p-1 lg:p-8 max-w-lg z-0" style={{ width: '100%', maxHeight: '100vh', overflowY: 'auto' }}>
                <div className="flex justify-end items-center">
                  <button onClick={onClose} className="text-gray-600 hover:text-gray-800 focus:outline-none">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </button>
              </div>
              <BasicTabs city={city}/>
            </div>
          </div>
        )}
      </>
    );
  }

  export default Modal