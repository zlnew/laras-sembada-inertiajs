<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return array_merge(parent::share($request), [
            'auth' => [
                'user' => $request->user(),
            ],
            'role' => function () use ($request) {
                if ($request->user()) {
                    $roleName = $request->user()->roles->first()->name;
                    return $roleName;
                }
            },
            'permissions' => function () use ($request) {
                if ($request->user()) {
                    $permissionsViaRoles = $request->user()->getPermissionsViaRoles();
                    $directPermissions = $request->user()->getDirectPermissions();
                    
                    return $permissionsViaRoles->merge($directPermissions)->pluck('name')->toArray();
                }
            },
            'query' => function () use ($request) {
                return $request->query();
            },
            'ziggy' => function () use ($request) {
                return array_merge((new Ziggy)->toArray(), [
                    'location' => $request->url(),
                    'request' => $request->all(),
                ]);
            },
            'flash' => [
                'success' => fn () => $request->session()->get('success'),
                'error' => fn () => $request->session()->get('error'),
            ],
        ]);
    }
}
