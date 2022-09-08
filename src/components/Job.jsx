import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {BsFillHeartFill} from  "react-icons/bs";
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

const Job = ({ data }) => {

  const dataStore = useSelector((state)=> state.favourites.content)
  const dispatch = useDispatch()

  return(
    <Row
    className="mx-0 mt-3 p-3"
    style={{ border: '1px solid #00000033', borderRadius: 4 }}
  >
    <Col xs={3}>
      <p>
        
      <BsFillHeartFill className='mx-2' color={dataStore?.find(dato=> dato._id === data._id) ? 'red': 'black'} onClick={()=>{
        if(dataStore?.find(dato=> dato._id === data._id)){
          dispatch({
            type: 'REMOVE_FROM_FAVOURITES',
            payload: data._id,
          })
        }
        else{
          dispatch({
          type: 'ADD_TO_FAVOURITES',
          payload: data,
        })
        }
         
      }}/>
      <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </p>
      
    </Col>
    <Col xs={9}>
      <a href={data.url} target="_blank" rel="noreferrer">
        {data.title}
      </a>
    </Col>
  </Row>
  )
  
}

export default Job
