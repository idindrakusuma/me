import { FaWordpress, FaComments, FaHeart, FaGrinAlt, FaFileAlt, FaIdCard } from 'react-icons/fa';

const ListMenuData = [
  {
    href: '/',
    name: 'Welcome',
    icon: FaHeart,
    dataTestId: {
      mobile: 'mLinkWelcome',
      desktop: 'dLinkWelcome',
    },
  },
  {
    href: '/about',
    name: 'About',
    icon: FaGrinAlt,
    dataTestId: {
      mobile: 'mLinkAbout',
      desktop: 'dLinkAbout',
    },
  },
  {
    href: '/resume',
    name: 'Resume',
    icon: FaFileAlt,
    dataTestId: {
      mobile: 'mLinkResume',
      desktop: 'dLinkResume',
    },
  },
  {
    href: '/works',
    name: 'Works',
    icon: FaIdCard,
    dataTestId: {
      mobile: 'mLinkWorks',
      desktop: 'dLinkWorks',
    },
  },
  {
    href: '/blog',
    name: 'Blog',
    icon: FaWordpress,
    dataTestId: {
      mobile: 'mLinkBlog',
      desktop: 'dLinkBlog',
    },
  },
  {
    href: '/contact',
    name: 'Contact',
    icon: FaComments,
    dataTestId: {
      mobile: 'mLinkContact',
      desktop: 'dLinkContact',
    },
  },
];

export default ListMenuData;
