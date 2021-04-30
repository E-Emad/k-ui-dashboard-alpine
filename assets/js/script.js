const setup = () => {
  return {
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
