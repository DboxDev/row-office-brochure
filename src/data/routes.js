import {
  Index,
  Facts,
  Maps,
  Availability,
  Contact,
  Legal
} from '../components/pages/_module';

const routes = [
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

const secondaryRoutes = [
  {
    title: 'Legal',
    href: '/legal',
    component: Legal
  }
];

export { routes, secondaryRoutes };
