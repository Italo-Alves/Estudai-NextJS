import { toast } from 'react-toastify'

interface ToastProps {
  type: 'success' | 'warn' | 'error' | 'info'
  message: string
  autoClose: number
}

export const showToast = ({ type, message, autoClose }: ToastProps) => {
  switch (type) {
    case 'success':
      toast.success(message, {
        autoClose,
        bodyStyle: {
          fontSize: 14,
        },
      })
      break
    case 'warn':
      toast.warn(message, {
        autoClose,
        bodyStyle: {
          fontSize: 14,
        },
      })
      break
    case 'error':
      toast.error(message, {
        autoClose,
        bodyStyle: {
          fontSize: 14,
        },
      })
      break
    case 'info':
      toast.info(message, {
        autoClose,
        bodyStyle: {
          fontSize: 14,
        },
      })
      break
  }
}
