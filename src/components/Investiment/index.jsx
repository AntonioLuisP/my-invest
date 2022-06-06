import InvestimentForm from "../InvestimentForm"
import InvestimentTable from "../InvestimentTable"
import useLocalStorage from "../../hooks/useLocalStorage"
import { useState, useEffect } from "react"

export default function Investiment() {
  const storage = useLocalStorage()
  const [investiments, setInvestiments] = useState([])

  useEffect(() => {
    const dataFromStorage = storage.getItem("investiments")
    if (dataFromStorage) {
      setInvestiments(JSON.parse(dataFromStorage))
    } else {
      storage.setItem("investiments", JSON.stringify(investiments))
    }
  }, [])

  function handleNewInvestiment(investiment) {
    setInvestiments(prevInvest => [investiment, ...prevInvest])
    storage.setItem("investiments", JSON.stringify(investiments))
  }

  return (
    <>
      <InvestimentForm
        onAddInvestiment={investiment => handleNewInvestiment(investiment)}
      />
      <InvestimentTable investiments={investiments} />
    </>
  )
}
