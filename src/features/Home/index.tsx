import React from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {Button} from "../../common/components/styled/button";
import {Container} from "../../common/components/styled/elements";
import {push} from "connected-react-router";

type Props = {
    navigateTo: (path: string) => void,
}

const Home = (props: Props) => {

    const {navigateTo} = props;

    return (
        <Container>
            <Button onClick={() => navigateTo('/calculadora')}>Ir para Calculadora</Button>
            <Button onClick={() => navigateTo('/tarefas')}>Ir para Tarefas</Button>
        </Container>
    );
};

const mapToDispatchToProps = (dispatch: Dispatch) => {
    return {
        navigateTo: (path: string) =>  dispatch(push(path)),
    };
};

export default connect(null, mapToDispatchToProps)(Home);
