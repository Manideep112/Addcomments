import {Component} from 'react'
import './index.css'
import {formatDistanceToNow} from 'date-fns'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem/index'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {
    commentsList: [],
    userName: '',
    userFeedback: '',
    count: 0,
  }

  inputText = event => {
    const userInput = event.target.value
    this.setState({userName: userInput})
  }

  feedbackText = event => {
    const userInput = event.target.value
    this.setState({userFeedback: userInput})
  }

  onDelete = id => {
    const {commentsList} = this.state
    let {count} = this.state
    count -= 1
    const filteredList = commentsList.filter(eachcoment => eachcoment.id !== id)
    this.setState({commentsList: filteredList, count})
  }

  onLiked = id => {
    const {commentsList} = this.state
    const filteredList = commentsList.map(eachcoment =>
      eachcoment.id === id
        ? {...eachcoment, isLiked: !eachcoment.isLiked}
        : eachcoment,
    )

    this.setState({commentsList: filteredList})
  }

  addComment = event => {
    event.preventDefault()
    const {userName, userFeedback, commentsList} = this.state
    let {count} = this.state
    const time = formatDistanceToNow(new Date())
    const color =
      initialContainerBackgroundClassNames[Math.floor(Math.random() * 7)]
    const newComment = {
      id: uuidv4(),
      time,
      userName,
      userFeedback,
      backgroundColor: color,
      isLiked: false,
    }
    count += 1
    this.setState({
      commentsList: [...commentsList, newComment],
      userName: '',
      userFeedback: '',
      count,
    })
  }

  render() {
    const {commentsList, userName, userFeedback, count} = this.state

    return (
      <div className="bg-container">
        <form className="content-container">
          <h1 className="heading1">Comments</h1>
          <div className="input-img-container">
            <div className="">
              <p className="paragraph">Say something about 4.0 technologies</p>
              <input
                placeholder="Your Name"
                type="text"
                className="input-width"
                onChange={this.inputText}
                value={userName}
              />
              <br />
              <textarea
                rows="10"
                cols="30"
                placeholder="Your Comment"
                className="text-area"
                onChange={this.feedbackText}
                value={userFeedback}
              />
              <br />
              <button
                className="button-design"
                type="submit"
                onClick={this.addComment}
              >
                Add Comment
              </button>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
            />
          </div>
          <hr />
          <div className="coments-container">
            <p className="coments-count">{count}</p>
            <p className="paragraph1">comments</p>
          </div>
          <ul className="unordered-list">
            {commentsList.map(eachcomment => (
              <CommentItem
                commentDetails={eachcomment}
                key={eachcomment.id}
                deleting={this.onDelete}
                liking={this.onLiked}
              />
            ))}
          </ul>
        </form>
      </div>
    )
  }
}

export default Comments

// Write your code here
