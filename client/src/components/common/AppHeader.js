import React,{useState} from 'react'
import {Anchor, Button, Drawer} from 'antd'
import {Link} from 'react-router-dom';

const AppHeader = () => {
  const [visible, setVisible] = useState(false)

  const showDrawer=()=>{
    setVisible(true)
  }

  const closeDrawer=()=>{
    setVisible(false)
  }

  return (
    <div className='fluid-container'>
        <div className='header'>
            <div className='logo'>
                <i className='fas fa-home fa-2x'>

                </i>
                <Link to="/">Real Estate</Link>
            </div>
            <div className='mobileHidden'>
                <Anchor targetOffset="65">
                    <Anchor.Link href='#banner' title="Home" />
                    <Anchor.Link href='#about' title="About" />
                    <Anchor.Link href='#options' title="Options" />
                    <Anchor.Link href='#faq' title="FAQ" />
                    <Link to="/properties" className='ant-anchor-link-title'>Properties</Link>
                </Anchor>
            </div>
            <div className='mobileVisible'>
                <Button type='primary' conClick={showDrawer}>
                    <i className='fas fa-bars'></i>
                </Button>
                <Drawer
                   placement='right'
                   closable={false}
                   onClose={closeDrawer}
                   visible={visible}

                >

                <div className='mobileHidden'>
                    <Anchor targetOffset="65">
                        <Anchor.Link href='#banner' title="Home" />
                        <Anchor.Link href='#about' title="About" />
                        <Anchor.Link href='#options' title="Options" />
                        <Anchor.Link href='#faq' title="FAQ" />
                        <Link to="/properties" className='ant-anchor-link-title'>Properties</Link>
                    </Anchor>
                </div>

                </Drawer>
            </div>
        </div>
    </div>
  )
}

export default AppHeader