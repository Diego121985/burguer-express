import PageContainer from "../../components/PageContainer/PageContainer.jsx";
import { useNavigate } from "react-router-dom";
import PageSection from "../../components/PageSection/PageSection.jsx";
import {
  SuccessContainer,
  SuccessIcon,
  SuccessTitle,
  SuccessText,
  SuccessButton
} from "./Success.styles";

function Success() {
  const navigate = useNavigate();

  return (
    <PageContainer>
          <PageSection>
      <SuccessContainer>
        <SuccessIcon>✔</SuccessIcon>

        <SuccessTitle>Pedido confirmado!</SuccessTitle>

        <SuccessText>
        Pagamento confirmado. Pedido em andamento.
        </SuccessText>

        <SuccessButton onClick={() => navigate("/")}>
          Voltar para o início
        </SuccessButton>
      </SuccessContainer>
      </PageSection>
    </PageContainer>
  );
}

export default Success;
