import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: '홈',
    path: '/',
    icon: icon('ic_blog'),
  },
  {
    title: '관리자',
    path: '/admin',
    icon: icon('ic_analytics'),
  },
  {
    title: '회원관리',
    path: '/user',
    icon: icon('ic_user'),
  },
  {
    title: '상품',
    path: '/products',
    icon: icon('ic_cart'),
  },
  {
    title: '로그인',
    path: '/login',
    icon: icon('ic_lock'),
  },
  {
    title: 'Not found',
    path: '/404',
    icon: icon('ic_disabled'),
  },
];

export default navConfig;
