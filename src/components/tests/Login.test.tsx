import {render} from "@testing-library/react";
import {MockedProvider} from "@apollo/client/testing";
import {useMutation} from "@apollo/client";
import Login from "../Login/Login";


jest.mock('../Login/Login')
const MockedLogin = Login as jest.Mock;

// function Login_test(){
//     const {loading} = useMutation(LOGIN_MUTATION, {
//         variables: {email: data.email, password: data.password}
//     });
// }
//
// const mocks = []


test('renders correctly', () => {
    render(<Login/>);
    // const linkElement = screen.getByText(/learn react/i);
    // expect(linkElement).toBeInTheDocument();
});

// test( "Test login" , () => {
//     render(
//         <MockedProvider mocks={mocks} addTypename={false}>
//             <Dog name="Buck" />
//         </MockedProvider>
//     )
//
// })