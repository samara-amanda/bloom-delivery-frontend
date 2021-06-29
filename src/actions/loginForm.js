//action creator is a function that returns an action
//action term is an object
//action creator receives formData as an argument
export const updateLoginForm = (formData) => {
    return {
        type: "UPDATE_LOGIN_FORM", 
       formData
    }

}

export const resetLoginForm = () => {
    return {
        type: "RESET_LOGIN_FORM"
    }

}