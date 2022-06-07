import { useInvestiments } from "../../hooks/useInvestiments"
import { Button } from "../Button"

export default function InvestimentTable() {
  const [investiments, setInvestiments] = useInvestiments()

  function handleCleatInvestiments() {
    setInvestiments([])
  }

  function handleDeleteInvestiments(choosedKey) {
    setInvestiments(prevInvest =>
      prevInvest.filter((investiment, key) => key !== choosedKey)
    )
  }

  return (
    <>
      <Button
        onClick={handleCleatInvestiments}
        backgroundColor={"yellow"}
        color={"black"}
      >
        Limpar Investimentos
      </Button>
      <table>
        <thead>
          <tr>
            <th>Valor</th>
            <th>Código do Ativo</th>
            <th>Quantidade</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {investiments.length > 0 ? (
            investiments.map((investiment, key) => (
              <tr key={key}>
                <td>{investiment.valor}</td>
                <td>{investiment.codAtivo}</td>
                <td>{investiment.quantidade}</td>
                <td>
                  <Button
                    onClick={() => handleDeleteInvestiments(key)}
                    backgroundColor="red"
                    color="white"
                  >
                    Apagar
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>Nenhum investimento cadastrado</tr>
          )}
        </tbody>
      </table>
    </>
  )
}
