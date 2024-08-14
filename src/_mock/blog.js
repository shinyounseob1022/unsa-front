// import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

const POSTS = [
  {
    id: 1,
    cover: `/assets/images/covers/cover_1.jpg`,
    title: '벤치프레스 자세 평가점',
    createdAt: '2024-08-14',
    view: 526,
    comment: 112,
    share: 27,
    favorite: 47,
    author: {
      name: '테스터1',
      avatarUrl: `/assets/images/avatars/avatar_1.jpg`,
    },
  },
  {
    id: 2,
    cover: `/assets/images/covers/cover_2.jpg`,
    title: '오운완!',
    createdAt: '2024-08-14',
    view: 999,
    comment: 12,
    share: 22,
    favorite: 119,
    author: {
      name: '테스터2',
      avatarUrl: `/assets/images/avatars/avatar_2.jpg`,
    },
  },
  {
    id: 3,
    cover: `/assets/images/covers/cover_3.jpg`,
    title: '4분할 루틴 좀 봐주세요..',
    createdAt: '2024-08-14',
    view: 1209,
    comment: 578,
    share: 31,
    favorite: 280,
    author: {
      name: '테스터3',
      avatarUrl: `/assets/images/avatars/avatar_3.jpg`,
    },
  },
  {
    id: 4,
    cover: `/assets/images/covers/cover_4.jpg`,
    title: '우리 헬스장 리뷰',
    createdAt: '2024-08-14',
    view: 1209,
    comment: 578,
    share: 31,
    favorite: 280,
    author: {
      name: '테스터4',
      avatarUrl: `/assets/images/avatars/avatar_4.jpg`,
    },
  },
  {
    id: 5,
    cover: `/assets/images/covers/cover_5.jpg`,
    title: '보충제 추천',
    createdAt: '2024-08-14',
    view: 1,
    comment: 1,
    share: 1,
    favorite: 1,
    author: {
      name: '테스터5',
      avatarUrl: `/assets/images/avatars/avatar_5.jpg`,
    },
  },
  {
    id: 6,
    cover: `/assets/images/covers/cover_6.jpg`,
    title: '3개월차 헬린이 자세 평가 부탁드려요~',
    createdAt: '2024-08-14',
    view: 1501,
    comment: 270,
    share: 1,
    favorite: 1,
    author: {
      name: '테스터6',
      avatarUrl: `/assets/images/avatars/avatar_6.jpg`,
    },
  },
  {
    id: 7,
    cover: `/assets/images/covers/cover_7.jpg`,
    title: '안 쓰는 헬스장비 팝니다',
    createdAt: '2024-08-14',
    view: 109,
    comment: 12,
    share: 0,
    favorite: 3,
    author: {
      name: '테스터7',
      avatarUrl: `/assets/images/avatars/avatar_7.jpg`,
    },
  },
  {
    id: 8,
    cover: `/assets/images/covers/cover_8.jpg`,
    title: '3대 500 달성',
    createdAt: '2024-08-14',
    view: 2022,
    comment: 987,
    share: 1501,
    favorite: 1876,
    author: {
      name: '테스터8',
      avatarUrl: `/assets/images/avatars/avatar_8.jpg`,
    },
  },
];

// const POST_TITLES = [
//   // 'Whiteboard Templates By Industry Leaders',
//   // 'Tesla Cybertruck-inspired camper trailer for Tesla fans who can’t just wait for the truck!',
//   // 'Designify Agency Landing Page Design',
//   // '✨What is Done is Done ✨',
//   // 'Fresh Prince',
//   // 'Six Socks Studio',
//   // 'vincenzo de cotiis’ crossing over showcases a research on contamination',
//   // 'Simple, Great Looking Animations in Your Project | Video Tutorial',
//   // '40 Free Serif Fonts for Digital Designers',
//   // 'Examining the Evolution of the Typical Web Design Client',
//   // 'Katie Griffin loves making that homey art',
//   // 'The American Dream retold through mid-century railroad graphics',
//   // 'Illustration System Design',
//   // 'CarZio-Delivery Driver App SignIn/SignUp',
//   // 'How to create a client-serverless Jamstack app using Netlify, Gatsby and Fauna',
//   // 'Tylko Organise effortlessly -3D & Motion Design',
//   // 'RAYO ?? A expanded visual arts festival identity',
//   // 'Anthony Burrill and Wired mag’s Andrew Diprose discuss how they made January’s Change Everything cover',
//   // 'Inside the Mind of Samuel Day',
//   // 'Portfolio Review: Is This Portfolio Too Creative?',
//   // 'Akkers van Margraten',
//   // 'Gradient Ticket icon',
//   // 'Here’s a Dyson motorcycle concept that doesn’t ‘suck’!',
//   // 'How to Animate a SVG with border-image',
// ];

export const posts = POSTS;

// 원본
// export const posts = [...Array(23)].map((_, index) => ({
//   id: faker.string.uuid(),
//   cover: `/assets/images/covers/cover_${index + 1}.jpg`,
//   title: POST_TITLES[index + 1],
//   createdAt: faker.date.past(),
//   view: faker.number.int(99999),
//   comment: faker.number.int(99999),
//   share: faker.number.int(99999),
//   favorite: faker.number.int(99999),
//   author: {
//     name: faker.person.fullName(),
//     avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
//   },
// }));
