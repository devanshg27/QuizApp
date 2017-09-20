import ReactOnRails from 'react-on-rails';

import HelloWorld from '../bundles/HelloWorld/components/HelloWorld';
import Hello from '../components/hello';
import UserHome from '../components/userHome';
import AdminHome from '../components/adminHome';
import Profile from '../components/profile';
import GenrePage from '../components/genrePage';
import QuestionPage from '../components/questionPage';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  HelloWorld,
});
ReactOnRails.register({
  GenrePage,
});
ReactOnRails.register({
  UserHome,
});
ReactOnRails.register({
  AdminHome,
});
ReactOnRails.register({
  Profile,
});
ReactOnRails.register({
  QuestionPage,
});
ReactOnRails.register({
  Hello,
});
