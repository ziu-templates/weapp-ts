import "./style";

class Data {
}

export default class Index
  extends PageBase<Data>
  implements Partial<WechatMiniprogram.Page.ILifetime> {

  data: Data = new Data();

  onLoad(): void {
    console.log("onLoad");
  }
}

const indexOptions = new Index();

Page(indexOptions);

export default indexOptions;
