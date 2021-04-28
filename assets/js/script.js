const setup = () => {
  const sidebarLinks = [
    {
      title: 'Dashboards',
      isCurrent: true,
      subLinks: [
        {
          title: 'Default',
          isActive: true,
          link: '#',
        },
        {
          title: 'Project Mangment',
          isActive: false,
          link: '#',
        },
        {
          title: 'E-Commerce',
          isActive: false,
          link: '#',
        },
      ],
      svgPath:
        'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
    },
    {
      title: 'Pages',
      isCurrent: false,
      subLinks: [
        {
          title: 'Blank',
          isActive: false,
          link: '#',
        },
        {
          title: '404',
          isActive: false,
          link: '#',
        },
        {
          title: '505',
          isActive: false,
          link: '#',
        },
        {
          title: 'Profile',
          isActive: false,
          link: '#',
        },
        {
          title: 'Pricing',
          isActive: false,
          link: '#',
        },
        {
          title: 'Kanban',
          isActive: false,
          link: '#',
        },
      ],
      svgPath:
        'M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z',
    },
    {
      title: 'Authentication',
      isCurrent: false,
      subLinks: [
        {
          title: 'Sign in',
          isActive: false,
          link: '#',
        },
        {
          title: 'Sign up',
          isActive: false,
          link: '#',
        },
        {
          title: 'Forget Password',
          isActive: false,
          link: '#',
        },
        {
          title: 'Reset Password',
          isActive: false,
          link: '#',
        },
      ],
      svgPath:
        'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
    },
    {
      title: 'Components',
      isCurrent: false,
      subLinks: [
        {
          title: 'Alerts',
          isActive: false,
          link: '#',
        },
        {
          title: 'Buttons',
          isActive: false,
          link: '#',
        },
        {
          title: 'Cards',
          isActive: false,
          link: '#',
        },
        {
          title: 'Forms',
          isActive: false,
          link: '#',
        },
        {
          title: 'Modals',
          isActive: false,
          link: '#',
        },
      ],
      svgPath:
        'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z',
    },
  ]
  return {
    isSidebarOpen: window.innerWidth <= 1280 ? false : true,
    sidebarLinks: sidebarLinks,
    watchScreen() {
      if (window.innerWidth <= 1280) {
        this.isSidebarOpen = false
      }
      if (window.innerWidth >= 1280) {
        this.isSidebarOpen = true
      }
    },
    isSearchModalOpen: false,
  }
}
