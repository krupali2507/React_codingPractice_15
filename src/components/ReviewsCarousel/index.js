// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {activeReviewIndex: 0}

  onClickNext = () => {
    const {reviewsList} = this.props
    const {activeReviewIndex} = this.state
    if (activeReviewIndex < reviewsList.length - 1) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex + 1,
      }))
    }
  }

  onClickPrevious = () => {
    const {activeReviewIndex} = this.state
    if (activeReviewIndex > 0) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex - 1,
      }))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {activeReviewIndex} = this.state
    const currentReviewDetail = reviewsList[activeReviewIndex]

    return (
      <div className="bg-container">
        <div className="review-card">
          <h1>Reviews</h1>

          <div className="review-card">
            <img
              src={currentReviewDetail.imgUrl}
              alt={currentReviewDetail.username}
              className="person-image"
            />
            <div className="arrow-container">
              <button
                type="button"
                className="arrow-icon"
                onClick={this.onClickPrevious}
                testid="leftArrow"
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                  alt="left arrow"
                />
              </button>
              <p>{currentReviewDetail.username}</p>
              <button
                type="button"
                className="arrow-icon"
                onClick={this.onClickNext}
                testid="rightArrow"
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                  alt="right arrow"
                />
              </button>
            </div>
            <p>{currentReviewDetail.companyName}</p>
            <p>{currentReviewDetail.description}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
