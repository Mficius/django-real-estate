import React from 'react'
import {SearchOutlined} from '@ant-design/icons'
import { Button, Carousel } from 'antd';
import { Content } from 'antd/es/layout/layout';

const items = [
    {
        key: "1",
        title: "Buy or sell properties",
        content: 
        "Loren Ipsum is simply dummy text of the printing and typesetting insdustry"
    },
    {
        key: "2",
        title: "Buy or sell a land",
        content: 
        "Loren Ipsum is simply dummy text of the printing and typesetting insdustry"
    },
    {
        key: "3",
        title: "Buy or sell office space",
        content: 
        "Loren Ipsum is simply dummy text of the printing and typesetting insdustry"
    }
]

const Banner = () => {
  return (
    <div id='banner' className='banner-section'>
        <Carousel>
            {items.map((item)=>{
                return (
                    <div key={item.key} className='fluid-container'>
                        <div className='content'>
                            <h3>{item.title}</h3>
                            <p>{item.content}</p>
                            <div className='btn-group'>
                                <Button type='primary' size='large'>Learn More..</Button>
                                <Button icon={<SearchOutlined/>} size='large'>
                                    Search
                                </Button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </Carousel>

    </div>
  )
}

export default Banner