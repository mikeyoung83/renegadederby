// navigation.ts
// Site link groups, used by the footer. Every link is listed flat under a
// heading, with no dropdowns. Keep this in sync with Nav.astro (the header
// menu) when pages are added or moved.

export interface NavLink {
    label: string;
    href: string;
}

export interface NavGroup {
    title: string;
    links: NavLink[];
}

export const footerNav: NavGroup[] = [
    {
        title: "The League",
        links: [
            { label: "Home", href: "/" },
            { label: "About Us", href: "/about/" },
            { label: "Contact Us", href: "/contact-us/" },
        ],
    },
    {
        title: "Schedules",
        links: [
            { label: "Games", href: "/games/" },
            { label: "League Calendar", href: "/league-calendar/" },
        ],
    },
    {
        title: "Teams & Support",
        links: [
            { label: "Bombshell Battalion", href: "/teams/bombshells/" },
            { label: "Striking Vikings", href: "/teams/vikings/" },
            { label: "Officials", href: "/teams/officials/" },
            { label: "Sponsors", href: "/sponsors/" },
        ],
    },
    {
        title: "Join Us",
        links: [
            { label: "Information", href: "/join-us/" },
            { label: "Membership Application", href: "/join-us/membership-application/" },
            { label: "Insurance", href: "/join-us/roller-derby-insurance/" },
        ],
    },
];

export const socialLinks = {
    facebook: "https://www.facebook.com/RDerbyDames/",
    instagram: "https://www.instagram.com/rderbydames/",
};
