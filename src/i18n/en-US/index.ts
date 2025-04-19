export default {
  components: {},
  layouts: {
    drawers: {
      LeftMainDrawer: {
        navigations: { aurora: 'Aurora', home: 'Home', onebot: 'OneBot' },
      },
    },
    headers: {
      MainHeader: {
        labels: {
          toggleDarkMode: 'Toggle Dark Mode',
        },
      },
    },
  },
  pages: {
    HomePage: {
      labels: {
        connectToWifi: 'Connect to Wi-Fi',
        ssid: 'SSID',
        password: 'Password',
        connect: 'Connect',
      },
    },
  },
  common: {},
};
