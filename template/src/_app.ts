export default {
  onLaunch(): void {
    console.log('onLaunch');
  },
  onShow(): void {
    console.log('onShow');
  },
  onError(msg: string): void {
    console.log(msg, ' -----> onError');
  },
  globalData: {
    initData: null,
  },
};
