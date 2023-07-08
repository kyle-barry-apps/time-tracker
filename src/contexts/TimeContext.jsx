import { createContext, useState } from "react";

const TimeContext = createContext()

export function TimeProvider({ children }) {
  const [time, setTime] = useState('daily')

  return(
    <TimeContext.Provider value={{ time, setTime }}>
      {children}
    </TimeContext.Provider>
  )
}

export default TimeContext

