import axios from "axios";
import { useEffect, useState } from "react"
import { Button, Card, Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom";

const ListingProduct = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getApi = async () => {
            const res = await axios({
                method: "get", //lay ve
                url: "http://localhost:3000/products"
            })
            return setData(res.data)
            // console.log(res.data, 'res');
        }
        getApi();

    }, [])
    // console.log(data, 'data');

    return ( 
        <div className="wrap-listing">
            <Container>
                <Row>
                    <Col sx={12} sm={12} md={12}>
                        <h2 className="title">San pham noi bat</h2>
                    </Col>
                </Row>
                <Row>
                    {data.length > 0 && data.map(item => {
                        console.log(item, 'item');
                        return (
                            <Col sx={12} sm={6} md={3} key={item.id}>
                                <Card>

                                    <Link to={`products/${item.id}`}>
                                        <Card.Img variant="top" src={item.image} />

                                    </Link>

                                    <Card.Body>
                                        <Card.Title>{item.title}</Card.Title>
                                        <Card.Text>
                                            {item.description}
                                        </Card.Text>
                                        <Button variant="primary">Mua hang ngay</Button>
                                    </Card.Body>
                                </Card>

                            </Col>
                        )
                    })}

                </Row>
            </Container>
        </div>
    )
}

export default ListingProduct


// xs: Mobile
// sm: Tablet
// md: DeskTop