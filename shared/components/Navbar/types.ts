interface NavbarProps {
    logo: {
        imageUrl: string;
        redirectTo: string;
    };
    sections: {
        text: string;
        redirectTo: string;
    }[];
    login: {
        text: string;
        redirectTo: string;
    };
    signUp: {
        text: string;
        redirectTo: string;
    };
}

export type { NavbarProps };
