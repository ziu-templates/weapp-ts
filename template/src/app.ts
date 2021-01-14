/**
 * 全局
 */
import { updateApp } from 'miniapp-utils';

class AppOption implements IMippWeApp.ILifetime {
  static getApp(opts?: IMippWeCommon.IGetAppOption): AppOption {
    return getApp<AppOption>(opts);
  }

  private globalData = {};

  onLaunch(opts: IMippWeApp.ILaunchOption): void {
    console.log("onLaunch: ", opts);
  }

  onShow(): void {
    updateApp();
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

export default AppOption;

App(new AppOption());
