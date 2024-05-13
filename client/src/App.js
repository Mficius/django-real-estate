import React from "react"
import { Layout} from 'antd'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AppFooter from './components/common/AppFooter'
import AppHeader from './components/common/AppHeader'
import HomePage from './pages/HomePage'

const {Content, Header, Footer} = Layout


function App() {
  return (
    <Router>
        <Layout className="main-layout">
            <Header>
                <AppHeader />
            </Header>
            <Content>
              <Route  exact path="/" Component={HomePage} />
            </Content>
            <Footer>
              <AppFooter />
            </Footer>
        </Layout>
    </Router>
  )
}

export default App;
