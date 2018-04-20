import React, { Component } from 'react';
import PropTypes from 'prop-types';
import URLSearchParams from 'url-search-params';
import { Router, Route, Switch } from 'react-router-dom';

import { createBrowserHistory } from 'history';

import { Grommet } from 'grommet';
// eslint-disable-next-line camelcase
import { black, material_light, material_dark, metro } from 'grommet-controls/themes';


import ColorInput from './screens/ColorInput';
import Colors from './screens/Colors';
import Card from './screens/Card';
import DateInput from './screens/DateInput';
import DropInput from './screens/DropInput';
import EmailInput from './screens/EmailInput';
import Form from './screens/Form';
import ImageStamp from './screens/ImageStamp';
import MaskedInput from './screens/MaskedInput';
import MultiSelect from './screens/MultiSelect';
import Notification from './screens/Notification';
import Home from './screens/Home';
import NumberInput from './screens/NumberInput';
import PagingTable from './screens/PagingTable';
import PasswordInput from './screens/PasswordInput';
import Spinning from './screens/Spinning';
import Tag from './screens/Tag';
import Tags from './screens/Tags';

const history = createBrowserHistory();

const THEMES = {
  grommet: undefined,
  black,
  material_light,
  material_dark,
  metro,
};

export default class App extends Component {
  static childContextTypes = {
    currentTheme: PropTypes.string,
    onThemeChange: PropTypes.func,
  };

  state = {
    theme: undefined,
  };

  getChildContext() {
    return {
      currentTheme: this.state.theme,
      onThemeChange: (...args) => this.onThemeChange(...args),
    };
  }

  componentDidMount() {
    if (!this.unlisten) {
      this.unlisten = history.listen((location) => {
        const { theme } = this.state;
        if (!location.search && theme && theme !== 'grommet') {
          // this is to support routes without the theme as a url search param
          history.replace(`${window.location.pathname}?theme=${theme}`);
        }
      });
    }
    if (window.location.search) {
      const params = new URLSearchParams(window.location.search);
      /* eslint-disable react/no-did-mount-set-state */
      this.setState({ theme: params.get('theme') });
      /* eslint-enable react/no-did-mount-set-state */
    }
  }

  componentWillUnmount() {
    if (this.unlisten) {
      this.unlisten();
      this.unlisten = undefined;
    }
  }

  onThemeChange(theme) {
    let loc = window.location.pathname;
    if (theme !== 'grommet') {
      loc += `?theme=${theme}`;
      this.setState({ theme }, () => history.replace(loc));
    } else {
      this.setState({ theme: undefined }, () => history.replace(loc));
    }
  }

  render() {
    const { theme } = this.state;
    return (
      <Router history={history}>
        <Grommet theme={theme ? THEMES[theme] : undefined}>
          <Switch>
            <Route exact={true} path='/' component={Home} />
            <Route exact={true} path='/card' component={Card} />
            <Route exact={true} path='/colorinput' component={ColorInput} />
            <Route exact={true} path='/colors' component={Colors} />
            <Route exact={true} path='/dateinput' component={DateInput} />
            <Route exact={true} path='/dropinput' component={DropInput} />
            <Route exact={true} path='/emailinput' component={EmailInput} />
            <Route exact={true} path='/form' component={Form} />
            <Route exact={true} path='/imagestamp' component={ImageStamp} />
            <Route exact={true} path='/maskedinput' component={MaskedInput} />
            <Route exact={true} path='/multiselect' component={MultiSelect} />
            <Route exact={true} path='/notification' component={Notification} />
            <Route exact={true} path='/numberinput' component={NumberInput} />
            <Route exact={true} path='/paging-table' component={PagingTable} />
            <Route exact={true} path='/passwordinput' component={PasswordInput} />
            <Route exact={true} path='/spinning' component={Spinning} />
            <Route exact={true} path='/tag' component={Tag} />
            <Route exact={true} path='/tags' component={Tags} />
          </Switch>
        </Grommet>
      </Router>
    );
  }
}
