export type ILoginData = {
    username: string,
    email: string,
    password: string,
    confirmPassword: string,
    isError: boolean,
    helperText: string
}

export const initialLoginDataState: ILoginData = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    isError: false,
    helperText: "U"
}

export type LoginActionType = { type: "setUsername", payload: string }
    | { type: "setEmail", payload: string }
    | { type: "setPassword", payload: string }
    | { type: "setconfirmPassword", payload: string }
    | { type: "setIsError", payload: boolean }
    | { type: "setHelperText", payload: string };

export const AuthReducer = (state: ILoginData, action: LoginActionType) => {
    switch (action.type) {
        case 'setUsername':
            return {
                ...state,
                username: action.payload,
            }

        case 'setEmail':
            return {
                ...state,
                email: action.payload
            }

        case 'setPassword':
            return {
                ...state,
                password: action.payload
            }

        case 'setconfirmPassword':
            return {
                ...state,
                confirmPassword: action.payload
            }

        case 'setIsError':
            return {
                ...state,
                isError: action.payload
            }

        case 'setHelperText':
            return {
                ...state,
                helperText: action.payload
            }
    }
}


//https://surajsharma.net/blog/react-login-form-typescript a suivre...
