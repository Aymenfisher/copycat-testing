/**
 * @jest-environment jsdom
 */
import { CopyCatContainer } from '../CopyCatContainer'
import 'regenerator-runtime'

//  Make all the imports below
import React from 'react';
import { screen, render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { async } from 'regenerator-runtime';




test('Should display copied text', () => {
    // Write your solution to task 9 within this test
    //render component
    render(
        <CopyCatContainer />
    )

    const testValue = 'Hello World!';

    //query the input field and inserting a text into it
    const input = screen.getByRole('textbox')
    userEvent.type(input, testValue);
    //query for the paragraph element
    const paragraph = screen.getByText(testValue)
    //assert
    expect(paragraph).toBeInTheDocument();

})

test('Should remove copied text after removing tape', async () => {
    // Write your solution to task 11 within this test
    render(
        <CopyCatContainer />
    )

    const testValue = 'My mouth is shut';

    //query the input field and inserting a text into it
    const input = screen.getByRole('textbox')
    userEvent.type(input, testValue);

    //query for the paragraph element
    let paragraph = screen.getByText(testValue)
    //assert the paragraph exists
    expect(paragraph).toBeInTheDocument();

    //get the img element
    const catImage = screen.getByAltText('copycat');
    // click on image to get the text dissapear
    userEvent.click(catImage);
    await waitFor(() => {
        paragraph = screen.queryByText(testValue);
        expect(paragraph).toBeNull()
    })

})

test('Should display copied text after removing tape', async () => {
    // Write your solution to tasks 12-13 within this test
    render(
        <CopyCatContainer />
    )

    const testValue = 'Eventually this will appear';

    //get the img element
    const catImage = screen.getByAltText('copycat');
    // click on image to get the text dissapear
    userEvent.click(catImage);

    // check if the quiet cat image exists
    const catImageQuiet = await screen.findByAltText('quietcat')
    expect(catImageQuiet).toBeInTheDocument();

    // check if typing something will be hidden
    const input = screen.getByRole('textbox')
    userEvent.type(input, testValue);
    const paragraph = screen.queryByText(testValue);
    expect(paragraph).toBeNull();

})

