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
        <div>
          <button onClick={onClose}>Close Modal</button>
          {children}
        </div>
      </>,
      document.getElementById('sidemenu-modal')!
    )
  }