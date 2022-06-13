import {
  Container,
  Table,
  Button,
  ButtonGroup,
  Row,
  Col,
  Form,
} from 'react-bootstrap';
import React from 'react';
import {
  getProductsData,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../../api/api';

export default function Content() {
  const [data, setData] = React.useState([]);
  const [allData, setAllData] = React.useState([]);
  const [searchField, setSearchField] = React.useState('');
  const [nameField, setNameField] = React.useState('');
  const [descriptionField, setDescriptionField] = React.useState('');
  const [priceField, setPriceField] = React.useState('');
  const [product, setProduct] = React.useState(null);

  const getData = async () => {
    const res = await getProductsData();
    setData(res);
    setAllData(res);
  };

  const getProduct = (id) => {
    const res = allData.find((product) => product.id === id);
    setNameField(res.name);
    setDescriptionField(res.description);
    setPriceField(res.price);
    setProduct(res);
  };

  const cleanData = () => {
    setNameField('');
    setDescriptionField('');
    setPriceField('');
    setProduct(null);
  };

  const saveData = async () => {
    if (product) {
      const productData = {
        name: nameField,
        description: descriptionField,
        price: priceField,
      };
      await updateProduct(product.id, productData);
      await getData();
      cleanData();
    } else {
      const productData = {
        name: nameField,
        description: descriptionField,
        price: priceField,
      };
      await createProduct(productData);
      await getData();
      cleanData();
      setProduct(null);
    }
  };

  const deleteData = async (id) => {
    await deleteProduct(id);
    await getData();
    setProduct(null);
  };

  const searchProduct = (event) => {
    const value = event.target.value;
    if (value !== '') {
      setSearchField(event.target.value);
      const result = allData.filter(
        (product) =>
          product.name.toLowerCase().includes(value) |
          product.description.toLowerCase().includes(value)
      );
      setData(result);
    } else {
      setSearchField('');
      setData(allData);
    }
  };

  React.useEffect(() => {
    getData();
  }, [product]);

  return (
    <>
      <Container>
        <Row className="mt-4 mb-4 align-items-center">
          <Col className="col-10">
            <h3>Lista de Produtos</h3>
          </Col>
        </Row>

        <Row>
          <Col className="col-9">
            <Form.Control
              size="sm"
              type="text"
              placeholder="Buscar Produto"
              className="mb-1"
              onChange={searchProduct}
              value={searchField}
            />
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>Id.</th>
                  <th>Nome do Produto</th>
                  <th>Descrição</th>
                  <th>Valor</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {data.map((product) => (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.description}</td>
                    <td>{product.price}</td>
                    <td>
                      <ButtonGroup size="sm">
                        <Button
                          variant="warning"
                          onClick={() => getProduct(product.id)}
                        >
                          Editar
                        </Button>
                        <Button
                          variant="danger"
                          onClick={() => deleteData(product.id)}
                        >
                          Excluir
                        </Button>
                      </ButtonGroup>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
          <Col>
            <Form>
              <h4>Inserir Produto</h4>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nome do Produto"
                  value={nameField}
                  onChange={(e) => setNameField(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Descrição</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Descrição do Produto"
                  value={descriptionField}
                  onChange={(e) => setDescriptionField(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Valor</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="1500.00"
                  value={priceField}
                  onChange={(e) => setPriceField(e.target.value)}
                />
              </Form.Group>
              <Button
                variant="primary"
                className="m-1"
                onClick={() => saveData()}
              >
                Inserir
              </Button>
              <Button variant="danger" onClick={() => cleanData()}>
                Limpar
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
