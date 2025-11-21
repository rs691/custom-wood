import type { Product, Project, Event } from './types';

export const placeholderProducts: Product[] = [
  {
    id: 'prod_1',
    name: 'Rustic Oak Dining Table',
    description: 'A beautiful and sturdy dining table made from solid oak, perfect for family gatherings.',
    price: 1250.00,
    imageId: 'product-1',
    stock: 5,
  },
  {
    id: 'prod_2',
    name: 'Hand-Carved Coasters (Set of 4)',
    description: 'Protect your surfaces with these unique, hand-carved wooden coasters.',
    price: 45.00,
    imageId: 'product-2',
    stock: 25,
  },
  {
    id: 'prod_3',
    name: 'Modern Walnut Bookshelf',
    description: 'A sleek and minimalist bookshelf to display your favorite reads and decor.',
    price: 800.00,
    imageId: 'product-3',
    stock: 8,
  },
  {
    id: 'prod_4',
    name: 'Personalized Family Name Sign',
    description: 'A custom wooden sign, perfect for a wedding, anniversary, or housewarming gift.',
    price: 150.00,
    imageId: 'product-4',
    stock: 15,
  },
  {
    id: 'prod_5',
    name: 'Aromatic Cedar Chest',
    description: 'A classic handcrafted hope chest made from aromatic cedar to protect your heirlooms.',
    price: 650.00,
    imageId: 'product-5',
    stock: 3,
  },
  {
    id: 'prod_6',
    name: 'Elegant Maple Cutting Board',
    description: 'A durable and beautiful cutting board that is gentle on your knives.',
    price: 75.00,
    imageId: 'product-6',
    stock: 30,
  },
];

export const placeholderProjects: Project[] = [
  {
    id: 'proj_1',
    name: 'Custom Kitchen Island',
    description: 'Designed and built a centerpiece kitchen island with a butcher block top, extra storage, and a built-in wine rack for a local family.',
    imageId: 'project-1',
    dateCompleted: '2023-10-15',
  },
  {
    id: 'proj_2',
    name: 'Carved King Headboard',
    description: 'An intricate, hand-carved headboard featuring forest motifs, crafted from a single slab of black walnut.',
    imageId: 'project-2',
    dateCompleted: '2023-08-22',
  },
  {
    id: 'proj_3',
    name: 'Reclaimed Wood Pergola',
    description: 'Constructed a large outdoor pergola for a backyard patio space, using reclaimed barn wood for a rustic, timeless look.',
    imageId: 'project-3',
    dateCompleted: '2023-06-01',
  },
  {
    id: 'proj_4',
    name: 'Floor-to-Ceiling Library',
    description: 'Built a custom, floor-to-ceiling library wall in a home office, complete with a rolling ladder and adjustable shelving.',
    imageId: 'project-4',
    dateCompleted: '2024-01-10',
  },
];

export const placeholderEvents: Event[] = [
  {
    id: 'event_1',
    name: 'Beginner Woodworking Workshop',
    description: 'Learn the basics of woodworking, from safety to your first project. All tools and materials provided.',
    date: '2024-08-10T10:00:00',
    location: 'Woodify Workshop',
  },
  {
    id: 'event_2',
    name: 'Annual Artisan Craft Fair',
    description: 'Visit our booth at the annual craft fair to see our latest creations and custom order consultations.',
    date: '2024-09-05T09:00:00',
    location: 'Downtown City Park',
  },
  {
    id: 'event_3',
    name: 'Live Edge Table Building Course',
    description: 'A 2-day intensive course where you will build and finish your own live edge coffee table to take home.',
    date: '2024-09-21T09:00:00',
    location: 'Woodify Workshop',
  },
];
