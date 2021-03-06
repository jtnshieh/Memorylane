import { combineReducers } from 'redux';
import ErrorsReducer from './errors_reducer';
import SessionReducer from './session_reducer';
import PostsReducer from './posts_reducer';
import UserReducer from './user_reducer';
import CommentsReducer from './comments_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  errors: ErrorsReducer,
  posts: PostsReducer,
  user: UserReducer,
  comments: CommentsReducer
});

export default RootReducer;
