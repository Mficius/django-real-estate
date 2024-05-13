import React from 'react'
import { Button, Collapse} from 'antd'

const {Panel} = Collapse

const Faqs = () => {
  return (
    <div id='panel' className='block faq-block'>
        <div className='fluid-container'>
            <div className='title-section'>
                <h2>Frequently Asked Questions</h2>
                <p>
                    What are the most frequently asked questions regarding properties?
                </p>
            </div>
            <Collapse defaultActiveKey={["1"]}>
                <Panel header="How do I find the right property?">
                    <p>Lorem Ipsum is simply dummy text of the pricing and typesetting insdustry.
                        Lorem Ipsum has been the insdustry standard dummy text ever since the 1500s
                    </p>

                </Panel>
                <Panel header="How do I kwnow I can trust your agents?">
                    <p>Lorem Ipsum is simply dummy text of the pricing and typesetting insdustry.
                        Lorem Ipsum has been the insdustry standard dummy text ever since the 1500s
                    </p>
                </Panel>
                <Panel header="Who are your major clients?">
                    <p>Lorem Ipsum is simply dummy text of the pricing and typesetting insdustry.
                        Lorem Ipsum has been the insdustry standard dummy text ever since the 1500s
                    </p>
                </Panel>
                <Panel header="How do I get in touch?">
                    <p>Lorem Ipsum is simply dummy text of the pricing and typesetting insdustry.
                        Lorem Ipsum has been the insdustry standard dummy text ever since the 1500s
                    </p>
                </Panel>
                <Panel header="Do I need to create an account?">
                    <p>Lorem Ipsum is simply dummy text of the pricing and typesetting insdustry.
                        Lorem Ipsum has been the insdustry standard dummy text ever since the 1500s
                    </p>
                </Panel>
            </Collapse>
            <div className='quick-support'>
                <h3>Want expedited support?</h3>
                <p>Lorem Ipsum is simply dummy text of the pricing and typesetting insdustry.
                        Lorem Ipsum has been the insdustry standard dummy text ever since the 1500s
                </p>
                <Button type='primary' size='large'>
                    <i className='fas fa-envelope'></i> Email your question!
                </Button>
            </div>
        </div>
         
    </div>
  )
}

export default Faqs