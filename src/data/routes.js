import {
  Index,
  Facts,
  Maps,
  Availability,
  Contact
} from '../components/pages/_module';

export const routes = [
  {
    title: 'The Pitch',
    href: '/',
    component: Index
  },
  {
    title: 'The Facts',
    href: '/facts',
    component: Facts
  },
  {
    title: 'The Map',
    href: '/maps',
    component: Maps
  },
  {
    title: 'The Available Spaces',
    href: '/availability',
    component: Availability
  },
  {
    title: 'Contact',
    href: '/contact',
    component: Contact
  }
];

export default routes;
