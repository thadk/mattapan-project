interface Theme {
    spacing: {
        Xs: '4px',
        S: '8px',
        M: '16px',
        L: '24px',
        Xl: '32px',
        Xxl: '40px',
    };

    // Mobile-first approach. Develop features thinking for mobile-use first then anything bigger than 576px falls into 'tablet' range. Anything bigger than 921px falls into 'desktop' range.
    mediaQuery: {
        tablet: '576px';
        desktop: '921px';
    }
}
