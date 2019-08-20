import { Index, Facts, Maps, Availability, Contact, Legal, Test } from '../components/pages/_module';

const routes = [
  {
    title: 'Story',
    href: '/',
    component: Index
  },
  {
    title: 'Facts',
    href: '/facts',
    component: Facts
  },
  {
    title: 'Map',
    href: '/maps',
    component: Maps
  },
  {
    title: 'Availability',
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
  },
  {
    title: 'Test',
    href: '/test',
    component: Test
  }
];

export { routes, secondaryRoutes };
