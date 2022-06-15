import { useInvestiments } from "../../hooks/useInvestiments"
import { ButtonDanger } from "../Button"
import "./styles.css"

export default function InvestimentCard() {
  const [investiments, setInvestiments] = useInvestiments()

  function handleDeleteInvestiments(choosedKey) {
    setInvestiments(prevInvest =>
      prevInvest.filter((investiment, key) => key !== choosedKey)
    )
  }

  return (
    <section class="invest-cards">
      {investiments.map((investiment, key) => (
          <div class="invest-card">
            <div class="invest-card-header">
              <h2 class="invest-card-title">{investiment.codAtivo}</h2>
              <ButtonDanger
                onClick={() => handleDeleteInvestiments(key)}
              >
                Apagar
              </ButtonDanger>
            </div>
            <div class="invest-card-body">
              <p class="invest-card-value">{investiment.valor}</p>
              <p class="invest-card-quantidade">{investiment.quantidade}</p>
            </div>
          </div>
        ))}
    </section>
  )
}
