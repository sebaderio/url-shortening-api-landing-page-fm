const appConfig = {
    apiUrl: process.env.NEXT_PUBLIC_VERCEL_URL
        ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api`
        : "http://localhost:3000/api",
    cors: {
        allowedOrigins: process.env.NEXT_PUBLIC_VERCEL_URL
            ? [`https://${process.env.NEXT_PUBLIC_VERCEL_URL}`]
            : ["http://localhost:3000", "http://0.0.0.0:3000"],
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
    },
    searchEngine: {
        title: "Shortly | Free URL Shortener",
        description:
            "Build your brand's recognition and get detailed insights on how your links are performing.",
    },
    shortening: {
        length: 6,
    },
    defaults: {
        altImageText: "Undefined",
        altText: "Undefined",
    },
    navbar: {
        logo: {
            imageUrl: "logo.svg",
            redirectTo: "/",
        },
        sections: [
            {
                text: "Features",
                redirectTo: "/features",
            },
            {
                text: "Pricing",
                redirectTo: "/pricing",
            },
            {
                text: "Resources",
                redirectTo: "/resources",
            },
        ],
        login: {
            text: "Login",
            redirectTo: "/login",
        },
        signUp: {
            text: "Sign Up",
            redirectTo: "/signup",
        },
    },
    hero: {
        title: "More than just shorter links",
        description:
            "Build your brand's recognition and get detailed insights on how your links are performing.",
        button: {
            text: "Get Started",
            redirectTo: "/",
        },
        imageUrl: "illustration-working.svg",
    },
    search: {
        placeholderText: "Shorten a link here...",
        button: {
            text: "Shorten It!",
            redirectTo: null,
        },
    },
    statistics: {
        title: "Advanced Statistics",
        description:
            "Track how your links are performing across the web with our advanced statistics dashboard.",
        items: [
            {
                title: "Brand Recognition",
                description:
                    "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content.",
                imageUrl: "icon-brand-recognition.svg",
            },
            {
                title: "Detailed records",
                description:
                    "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
                imageUrl: "icon-detailed-records.svg",
            },
            {
                title: "Fully Customizable",
                description:
                    "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
                imageUrl: "icon-fully-customizable.svg",
            },
        ],
    },
    banner: {
        title: "Boost your links today",
        button: {
            text: "Get Started",
            redirectTo: "/",
        },
    },
    footer: {
        logo: {
            redirectTo: "/",
        },
        sections: [
            {
                text: "Features",
                items: [
                    { text: "Link Shortening", redirectTo: "/link-shortening" },
                    { text: "Branded Links", redirectTo: "/branded-links" },
                    { text: "Analytics", redirectTo: "/analytics" },
                ],
            },
            {
                text: "Resources",
                items: [
                    { text: "Blog", redirectTo: "/blog" },
                    { text: "Developers", redirectTo: "/developers" },
                    { text: "Support", redirectTo: "/support" },
                ],
            },
            {
                text: "Company",
                items: [
                    { text: "About", redirectTo: "/company/about" },
                    {
                        text: "Our Team",
                        redirectTo: "/company/our-team",
                    },
                    { text: "Careers", redirectTo: "/company/careers" },
                    { text: "Contact", redirectTo: "/company/contact" },
                ],
            },
        ],
        media: {
            facebook: {
                text: "Facebook",
                icon: "icon-facebook.svg",
                redirectTo: "https://facebook.com",
            },
            twitter: {
                text: "Twitter",
                icon: "icon-twitter.svg",
                redirectTo: "https://twitter.com",
            },
            pinterest: {
                text: "Pinterest",
                icon: "icon-pinterest.svg",
                redirectTo: "https://pinterest.com",
            },
            instagram: {
                text: "Instagram",
                icon: "icon-instagram.svg",
                redirectTo: "https://instagram.com",
            },
        },
    },
};

export default appConfig;
