/**
 * @jest-environment jsdom
 */
import { CopyCat } from '../CopyCat'

//  Make all the imports below
import React from 'react';
import {screen,render} from '@testing-library/react';
import '@testing-library/jest-dom';





test('Should display name', () => {
// Write your solution to tasks 3-4 within this test
    /* render component */
    render(<CopyCat name={'Mack'} isCopying={true} handleChange={() =>{}} toggleTape={() => {}} value={''} />);

    //extract text :
    const headerText = screen.queryByText('Copy Cat Mack');
    //assert
    expect(headerText).toBeInTheDocument();

})

test('Should display input text in paragraph when isCopying is set to true', () => {
// Write your solution to tasks 5-6 within this test

    //arrange
    const testValue = 'Here is an input'
    //render component with desired input value
    render(
        <CopyCat value={testValue} isCopying={true} handleChange={() =>{}} toggleTape={() => {}}/>

    )
    // query for nodes 
    const input = screen.getByRole('textbox');
    const paragraph = screen.getByText(testValue);

    //assertions:
    expect(input).toHaveDisplayValue(testValue)
    expect(paragraph).toBeInTheDocument()


})

test('Should not display input text in paragraph when isCopying is set to false', () => {
// Write your solution to task 7 within this test
    //arrange
    const testValue = 'Here is an input'
    render(
        <CopyCat value={testValue} isCopying={false} handleChange={() =>{}} toggleTape={() => {}}/>
    )
    
    //querying
    const input = screen.getByRole('textbox');
    const paragaph = screen.queryByText(testValue);
    //assertion
    expect(input).toHaveDisplayValue(testValue);
    expect(paragaph).toBeNull();

})

