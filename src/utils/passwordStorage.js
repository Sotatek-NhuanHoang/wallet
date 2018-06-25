import { AsyncStorage } from 'react-native';


export const Password = {
    getPassword() {
        return AsyncStorage.getItem('password');
    },

    savePassword(newPassword) {
        return AsyncStorage.setItem('password', newPassword);
    },

    async confirmPassword(confirmPassword) {
        const savedPassword = await Password.getPassword();
        return savedPassword === confirmPassword;
    },
};


export default Password;
