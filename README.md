# Memorylane

[Memorylane](https://memorylane-justinshieh.herokuapp.com/#/) is a web application inspired by Instagram for following other users and sharing pictures. It was built using Ruby on Rails backend with PostgreSQL database and a React/Redux frontend.

## Technologies

|Backend|Frontend|
|---|---|
|Ruby On Rails|React|
|JBuilder|Redux|
|PostgreSQL Database|Javascript|
|Heroku|HTML|
||SCSS/CSS|
||npm|
||webpack|

#### Other
* Cloudinary for users' profile pictures and post pictures storage.

* BCrypt for password-salting and hashing for a secure authentication system.

## Features & Implementation

* Users can upload pictures to their profile, which show up on both their profile and the photo feed page.

* Users can comment on a post and delete their comment. They can also like or unlike a post.

### Secure Authentication

Users can sign up or log in to Memorylane using a secure authentication system. The demo login feature allows anyone to explore Memorylane's various features without being a registered user.

![Memorylane Login](https://github.com/jtnshieh/Memorylane/blob/master/app/assets/images/Memorylane_login.png)

### Feed

Users can comment on posts and delete their comments, as well as like or unlike a post.

![Memorylane Feed](https://github.com/jtnshieh/Memorylane/blob/master/app/assets/images/Memorylane_feed.png)

Something interesting and challenging that occurred while I was constructing my feed page was getting the `PostIndexContainer` to re-render to display the comment posted by the user instantaneously. To accomplish this, I had to attach a promise of `fetchPost` to `createComment` inside my `handleSubmit` function in my presentational component `Comments`. This promise returns a "new" post - which in reality is the same post, just with the additional comment - which then triggers the re-rendering.
````
handleSubmit(e) {
    e.preventDefault();
    const comment = Object.assign({}, this.state);
    comment['post_id'] = this.props.post.id;
    this.props.createComment(comment).then(() => {
      this.props.fetchPost(this.props.post.id);
      this.setState({"body":""});
    });
  }
````
### Post Upload

Users can upload posts.

![Memorylane Upload](https://github.com/jtnshieh/Memorylane/blob/master/app/assets/images/Memorylane_upload.png)

## Additional Features

* Add the Follow feature.

* Implement user search.
