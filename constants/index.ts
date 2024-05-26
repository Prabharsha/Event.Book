export const headerLinks = [
    {
        id: 1,
        label: 'Home',
        route: '/',
    },
    {
        id: 2,
        label: 'Create Event',
        route: '/events/create',
    },
    {
        id: 3,
        label: 'My Profile',
        route: '/profile',
    },
]

export const eventDefaultValues = {
    title: '',
    description: '',
    location: '',
    imageUrl: '',
    startDateTime: new Date(),
    endDateTime: new Date(),
    categoryId: '',
    price: '',
    isFree: false,
    url: '',
}