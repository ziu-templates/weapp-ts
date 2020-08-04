const pageOpts = {
  data: {},
  onLoad(): void {
    console.log("onLoad");
  },
  onShow(): void {
    console.log("onShow");
  },
  onUnload(): void {
    console.log("onUnload");
  },
};

export default pageOpts;

Page(pageOpts);
