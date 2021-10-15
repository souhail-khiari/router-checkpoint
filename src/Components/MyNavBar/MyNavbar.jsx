import React from "react";
import { Navbar, Nav, Form, Button, FormControl } from "react-bootstrap";
import ReactStars from "react-stars";
import "./MyNavbar.css";

function MyNavbar({ getRateSearch, getTitleSearch }) {
    const ratingChanged = (newRating) => {
        getRateSearch(newRating);
    };

    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Movie App</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="/movies">Movie</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Form inline className="InputArea">
                <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    color2={"#ffd700"}
                    half={false}
                    className="InputAreaStars"
                />
                <FormControl
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2"
                    onChange={(e) => getTitleSearch(e.target.value)}
                />
                <Button variant="outline-info">Search</Button>
            </Form>
        </Navbar>
    );
}

export default MyNavbar;
