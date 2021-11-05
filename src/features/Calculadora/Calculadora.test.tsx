import React from 'react';
import Calculadora from "./index";
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {Provider} from "react-redux";
import configureStore from "../../infra/store/configureStore";

const store = configureStore();

const renderCalculadora = () => {
    const Wrapper = (props: any) => {

        const {children} = props;

        return (
            <Provider store={store}>{children}</Provider>);
    }


    return render(<Calculadora />, { wrapper: Wrapper })
}

let totalOperations: any, input1: any, input2: any, selectedOperator: any, addButton: any, subtractButton: any, multiplyButton: any, divideButton: any, resetButton: any, isResultExist: any;
let getByTestIdFunction: any;

afterEach(() => {
    cleanup()
});

beforeEach(() => {
    let { getByTestId } = renderCalculadora();
    totalOperations = getByTestId('total-operations');
    input1 = getByTestId('app-input1');
    input2 = getByTestId('app-input2');
    selectedOperator = getByTestId('selected-operator');
    addButton = getByTestId('addButton');
    subtractButton = getByTestId('subtractButton');
    multiplyButton = getByTestId('multiplyButton');
    divideButton = getByTestId('divideButton');
    resetButton = getByTestId('resetButton');
    getByTestIdFunction = getByTestId;
});

test('initial UI is rendered as expected', () => {
    expect(totalOperations).toHaveTextContent('Total operations performed: 0');
    expect(input1.value).toBeFalsy();
    expect(input2.value).toBeFalsy();
    expect(selectedOperator).toHaveTextContent("+");
    expect(addButton).toHaveTextContent("+");
    expect(subtractButton).toHaveTextContent("-");
    expect(divideButton).toHaveTextContent("/");
    expect(addButton).toHaveTextContent("+");
    expect(resetButton).toHaveTextContent("Reset");
});

test('+ operation works', () => {
    fireEvent.input(input1, {
        target: { value: '10'}
    });
    fireEvent.input(input2, {
        target: { value: '5'}
    });
    fireEvent.click(addButton);
    expect(getByTestIdFunction('result')).toHaveTextContent('Result: 15');
    expect(selectedOperator).toHaveTextContent("+");
});

test('- operation works', () => {
    fireEvent.input(input1, {
        target: { value: '10'}
    });
    fireEvent.input(input2, {
        target: { value: '5'}
    });
    fireEvent.click(subtractButton);
    expect(getByTestIdFunction('result')).toHaveTextContent('Result: 5');
    expect(selectedOperator).toHaveTextContent("-");
});

test('* operation works', () => {
    fireEvent.input(input1, {
        target: { value: '10'}
    });
    fireEvent.input(input2, {
        target: { value: '5'}
    });
    fireEvent.click(multiplyButton);
    expect(getByTestIdFunction('result')).toHaveTextContent('Result: 50');
    expect(selectedOperator).toHaveTextContent("*");
});

test('/ operation works', () => {
    fireEvent.input(input1, {
        target: { value: '10'}
    });
    fireEvent.input(input2, {
        target: { value: '5'}
    });
    fireEvent.click(divideButton);
    expect(getByTestIdFunction('result')).toHaveTextContent('Result: 2');
    expect(selectedOperator).toHaveTextContent("/");
});

test('total operations count is maintained', () => {
    fireEvent.input(input1, {
        target: { value: '10'}
    });
    fireEvent.input(input2, {
        target: { value: '5'}
    });
    fireEvent.click(addButton);
    expect(getByTestIdFunction('result')).toHaveTextContent('Result: 15');
    fireEvent.click(subtractButton);
    expect(getByTestIdFunction('result')).toHaveTextContent('Result: 5');
    fireEvent.click(multiplyButton);
    expect(getByTestIdFunction('result')).toHaveTextContent('Result: 50');
    fireEvent.click(divideButton);
    expect(getByTestIdFunction('result')).toHaveTextContent('Result: 2');
    fireEvent.input(input1, {
        target: { value: '1'}
    });
    fireEvent.input(input2, {
        target: { value: '1'}
    });
    fireEvent.click(addButton);
    expect(getByTestIdFunction('result')).toHaveTextContent('Result: 2');
    fireEvent.click(subtractButton);
    expect(getByTestIdFunction('result')).toHaveTextContent('Result: 0');
    fireEvent.click(multiplyButton);
    expect(getByTestIdFunction('result')).toHaveTextContent('Result: 1');
    fireEvent.click(divideButton);
    expect(getByTestIdFunction('result')).toHaveTextContent('Result: 1');
    expect(totalOperations).toHaveTextContent('Total operations performed: 8');
});

test('Reset button works', () => {
    fireEvent.input(input1, {
        target: { value: '10'}
    });
    fireEvent.input(input2, {
        target: { value: '5'}
    });
    fireEvent.click(subtractButton);
    fireEvent.click(resetButton);
    expect(totalOperations).toHaveTextContent('Total operations performed: 1');
    expect(input1.value).toBeFalsy();
    expect(input2.value).toBeFalsy();
    expect(selectedOperator).toHaveTextContent("+");
    expect(getByTestIdFunction('result')).toHaveTextContent('0');
});
