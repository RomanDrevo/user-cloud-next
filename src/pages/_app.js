import App from 'next/app';
import {Provider} from 'react-redux';
import React from 'react';
import withRedux from "next-redux-wrapper";
import {applyMiddleware, compose, createStore} from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "../store/reducers";
import {watchSaga} from "../store/saga";
import { composeWithDevTools } from 'redux-devtools-extension';
import style from '../css/App.scss';
import 'antd/dist/antd.css';
import '../css/index.scss';

const
    sagaMiddleware = createSagaMiddleware(),
    middlewares = [sagaMiddleware],
    store = createStore(reducers, composeWithDevTools(applyMiddleware(...middlewares)));


sagaMiddleware.run(watchSaga);


class MyApp extends App {
    static async getInitialProps({Component, ctx}) {
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

        //Anything returned here can be access by the client
        return {pageProps: pageProps};
    }

    render() {

        //Information that was returned  from 'getInitialProps' are stored in the props i.e. pageProps
        const {Component, pageProps} = this.props;


        return (
            <Provider store={store}>
                <div className={style['app-wrapper']}>
                    <Component {...pageProps}/>
                </div>

            </Provider>
        );
    }

}

//makeStore function that returns a new store for every request
const makeStore = () => store;

console.log('----store: ', store);

//withRedux wrapper that passes the store to the App Component
export default withRedux(makeStore)(MyApp);
