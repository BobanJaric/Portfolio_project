import React from 'react'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Container } from './LayoutStyles'

export const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <Container>
        <main>{children}</main>
      </Container>
      <Footer />
    </React.Fragment>
  )
}