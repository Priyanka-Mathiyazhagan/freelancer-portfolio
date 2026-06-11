import { Project } from './project.model';

export const PROJECTS: Project[] = [
  {
    id: 'healthcare',
    title: 'PROJECT 01: HEALTHCARE MANAGEMENT SYSTEM',
    description: 'Angular-based healthcare management system.',
    tech: ['ANGULAR16+', 'RxJS', 'TYPESCRIPT', 'HTML5', 'CSS'],
    challenge: 'Large-scale UI migration involved repetitive manual conversion of forms and controls.',
    approach: 'Designed a metadata-driven translation engine that transformed legacy control definitions into the target framework. Created reusable Angular components for common controls such as textboxes, dropdowns, date pickers, and grids.',
    result: 'Successfully migrated the UI to the new format, reducing manual conversion time by 70%, improved maintainability, and enabled faster onboarding of new screens with consistent UI behavior.'
  },
  {
    id: 'ecommerce',
    title: 'PROJECT 02: E-COMMERCE APP',
    description: 'Shopping platform with cart and checkout.',
    tech: ['ANGULAR10', 'RxJS', 'REST APIs', 'HTML5', 'CSS'],
    challenge: 'Customers needed a fast and intuitive online shopping experience while administrators required efficient product and order management.',
    approach: 'Designed and implemented a scalable e-commerce platform featuring role-based access, product catalog management, shopping cart functionality, and order processing.',
    result: 'Improved product discovery through advanced filtering and search. Simplified order management workflows. Delivered a fully responsive experience across desktop and mobile devices.'
  },
  {
    id: 'portfolio',
    title: 'PROJECT 03: PORTFOLIO WEBSITE',
    description: 'Personal portfolio built with Angular.',
    tech: ['ANGULAR21', 'HTML5', 'CSS', 'SPRING BOOT'],
    challenge: 'Need to create a visually appealing and functional portfolio website.',
    approach: 'Designed a modern, responsive layout with intuitive navigation and a clean aesthetic.',
    result: 'Successfully created a professional portfolio that effectively showcases my skills and projects.'
  }
];