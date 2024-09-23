import s from './Daily.module.scss'
import { useSelector } from 'react-redux'
import Day from "./Day"

const Daily = () => {
    
    const { daily } = useSelector((state) => state.weather.data)
    
  return (
   <>
    <div className={s.daily}>
        {daily.map((day, i) => (
            <Day
                day={day}
                i={i}
                key={i}
            />
        ))}
    </div>
   </>
  )
}

export default Daily