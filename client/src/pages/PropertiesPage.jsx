import React, {useEffect} from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { useDispatch, useSelector} from 'react-redux'
import { toast } from "react-toastify";
import Spinner from '../components/Spinner';
import { getProperties } from '../features/properties/propertySlice'

const PropertiesPage = () => {
  const {properties, isLoading, isError, message } = useSelector(
		state => state.properties
	);

  const dispatch = useDispatch()

  useEffect(() => {
    if (isError) {
			toast.error(message, { icon: "😭" });
		}

    dispatch(getProperties())
  }, [dispatch, isError, message])

  if(isLoading) {
    return <Spinner />;
  } 

  return (
    <>
        <Container>
            <Row>
                <Col className='mg-top'>
                    <h1>Properties will be displayed here</h1>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default PropertiesPage