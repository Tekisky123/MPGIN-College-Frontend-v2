export const collegeDepartments = {
    engineering: [
      'Civil Engineering',
      'Computer Science & Engineering',
      'Electrical Engineering',
      'Mechanical Engineering',
      'Skill Technology',
      'Electrical & Electronic Engineering'
    ],
    management: [
      'Financial Management',
      'Human Resource Management',
      'Marketing Management'
    ],
    polytechnic: [
      'Civil Engineering',
      'Computer Engineering',
      'Electrical Engineering',
      'Mechanical Engineering'
    ]
  };
  
  export type CollegeType = keyof typeof collegeDepartments;