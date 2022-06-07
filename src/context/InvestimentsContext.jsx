import { useState, useEffect, createContext } from "react"
import useLocalStorage from "../hooks/useLocalStorage"

export const InvestimentsContext = createContext()

export function InvestimentsContextProvider({ children }) {
  const storage = useLocalStorage()

  const dataFromStorage = storage.getItem("investiments")

  const [investiments, setInvestiments] = useState(
    dataFromStorage ? JSON.parse(dataFromStorage) : []
  )

  useEffect(() => {
    storage.setItem("investiments", JSON.stringify(investiments))
  }, [investiments])

  return (
    <InvestimentsContext.Provider value={[investiments, setInvestiments]}>
      {children}
    </InvestimentsContext.Provider>
  )
}
