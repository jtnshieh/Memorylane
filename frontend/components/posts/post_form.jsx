import React from 'react';

class PostForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      image_url: '',
      caption: '',
      location: '',
      user_id: 0
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.upload = this.upload.bind(this);
  }

  upload(e) {
    e.preventDefault();
    cloudinary.openUploadWidget(window.cloudinary_options, function(error, images){
      if (error === null) {
        this.setState({image_url: images[0].url});
      }
    }.bind(this));
  }

  componentDidMount() {
    this.setState({user_id: this.props.match.params.userId});
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const post = Object.assign({}, this.state);
    this.props.createPost(post).then(() => this.props.history.push('/feed'));
  }


  render() {
    const checkImagePresence = (this.state.image_url === "" ? true : false);
    const renderImageError = (this.state.image_url === "" ?
    <div>Image is required.</div> : "");

    const image = (this.state.image_url?
      <img src={this.state.image_url} height="200" width="200"></img> : "");
    return (
      <div className="new-post-form-wrap">
        <div className="new-post-form">
          <div className="form-left">
            <h3>Add Memory</h3>
          </div>
          <div className="form-right">
            <form onSubmit={this.handleSubmit}>
              <button id="upload-button" onClick={this.upload}>
                Upload Image
              </button>
              <div className="image-box">
                {image}
              </div>
              <h3>Location</h3>
              <input
                id="form-location"
                type='text'
                value={this.state.location}
                onChange={this.update('location')}
                />
              <br/>
              <h3>Description</h3>
              <textarea
                id="form-description"
                value={this.state.caption}
                onChange={this.update('caption')}
                />
              <br/>
              <input
                id="form-submit-button"
                type="submit"
                value="Submit"
                className="new-post-button"
                disabled={checkImagePresence}
                />
              {renderImageError}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default PostForm;

// <label>Image URL</label>
// <input
//   type='text'
//   value={this.state.image_url}
//   onChange={this.update('image_url')}
// />
// <br/>
