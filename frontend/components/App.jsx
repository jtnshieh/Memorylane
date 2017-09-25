import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import PostIndexContainer from './posts/post_index_container';
import PostFormContainer from './posts/post_form_container';
import ProfileContainer from './profile/profile_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';

const App = () => (
  <div>
    <header>
      <GreetingContainer />
    </header>

    <br/>
    <Switch>
      <AuthRoute exact path="/" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <AuthRoute path="/login" component={SessionFormContainer} />
      <ProtectedRoute path = "/feed" component={PostIndexContainer} />
      <ProtectedRoute path = "/:userId/upload" component={PostFormContainer} />
      <ProtectedRoute path = "/:userId" component={ProfileContainer} />
    </Switch>
  </div>
);

// <ProtectedRoute exact path = "/:userId" component={ProfileContainer} />
export default App;
