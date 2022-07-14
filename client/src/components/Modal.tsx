import ReactDom from 'react-dom'

interface Props {
    open: boolean;
    children: React.ReactNode | React.ReactNode[];
    onClose: () => void;
}

export default function Modal({ open, children, onClose }: Props) {
    if (!open) return null
  
    return ReactDom.createPortal(
      <>
        <div className='w-screen fixed top-0 left-0 h-screen bg-zinc-600/70 z-50' onClick={onClose}>
        </div>
        <div className='w-72 fixed top-0 right-0 h-screen bg-white shadow-xl z-50 py-2 px-1 slide-left flex flex-col flex-nowrap justify-start'>
          <button className='w-full text-left font-mono text-xl font-bold ml-2' onClick={onClose}>X</button>
          {children}
        </div>
      </>,
      document.getElementById('sidemenu-modal')!
    )
  }