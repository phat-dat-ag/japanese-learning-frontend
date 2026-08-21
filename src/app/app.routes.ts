import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./core/layout/main-layout/main-layout')
                .then((m) => m.MainLayout),
        children: [
            {
                path: '',
                loadComponent: () =>
                    import('./features/home/home')
                        .then((m) => m.Home),
            },
            {
                path: 'flashcards',
                loadChildren: () =>
                    import('./features/flashcard/flashcard.routes')
                        .then(m => m.FLASHCARD_ROUTES)
            },
        ],
    },
    {
        path: '**',
        redirectTo: ''
    }
];