import { Container, Content, Title } from "./PageContainer.js";

function PageContainer({ title, children }) {
  return (
    <Container>
      {title && <Title>{title}</Title>}
      <Content>{children}</Content>
    </Container>
  );
}

export default PageContainer;
