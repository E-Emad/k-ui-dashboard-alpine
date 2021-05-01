const setup = () => {
  const getTheme = () => {
    if (window.localStorage.getItem('dark')) {
      return JSON.parse(window.localStorage.getItem('dark'))
    }
    return !!window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  }

  const setTheme = (value) => {
    window.localStorage.setItem('dark', value)
  }
  return {
    isDark: getTheme(),
    toggleTheme() {
      this.isDark = !this.isDark
      setTheme(this.isDark)
    },
    isSidebarOpen: window.innerWidth <= 1280 ? false : true,
    sidebarLinks: sidebarCollapsableLinks(),
    currentCollapsableLink: sidebarCollapsableLinks().filter((link) => (link.isCurrent ? link : null))[0],
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
