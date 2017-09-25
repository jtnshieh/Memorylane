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
    return (
      <div>
        <div className="new-post-form">
          <form onSubmit={this.handleSubmit}>
            <label>Image URL</label>
            <input
              type='text'
              value={this.state.image_url}
              onChange={this.update('image_url')}
            />
            <br/>
            <label>Location</label>
            <input
              type='text'
              value={this.state.location}
              onChange={this.update('location')}
            />
            <br/>
            <label>Description</label>
            <textarea
              value={this.state.caption}
              onChange={this.update('caption')}
            />
            <br/>
            <input
                type="submit"
                value="Submit"
                className="new-post-button"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default PostForm;
