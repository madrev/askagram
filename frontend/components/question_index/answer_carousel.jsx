import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';

class AnswerCarousel extends React.Component {

  constructor(props) {
    super(props);

    this.settings = {
      dots: false,
      infinite: false,
      speed: 500,
      arrows: true,
      slidesToShow: 3,
      slidesToScroll: 3
    };

  }


  thumbnailUrl(answer) {
     const publicKey = /.*\/(.*)/.exec(answer.image_url)[1];
     return `http://res.cloudinary.com/askagram/image/upload/w_400,h_400,c_fill/${publicKey}`;
  }

  browseArrow(direction) {
    return (
      <FontAwesome name={`angle-${direction}`}
                   size="4x" /> );
  }

  renderSlides() {
    return this.props.answers.map( answer =>
    <div>
      <div>
      <Link key={answer.id} to={`/questions/${this.props.questionId}`}>
        <img src= {this.thumbnailUrl(answer)}
             className="answer-thumbnail" />
      </Link>
    </div>
  </div>
    );

  }

  render () {
    return (
      <div className="carousel-container">
        <Slider {...this.settings}>
          {this.renderSlides()}
        </Slider>
      </div>
    );
  }
}

export default AnswerCarousel;
