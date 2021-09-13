import * as React from 'react';

export const BannerPart = ({ title, stat, statColor }: { title?: string, stat?: string; statColor?: string }) => {
    if (title) {
        return <BannerTitle>{ title }</BannerTitle>
    }
}
