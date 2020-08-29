class AuthTokenStorage {
    
    set AuthToken(token: string) {
        localStorage.setItem('musichunt_authtoken', token);
    }

    get AuthToken(): string {
        const token: string = localStorage.getItem('musichunt_authtoken');
        return token;
    }

    RemoveToken(): void {
        localStorage.removeItem('musichunt_authtoken');
    }

}

export const authTokenStorega = new AuthTokenStorage();