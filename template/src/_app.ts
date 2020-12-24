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
class AppOption implements IMippWeApp.ILifetime {
  static getApp(opts?: IMippWeCommon.IGetAppOption): AppOption {
    return getApp<AppOption>(opts);
  }

  private globalData = {};

  onLaunch(opts: IMippWeApp.ILaunchOption): void {
    console.log("onLaunch: ", opts);
  }

  onError(msg: string): void {
    console.log("onError: ", msg);
  }

  onUnhandledRejection(msg: IMippWeApp.IOnUnhandledRejectionCallbackResult): void {
    console.log("onUnhandledRejection: ", msg);
  }

  onPageNotFound(opts: IMippWeApp.IPageNotFoundOption): void {
    console.log("onPageNotFound: ", opts);
  }
}

export const app = new AppOption();

export default AppOption;
