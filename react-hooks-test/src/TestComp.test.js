import { render, screen, fireEvent } from '@testing-library/react';
import TestComp from './TestComp';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

test('renders test component', () => {
    //Arrange
    render(<TestComp />);
    //Act   
    const header = screen.queryByRole("heading");
    //Assert    
    expect(header).toBeInTheDocument();
});

test('check-header-text', () => {

    //Arrange
    render(<TestComp />);
    //Act   
    const header = screen.queryByRole("heading");

    //Assert    
    expect(header).toHaveTextContent("Hello World");
});

test('check-header-text-after-click', () => {
    //Arrange
    render(<TestComp />);
    const expectedText = "Hello Universe";

    //Act
    const btn = screen.queryByRole("btn");
    const header = screen.queryByRole("heading");

    expect(header).toHaveTextContent("Hello World");
    fireEvent.click(btn);
    //Assert
    expect(header).toHaveTextContent(expectedText);

});

test('check-header-class-after-click', () => {
    render(<TestComp />);

    const btn = screen.queryByRole("btn");
    const header = screen.queryByRole("heading");

    fireEvent.click(btn);

    expect(header).toHaveClass("text-warning");
});

test('check-fetch-data', async () => {

    //Arrange
    const axiosMock = new MockAdapter(axios);
    const expectedData = {todos : [
        {id:1,todo:"Test 1"},
        {id:2,todo:"Test 2"},
        {id:3,todo:"Test 3"},
        {id:4,todo:"Test 4"},
    ]};

    axiosMock.onGet("https://dummyjson.com/todos").reply(200,expectedData);

    let dom = render(<TestComp />);

    //Act
    var todoItems = await screen.findAllByRole("listitem");

    //Assert
    expect(todoItems.length).toBe(expectedData.todos.length);
});