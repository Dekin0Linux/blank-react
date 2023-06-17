import React from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { changeName,setNum } from './reduxStore/userReducer'

function Lastborn() {
    const {name,num,age} = useSelector((state)=>state.users)
    const dispatch = useDispatch()

    const username = 'aziz'

    

  return (
    <div>
        Lastborn is using the name <h3>{num}</h3>

        <h3>{name}</h3>
        
        <button onClick={()=>dispatch(changeName(username))}>Change Number</button>
    </div>
  )
}

export default Lastborn