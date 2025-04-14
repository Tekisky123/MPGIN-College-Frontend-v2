import { Facility } from '../types';

export const facilities: Facility[] = [
  {
    id: 'library',
    name: 'Central Library',
    description: 'State-of-the-art library with over 50,000 books, digital resources, and peaceful study areas.',
    icon: 'BookOpen',
    images: [
      'https://images.unsplash.com/photo-1541339907198-e08756dedf3f',
      'https://images.unsplash.com/photo-1521587760476-6c12a4b040da'
    ]
  },
  {
    id: 'hostel',
    name: 'Student Hostels',
    description: 'Separate hostels for boys and girls with modern amenities and 24/7 security.',
    icon: 'Home',
    images: [
      'https://images.unsplash.com/photo-1555854877-bab0e564b8d5',
      'https://images.unsplash.com/photo-1557425493-6f90ae4659fc'
    ]
  },
  {
    id: 'labs',
    name: 'Advanced Laboratories',
    description: 'Well-equipped laboratories for practical learning and research.',
    icon: 'Flask',
    images: [
      'https://images.unsplash.com/photo-1562408590-e32931084e23',
      'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5'
    ]
  },
  {
    id: 'sports',
    name: 'Sports Complex',
    description: 'Modern sports facilities including indoor and outdoor games, gym, and training areas.',
    icon: 'Dumbbell',
    images: [
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48',
      'https://images.unsplash.com/photo-1576941089067-2de3c901e126'
    ]
  }
];