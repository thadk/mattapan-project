interface Theme {
    spacing: {
        xs: '4px',
        s: '8px',
        m: '16px',
        l: '24px',
        xl: '32px',
        xxl: '40px',
    };

    // Mobile-first approach. Develop features thinking for mobile-use first then anything bigger than 576px falls into 'tablet' range. Anything bigger than 921px falls into 'desktop' range.
    mediaQuery: {
        tablet: '576px';
        desktop: '921px';
    };

    fonts: {
        dm: string,
        fontWeight: {
            bold: number,
            medium: number,
            regular: number
        }
    }
}
