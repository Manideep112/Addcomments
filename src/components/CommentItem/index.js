// Write your code here
import './index.css'

const CommentItem = props => {
  const {commentDetails, deleting, liking} = props
  const {
    id,
    userName,
    time,
    userFeedback,
    backgroundColor,
    isLiked,
  } = commentDetails

  const deleted = () => {
    deleting(id)
  }

  const liked = () => {
    liking(id)
  }

  const imgurl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const paracontent = isLiked ? 'Liked' : 'Like'

  return (
    <li className="list-decoration">
      <div className="comment-container">
        <div className={`${backgroundColor} user-logo`}>
          <p>{userName[0]}</p>
        </div>
        <div>
          <h1 className="heading">
            {userName} <span className="span-element">{time}</span>
          </h1>
          <p className="paragraph">{userFeedback}</p>
        </div>
      </div>
      <div className="like-container">
        <button className="like-style button" type="button" onClick={liked}>
          <img src={imgurl} alt="like" className="like-image" />
          <p className="paragraph">{paracontent}</p>
        </button>
        <button
          className="button"
          type="button"
          onClick={deleted}
          testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
      <hr />
    </li>
  )
}

export default CommentItem
