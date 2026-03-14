import { useContext, useState, useEffect } from "react";
import ProductsContext from "../../contexts/ProductsContext";

import {
  AdminLayout,
  ProductList,
  ProductItem,
  Form,
  Input,
  Select,
  Textarea,
  Button,
  RemoveButton,
  TableHead,
  Th,
  Td,
  TableWrapper,
} from "./Admin.styles";

function Admin() {
  const { products, addProduct, removeProduct, updateProduct } = useContext(ProductsContext);

  const [form, setForm] = useState({
    id: null,
    name: "",
    price: "",
    image: "",
    description: "",
    category: "lanches",
  });

  const [isEditing, setIsEditing] = useState(false);

  // Proteção da rota: somente admin
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("loggedUser"));
    if (!user || user.role !== "admin") {
      window.location.href = "/login"; // redireciona se não for admin
    }
  }, []);

  // Atualiza o form quando clica em editar
  function handleEdit(product, category) {
    setForm({ ...product, category });
    setIsEditing(true);
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const productData = {
      ...form,
      price: Number(form.price),
    };

    if (isEditing) {
      updateProduct(productData.category, productData.id, productData);
      setIsEditing(false);
    } else {
      addProduct({
        ...productData,
        id: Date.now(),
      });
    }

    // Limpar form
    setForm({
      id: null,
      name: "",
      price: "",
      image: "",
      description: "",
      category: "lanches",
    });
  }

  return (
    <AdminLayout>
      <TableWrapper>
        <h1>Administrador</h1>
        <ProductList>
          <TableHead>
            <tr>
              <Th>Nome</Th>
              <Th>Preço</Th>
              <Th>Categoria</Th>
              <Th>Ações</Th>
            </tr>
          </TableHead>
          <tbody>
            {Object.entries(products).map(([category, items]) =>
              items.map((product) => (
                <tr key={product.id}>
                  <Td>{product.name}</Td>
                  <Td>R$ {product.price.toFixed(2)}</Td>
                  <Td>{category}</Td>
                  <Td>
                    <Button onClick={() => handleEdit(product, category)}>✏️</Button>
                    <RemoveButton onClick={() => removeProduct(category, product.id)}>❌</RemoveButton>
                  </Td>
                </tr>
              ))
            )}
          </tbody>
        </ProductList>
      </TableWrapper>

      <Form onSubmit={handleSubmit}>
        <h2>{isEditing ? "Editar Produto" : "Adicionar Produto"}</h2>

        <Input
          name="name"
          placeholder="Nome do produto"
          value={form.name}
          onChange={handleChange}
          required
        />

        <Input
          name="price"
          type="number"
          placeholder="Preço"
          value={form.price}
          onChange={handleChange}
          required
        />

        <Input
          name="image"
          placeholder="URL da imagem"
          value={form.image}
          onChange={handleChange}
          required
        />

        <Textarea
          name="description"
          placeholder="Descrição"
          value={form.description}
          onChange={handleChange}
          required
        />

        <Select name="category" value={form.category} onChange={handleChange}>
          <option value="lanches">Lanches</option>
          <option value="bebidas">Bebidas</option>
          <option value="sobremesas">Sobremesas</option>
        </Select>

        <Button type="submit">{isEditing ? "Salvar alterações" : "Salvar produto"}</Button>
      </Form>
    </AdminLayout>
  );
}

export default Admin;