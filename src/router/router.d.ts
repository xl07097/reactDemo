interface Mata{
    title: string,
    role: string,
}

interface Item {
    path: string,
    meta: Mata,
    component: React.Component
}
