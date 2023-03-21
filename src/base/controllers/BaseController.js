import { TOKEN_KEY } from "../../config/constants";

class BaseController {
    constructor() {
        
    }
    
    save(key, value) {
        window.localStorage.setItem(key, value);
    }

    getItem(key) {
        return window.localStorage.getItem(key);
    }

    removeItem(key) {
        window.localStorage.removeItem(key);
    }

    isItemSaved(key) {
        return window.localStorage.getItem(key) !== undefined && window.localStorage.getItem(key) !== null;
    }

    saveToken(token) {
        this.save(TOKEN_KEY, token);
    }

    getToken() {
        return this.getItem(TOKEN_KEY);
    }

    removeToken() {
        this.removeItem(TOKEN_KEY);
    }
    
    isTokenSaved() {
        return this.isItemSaved(TOKEN_KEY);
    }
}

export default BaseController;