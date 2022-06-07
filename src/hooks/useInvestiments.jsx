import { useContext } from "react"
import { InvestimentsContext } from "../context/InvestimentsContext"

export function useInvestiments() {
  return useContext(InvestimentsContext)
}
