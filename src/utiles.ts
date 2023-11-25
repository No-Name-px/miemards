import { toast } from 'react-toastify';

export const showToast = (text: string, mode: 'success' | 'error') => {
    switch (mode) {
        case 'success':
            toast.success(text, {
                position: 'bottom-center',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored',
            });
            break;
        case 'error':
            toast.error(text, {
                position: 'bottom-center',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored',
            });
            break;
    }
};
