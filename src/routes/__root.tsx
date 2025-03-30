import {createRootRoute, HeadContent, Link, Outlet, Scripts,} from '@tanstack/react-router'
import {TanStackRouterDevtools} from '@tanstack/react-router-devtools'
import React from 'react'
import {seo} from '~/utils/seo'
import {DefaultCatchBoundary} from '~/components/common/DefaultCatchBoundary'
import {NotFound} from '~/components/common/NotFound'
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
    errorComponent: (props) => {
        return (
            <RootDocument>
                <DefaultCatchBoundary {...props} />
            </RootDocument>
        )
    },
    notFoundComponent: () => <NotFound/>,
    component: RootComponent,
})


function RootComponent() {
    return (
        <RootDocument>
            <Outlet/>
        </RootDocument>
    )
}


function RootDocument({children}: { children: React.ReactNode }) {
    return (
        <html lang="zh-CN">
        <head>
            <HeadContent/>
        </head>
        <body>
        <div className="p-2 flex gap-2 text-lg">
            <Link to="/"
                activeProps={{
                    className: 'font-bold',
                }}
                activeOptions={{exact: true}}
            >
                Home
            </Link>{' '}
            <Link to="/posts"
                activeProps={{
                    className: 'font-bold',
                }}
            >
                Posts
            </Link>{' '}
            <Link to="/users"
                activeProps={{
                    className: 'font-bold',
                }}
            >
                Users
            </Link>{' '}
            <Link to="/route-a"
                activeProps={{
                    className: 'font-bold',
                }}
            >
                Pathless Layout
            </Link>{' '}
            <Link to="/deferred"
                activeProps={{
                    className: 'font-bold',
                }}
            >
                Deferred
            </Link>{' '}
            <Link
                // @ts-expect-error
                to="/this-route-does-not-exist"
                activeProps={{
                    className: 'font-bold',
                }}
            >This Route Does Not Exist</Link>
        </div>
        <hr/>
        {children}
        <TanStackRouterDevtools position="bottom-left"/>
        <Scripts/>
        </body>
        </html>
    )
}
