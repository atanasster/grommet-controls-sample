import React, { Component } from 'react';
import PropTypes from 'prop-types';
import URLSearchParams from 'url-search-params';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Grommet } from 'grommet';
// eslint-disable-next-line camelcase
import { black, materialdark, materiallight, metro } from 'grommet-controls/themes';
import Page from './components/Page';
import Home from './screens/Home';
import ComponentDoc from './screens/ComponentDoc';

const history = createBrowserHistory();

const THEMES = {
  grommet: undefined,
  black,
  materialdark,
  materiallight,
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
      this.setState({
        theme: params.get('theme'),
      });
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
      this.setState({
        theme,
      }, () => history.replace(loc));
    } else {
      this.setState({
        theme: undefined,
      }, () => history.replace(loc));
    }
  }

  render() {
    const { theme } = this.state;
    return (
      <Router history={history}>
        <Grommet theme={theme ? THEMES[theme] : undefined}>
          <Page>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/:component' component={ComponentDoc} />
            </Switch>
          </Page>
        </Grommet>
      </Router>
    );
  }
}
