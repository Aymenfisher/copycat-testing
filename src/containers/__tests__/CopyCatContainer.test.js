/**
 * @jest-environment jsdom
 */
import { CopyCatContainer } from '../CopyCatContainer'
import 'regenerator-runtime'

//  Make all the imports below
import React from 'react';
import {screen,render} from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';




test('Should display copied text', () => {
    // Write your solution to task 9 within this test
    //render component
    render(
        <CopyCatContainer />
    )
    
    const testValue = 'Hello World!';

    //query the input field and inserting a text into it
    const input = screen.getByRole('textbox')
    userEvent.type(input,testValue);
    //query for the paragraph element
    const paragraph = screen.getByText(testValue)
    //assert
    expect(paragraph).toBeInTheDocument();

})

test('Should remove copied text after removing tape', () => {
    // Write your solution to task 11 within this test



})

test('Should display copied text after removing tape', () => {
    // Write your solution to tasks 12-13 within this test


})

