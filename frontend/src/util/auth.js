import { redirect } from "react-router-dom";

export function getTokenDuration() {
    const storedDate = localStorage.getItem('expiration');
    const expirationDate = new Date(storedDate);
    const now = new Date();
    const duration = expirationDate.getTime() - now.getTime();

    return duration;
} 

export function getAuthToken() {
    const token = localStorage.getItem('token');

    return token;
}

export function tokenLoader() {

    return getAuthToken();
}

export function checkAuthLoader() {
    const token = getAuthToken();

    if(!token) {
        return redirect('/auth');
    }
}