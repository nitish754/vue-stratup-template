import ApiService from './ApiService';
import { useToast } from 'vue-toastification';

const toast = useToast();

export const Login = async (credentials) => {
    try {
        const response = await ApiService.post('/login', credentials);
        if (response.status === 200) {
            toast.success('Login successfully');
        }
        ApiService.setHeader();
        return response.data;
    } catch (error) {
        // handle error 
        if (error.response) {
            const httpStatus = error.response.status;
            console.log("Http Status :" + httpStatus)
            // handle validation error in API 
            if (httpStatus === 400) {
                const validationError = error.response.data.data;
                // throw new Error("");
                // fetch error 
                if (validationError) {
                    const validationMessage = [];
                    Object.keys(validationError).forEach((field) => {
                        const message = validationError[field];

                        console.log(`final Message : ${message}`)
                        validationMessage.push(message[0]);
                    })
                    console.log(validationMessage);
                    toast.error(validationMessage[0]);
                }
                else if (error.response.data.message) {
                    toast.error(error.response.data.message);
                } else {
                    toast.error("Something went wrong !")
                }

            } else {
                console.log('Server error:', error.response.data);
                toast.error('Internal Server Error');
            }
        } else if (error.request) {
            console.log("No Response from server : ", error.message);
            toast.error("No Response from server");
        } else {
            console.log('Request setup error:', error.message);
            toast.error('Request setup error');
        }
    }
}

export const Logout = async () => {
    try {
        const res = await ApiService.post('/logout');
        return res.data;
    } catch (error) {
        if (error.response) {
            console.log("logout error", error.response.data);
            toast.error(error.response.data);
        }else if(error.request)
        {
            console.log("No Response from server : ", error.message);
            toast.error('No response from server')
        }
    }
}

