export const SuccessMessage = ({ onClose }) => {
    return (
        <div className="modal fixed inset-0 overflow-y-auto flex items-center justify-center" onClick={() => onClose()}>
            <div className="modal-content bg-green-100 rounded shadow-md p-6 max-w-md" onClick={(e) => e.stopPropagation()}>
                <span className="close absolute top-0 right-0 p-4 cursor-pointer" onClick={() => onClose()}>&times;</span>
                <div className="flex items-center space-x-2">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-green-800">Venta realizada con éxito</p>
                </div>
            </div>
        </div>
    );
};