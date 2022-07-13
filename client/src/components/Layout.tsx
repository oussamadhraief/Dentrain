import Header from './Header'

const Layout = ({children}: {children: React.ReactNode | React.ReactNode[];}) => {
  return (
    <>
        <Header />
        {children}
    </>
  )
}

export default Layout