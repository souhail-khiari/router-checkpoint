import { Card, Button } from "react-bootstrap";
import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

function MoviePage({ movie }) {
    let Id = useParams();

    return (
        <div style={{ textAlign: "center" }}>
            <Card bg="dark">
                <Card.Header
                    style={{
                        backgroundColor: "#AE7C54",
                    }}
                >
                    <h1 style={{ color: "#13424c", fontSize: "60px" }}>
                        Welome
                    </h1>
                </Card.Header>

                <Card.Body>
                    <div>
                        <Card.Title>
                            <h2
                                style={{
                                    textAlign: "center",
                                    fontSize: "45px",
                                    fontFamily: "fantasy",
                                    color: "#7FACD6",
                                }}
                            >
                                {
                                    movie.find(
                                        (element) =>
                                            element.id === Number(Id.id)
                                    ).title
                                }
                            </h2>
                        </Card.Title>
                        <Card.Text
                            style={{
                                textAlign: "center",
                                fontSize: "25px",
                                fontFamily: "cursive",
                                color: "#A5678E",
                            }}
                        >
                            {
                                movie.find(
                                    (element) => element.id === Number(Id.id)
                                ).description
                            }
                        </Card.Text>
                        <div>
                            {
                                movie.find(
                                    (element) => element.id === Number(Id.id)
                                ).trailer
                            }
                        </div>
                    </div>
                    <Link to={`/Movies`}>
                        <Button variant="primary">Go Back</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
}

export default MoviePage;
