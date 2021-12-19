import React from 'react'
import { Carousel } from 'react-bootstrap'


const Pictures = () => {
  return (
    <div>
      <Carousel fade>
  <Carousel.Item>
    
    <img
      className="d-block w-100"
      height="600px"
      width="100%"
      src="https://i.ytimg.com/vi/YF1eYbfbH5k/maxresdefault.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      height="600px"
      width="100%"
      src="https://www.digi-news.net/wp-content/uploads/2021/10/No-Time-To-Die-Review.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
    
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      height="600px"
      width="100%"
      src="https://dailyresearchplot.com/wp-content/uploads/2020/11/The-Princess-Switch-3.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      height="600px"
      width="100%"
      src="https://a.actionz.net:2053/uploads/articles/a2506e58.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      height="600px"
      width="100%"
      src="https://static3.cbrimages.com/wordpress/wp-content/uploads/2021/10/Andrew-Gardfield-in-Spider-Man-No-Way-Home.confirmed.jpg?q=50&fit=crop&w=960&h=500&dpr=1.5"
      alt="Second slide"
    />

    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  )
}

export default Pictures
