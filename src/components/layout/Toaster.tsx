import { Toaster as HotToaster } from 'react-hot-toast';

const Toaster = () => {
  return (
    <HotToaster
      position="top-right"
      toastOptions={{
        duration: 3000,
        style: {
          background: '#fff',
          color: '#222',
          padding: '16px 24px',
          borderRadius: '0px',
          fontSize: '14px',
          fontWeight: '500',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
          border: '1px solid #f0f0f0',
          maxWidth: '400px',
        },
        success: {
          iconTheme: {
            primary: '#c87a4c',
            secondary: '#fff',
          },
          style: {
            borderLeft: '4px solid #c87a4c',
          },
        },
        error: {
          iconTheme: {
            primary: '#e5484d',
            secondary: '#fff',
          },
          style: {
            borderLeft: '4px solid #e5484d',
          },
        },
      }}
    />
  );
};

export default Toaster;
