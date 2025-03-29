import {createRouter as createTanStackRouter} from '@tanstack/react-router'
import {routeTree} from './routeTree.gen'
import {DefaultCatchBoundary} from './components/DefaultCatchBoundary'
import {NotFound} from './components/NotFound'


export function createRouter() {
    return createTanStackRouter({
        routeTree,
        defaultPreload: 'intent',
        defaultErrorComponent: DefaultCatchBoundary,
        defaultNotFoundComponent: () => <NotFound/>,
        scrollRestoration: true,
    })
}


declare module '@tanstack/react-router' {
    interface Register {
        router: ReturnType<typeof createRouter>
    }
}
