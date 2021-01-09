import { FaWordpress, FaComments, FaHeart, FaFileAlt, FaIdCard } from 'react-icons/fa';

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
