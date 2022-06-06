import InvestimentForm from "../InvestimentForm"
import InvestimentTable from "../InvestimentTable"
import useLocalStorage from "../../hooks/useLocalStorage"
import { useState, useEffect } from "react"

export default function Investiment() {
  const storage = useLocalStorage()

  const dataFromStorage = storage.getItem("investiments")

  const [investiments, setInvestiments] = useState(
    dataFromStorage ? JSON.parse(dataFromStorage) : []
  )

  useEffect(() => {
    storage.setItem("investiments", JSON.stringify(investiments))
  }, [investiments])

  function handleNewInvestiment() {
    setInvestiments(prevInvest => [investiment, ...prevInvest])
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
