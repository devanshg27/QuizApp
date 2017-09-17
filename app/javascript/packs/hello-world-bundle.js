import ReactOnRails from 'react-on-rails';

import HelloWorld from '../bundles/HelloWorld/components/HelloWorld';
import Hello from '../components/hello';
import Profile from '../components/profile';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  HelloWorld,
});
ReactOnRails.register({
  Profile,
});
ReactOnRails.register({
  Hello,
});
