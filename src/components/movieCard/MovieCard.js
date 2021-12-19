import React from "react";
import { Card } from "react-bootstrap";
import StarRatingComponent from "react-star-rating-component";
import "./MovieCard.css";
const MovieCard = ({ Movie }) => {
    return (
        <div className="all">
            <div className="movie">
                <Card style={{ width: "18rem" }} className="card">
                    <Card.Img
                        variant="top"
                        src={Movie.posterUrl}
                        height={300}
                        width={200}
                    />
                    <Card.Body>
                        <Card.Title style={{ color: "orange" }}>
                            {Movie.title}
                        </Card.Title>
                        <Card.Text>{Movie.description}</Card.Text>
                        <Card.Text>
                            <StarRatingComponent
                                name="rate"
                                editing={false}
                                starCount={5}
                                value={Movie.rating}
                            />
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default MovieCard;
