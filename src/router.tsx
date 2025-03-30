import {createRouter as createTanStackRouter} from '@tanstack/react-router'
import {routeTree} from './routeTree.gen'
import {DefaultCatchBoundary} from './components/common/DefaultCatchBoundary'


export function createRouter() {
    return createTanStackRouter({
        routeTree,
        defaultPreload: 'intent',
        defaultErrorComponent: DefaultCatchBoundary,
        scrollRestoration: true,
    })
}


declare module '@tanstack/react-router' {
    interface Register {
        router: ReturnType<typeof createRouter>
    }
}
