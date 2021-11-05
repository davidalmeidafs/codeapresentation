import React from "react";
import {Route, Switch} from "react-router";
import Loadable from 'react-loadable';

const Loading = () => <div>...loading</div>;

const Home = Loadable({
    loader: () => import('../../features/Home'),
    loading: Loading,
});

const Tarefas = Loadable({
    loader: () => import('../../features/Atividades/Tarefas'),
    loading: Loading,
});

const Calculadora = Loadable({
    loader: () => import('../../features/Calculadora'),
    loading: Loading,
});

const NoMatch = Loadable({
    loader: () => import('../../common/components/404/404'),
    loading: Loading,
});

const routes = (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/tarefas" component={Tarefas} />
        <Route exact path="/calculadora" component={Calculadora} />
        <Route component={NoMatch} />
    </Switch>
);

export default routes;
