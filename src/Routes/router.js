import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Headers } from '../Components/Header';
import { Error } from '../Pages/Error';

import { Favorite } from '../Pages/Favorite';
import { Home } from '../Pages/Home';
import { Move } from '../Pages/Move';

export function Routes() {
  return (
    <BrowserRouter>
    <Headers />
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/filme/:id" component={Move} />
          <Route exact path="/favoritos" component={Favorite} />
          <Route path="*" component={Error} />
      </Switch>
    </BrowserRouter>
  );
}