import {render, screen} from '@testing-library/react';
import {MockedProvider} from "@apollo/client/testing";

import MainNavbar from "./Home/MainNavbar";
import Home from "./Home/Home";
import {MemoryRouter} from "react-router-dom";
import App from "./App";
import Login from "./Login/Login";
import Register from "./Register/Register";
import {TaskDetails} from "./Home/TaskDetails";


jest.mock('./Home/Home')
jest.mock('./Login/Login')
jest.mock('./Register/Register')
jest.mock('./Home/TaskDetails')
// jest.mock("./App", () => ({authToken: true}))

// Due to using Typescript I need to convince it that this is a jest Mock object
// else I get a 'Property 'mockImplementation' does not exist on type '() => Element' typescript'
const MockedHome = Home as jest.Mock;
const MockedLogin = Login as jest.Mock;
const MockedRegister = Register as jest.Mock;
const MockedTaskDetails = TaskDetails as jest.Mock;


test('renders correctly', () => {
    render(<MainNavbar/>);
    // const linkElement = screen.getByText(/learn react/i);
    // expect(linkElement).toBeInTheDocument();
});

test("Should render Home page on default route", () => {
    // Arrange
    MockedHome.mockImplementation(() => <div>HomePageMock</div>);

    // Act
    render(
        <MockedProvider>
            <MemoryRouter>
                <App/>
            </MemoryRouter>
        </MockedProvider>
    )

    // Assert
    expect(screen.getByText("HomePageMock")).toBeInTheDocument();

})

test("Should render Login Page", () => {
  // Arrange
  MockedLogin.mockImplementation(() => <div>LoginPageMock</div>);

  // Act
  render(
      <MemoryRouter initialEntries={['/login']}>
        <App/>
      </MemoryRouter>
  )

  // Assert
  expect(screen.getByText("LoginPageMock")).toBeInTheDocument();

})

test("Should render Register Page", () => {
  // Arrange
  MockedRegister.mockImplementation(() => <div>LoginPageMock</div>);

  // Act
  render(
      <MemoryRouter initialEntries={['/register']}>
        <App/>
      </MemoryRouter>
  )

  // Assert
  expect(screen.getByText("LoginPageMock")).toBeInTheDocument();

})

// test("Should render HomePage and then TaskDetails Page", () => {
//   // Arrange
//   Home.mockImplementation(() => <div>HomePageMock</div>);
//   TaskDetails.mockImplementation(() => <div>TaskDetailsPageMock</div>);
//
//   // Act
//   render(
//       <MemoryRouter>
//         <App/>
//       </MemoryRouter>
//   )
//
//   // Assert
//   expect(screen.getByText("HomePageMock")).toBeInTheDocument();
//   expect(screen.getByText("TaskDetailsPageMock")).toBeInTheDocument();
//
// })
