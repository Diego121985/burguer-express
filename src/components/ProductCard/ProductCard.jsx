import { Card, Image, Info, Title, Description, Footer, Price, Button } from "./ProductCard.js";


function ProductCard({ product, onAdd }) {
  return (
    <Card>
      <Image src={product.image} alt={product.name} />

      <Info>
        <Title>{product.name}</Title>
        <Description>{product.description}</Description>
        <Footer>
          <Price>R$ {product.price.toFixed(2)}</Price>
          <Button onClick={onAdd}>Adicionar ao carrinho</Button>
        </Footer>
      </Info>
    </Card>
  );
}

export default ProductCard;
