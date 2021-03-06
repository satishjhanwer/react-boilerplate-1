import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Root from './Root';
import configureStore from './redux/store/configure-store';
import { INITIAL_STATE } from './common/app-const';

// Require globals
import 'babel-polyfill';
import './scss/style.scss';
import 'lodash';

const store = configureStore(INITIAL_STATE);

const FontAwesomeConfig = { autoReplaceSvg: 'nest' };

const ROOT_ELEMENT_ID_AS_DEFINED_IN_INDEX_HTML = 'example-app';

ReactDOM.render(
    <AppContainer>
        <Root store={store} />
    </AppContainer>,
    document.getElementById(ROOT_ELEMENT_ID_AS_DEFINED_IN_INDEX_HTML)
);

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./Root', () => {
        const NextApp = require('./Root').default;
        ReactDOM.render(
            <AppContainer>
                <NextApp store={store}/>
            </AppContainer>,
            document.getElementById(ROOT_ELEMENT_ID_AS_DEFINED_IN_INDEX_HTML)
        );
    });
}
