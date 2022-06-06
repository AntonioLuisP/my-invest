// import useLocalStorage from "../../hooks/useLocalStorage"
// import { useState, useEffect } from "react"

export default function InvestimentTable({ investiments }) {
  // const storage = useLocalStorage()
  // const [investiments, setInvestiments] = useState([])

  // useEffect(() => {
  //   const dataFromStorage = storage.getItem("investiments")
  //   if (dataFromStorage) setInvestiments(JSON.parse(dataFromStorage))
  // }, [])

  return (
    <table>
      <thead>
        <tr>
          <th>Valor</th>
          <th>Código do Ativo</th>
          <th>Quantidade</th>
        </tr>
      </thead>
      <tbody>
        {investiments.map((investiment, key) => (
          <tr key={investiment.id}>
            <td>{investiment.valor}</td>
            <td>{investiment.codAtivo}</td>
            <td>{investiment.quantidade}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
