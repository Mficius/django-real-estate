import React from "react"
import { Layout} from 'antd'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AppFooter from './components/common/AppFooter'
import AppHeader from './components/common/AppHeader'
import HomePage from './pages/HomePage'
import PropertyListPage from './pages/PropertyListPage'

const {Content, Header, Footer} = Layout


function App() {
  return (
    <Router>
        <Layout className="main-layout">
            <Header>
                <AppHeader />
            </Header>
            <Content>
              <Routes>
                <Route exact path="/" Component={HomePage} />
                <Route exact path="/properties" Component={PropertyListPage}/>
              </Routes>
            </Content>
            <Footer>
              <AppFooter />
            </Footer>
        </Layout>
    </Router>
  )
}

export default App;
