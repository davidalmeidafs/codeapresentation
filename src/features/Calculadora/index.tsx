import React, {useState} from "react";
import {State} from "../../infra/store/reducers";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import "./index.css";
import {Box, Button, Input, Label} from "./styles";
import Home from "../Home";

type Props = {
}

const Calculadora = (props: Props) => {

    const [inputOne, setInputOne] = useState<number>(0),
        [inputTwo, setInputTwo] = useState<number>(0),
        [total, setTotal] = useState<number>(0),
        [operationLabel, setOperationLabel] = useState<string>("+"),
        [totalOperations, setTotalOperations] = useState<number>(0);

    const onAddClick = () => {
        setOperationLabel("+");

        setTotal(inputOne + inputTwo);

        setTotalOperations(totalOperations+1);
    }

    const onSubtractClick = () => {
        setOperationLabel("-");

        setTotal(inputOne - inputTwo);
        setTotalOperations(totalOperations+1);
    }

    const onMultiplyClick = () => {
        setOperationLabel("*");

        setTotal(inputOne * inputTwo);
        setTotalOperations(totalOperations+1);
    }

    const onDivideClick = () => {
        setOperationLabel("/");

        setTotal(inputOne / inputTwo);
        setTotalOperations(totalOperations+1);
    }

    const reset = () => {
        setTotal(0);
        setOperationLabel("+");
        setInputOne(0);
        setInputTwo(0);
    }

    return (
        <>

            <Home/>
            <Box>
                <Label data-testid="total-operations" className="total-operations">{`Total operations performed: ${totalOperations}`}</Label>
                <div className="card">
                    <section >
                        <div >
                            <Input type="number" data-testid="app-input1" autoComplete="off" placeholder="Eg: 1"
                                   name="input1" value={inputOne || ""} onChange={(e) => setInputOne(parseInt(e.target.value))}/>
                            <Label data-testid="selected-operator">{operationLabel}</Label>
                            <Input type="number" data-testid="app-input2" autoComplete="off" className="ml-3 mr-3"
                                   placeholder="Eg: 2" value={inputTwo || ""} onChange={(e) => setInputTwo(parseInt(e.target.value))}/>
                        </div>

                        <div>
                            <Button type="submit" data-testid="addButton" onClick={onAddClick}>+</Button>
                            <Button type="submit" data-testid="subtractButton" onClick={onSubtractClick}>-</Button>
                            <Button type="submit" data-testid="multiplyButton" onClick={onMultiplyClick}>*</Button>
                            <Button type="submit" data-testid="divideButton" onClick={onDivideClick}>/</Button>
                        </div>

                        <div>
                            <Button type="reset" data-testid="resetButton" className="outline danger" onClick={reset}>Reset</Button>
                            <div>
                                {(total !== null) ? (<Label data-testid="result" className="result-value ma-0 slide-up-fade-in">{`Result: ${total}`}</Label>) : null}
                            </div>
                        </div>
                    </section>

                </div>
            </Box>
        </>
    );
}

const mapStateToProps = (store: State) => {
    return {
        stateGiovani: store.PESSOAL.Pessoal.tasks
    };
};

const mapToDispatchToProps = (dispatch: Dispatch) => {
    return {

    };
};

export default connect(mapStateToProps, mapToDispatchToProps)(Calculadora);
