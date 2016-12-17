import * as React from 'react';

import { Link } from 'react-router';

import AppBar from './Components/AppBar/Index';
import ViewBar from './Components/ViewBar/Index';
import AppAlerts from './Components/AppAlerts/Index';

class App extends React.Component<any, any>
{
  render()
  {
    return (
      <div className="width--full height--full">
        <div className="hard-left hard-left--delta">
          <div className="hard-left__left bg--dark-grey">
            <AppBar />
          </div>
          <div className="hard-left__content">
            <div className="position--relative width--full">
              <AppAlerts />
            </div>
            {this.props.children || (
              <ViewBar title="App Top Bar">
                <p>{'Notifications go here'}</p>
              </ViewBar>
            )}
          </div>
        </div>
      </div>
    );
  }
};

export default App;