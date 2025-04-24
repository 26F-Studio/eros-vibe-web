export default {
  components: {
    ThemeButton: {
      labels: {
        switchTheme: 'Switch Theme',
      },
    },
  },
  layouts: {
    drawers: {
      LeftMainDrawer: {
        navigations: { home: 'Home' },
      },
    },
    headers: {
      MainHeader: {
        labels: {
          title: 'Eros Vibe',
        },
      },
    },
  },
  pages: {
    HomePage: {
      labels: {
        title: 'Eros Vibe',
        connectToWifi: 'Connect to Wi-Fi',
        ssid: 'SSID',
        password: 'Password',
        connect: 'Connect',
      },
    },
  },
};
