import "./style";
import PageBase from "../../lib/Base/PageBase";

class Data {}

export default class Index
  extends PageBase<Data>
  implements Partial<WechatMiniprogram.Page.ILifetime> {

  data: Data = new Data();

  onLoad(): void {
    console.log("onLoad");
  }
}

Page(new Index());
