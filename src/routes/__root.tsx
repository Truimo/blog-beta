import type React from 'react'
import {createRootRoute, Outlet} from '@tanstack/react-router'
import {seo} from '~/utils/seo'
import {DefaultCatchBoundary} from '~/components/common/DefaultCatchBoundary'
import {NotFound} from '~/components/common/NotFound'
import {RootDocument} from '~/components/common/Document'
import appCss from '~/styles/app.css?url'


export const Route = createRootRoute({
    head: () => ({
        meta: [
            {
                charSet: 'utf-8',
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            ...seo({
                title: 'Blog Beta',
                description: 'A Beta Blog.',
            }),
        ],
        links: [
            {rel: 'stylesheet', href: appCss},
            {
                rel: 'apple-touch-icon',
                sizes: '180x180',
                href: '/apple-touch-icon.png',
            },
            {
                rel: 'icon',
                type: 'image/png',
                sizes: '32x32',
                href: '/favicon-32x32.png',
            },
            {
                rel: 'icon',
                type: 'image/png',
                sizes: '16x16',
                href: '/favicon-16x16.png',
            },
            {rel: 'manifest', href: '/site.webmanifest', color: '#fffff'},
            {rel: 'icon', href: '/favicon.ico'},
        ],
    }),
    component: RootComponent,
    notFoundComponent: () => <NotFound/>,
    errorComponent: (props) => {
        return (
            <RootDocument>
                <DefaultCatchBoundary {...props} />
            </RootDocument>
        )
    },
})


function RootComponent() {
    return (
        <RootDocument>
            <Outlet/>
        </RootDocument>
    )
}
