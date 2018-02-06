import React from 'react';
import Header from './Header';
import Body from './Body';
import ScheduleDisplay from './ScheduleDisplay';
import { Switch, Route } from 'react-router-dom';
import Season from './Season';
import Error404 from './Error404';

function App() {
  return (
    <div>
      <style jsx global>{`
        body {
          font-family: Helvetica;
        }
        a {
          color: #888;
          text-decoration: none;
        }
        li, h3 {
          color: hotpink;
        }
      `}</style>
      <Header />
      <Switch>
        <Route exact path="/" component={Body} />
        <Route exact path="/schedule" component={ScheduleDisplay} />
        <Route exact path="/produce" component={Season} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
