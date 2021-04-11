import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Main } from '../Pages';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    {/* <Route exact path="/*" component={<div>페이지 존재하지 않음 </div>} /> */}
  </Switch>
);

export default Routes;
