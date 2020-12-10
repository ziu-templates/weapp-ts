import "./style";
import { PageBase } from "mipp";

class Data {}

export default class Index
  extends PageBase<Data>
  implements IMippWe.IPageLifetime {

  data: Data;

  constructor() {
    this.setData(new Data());
  }

  onLoad(): void {
    console.log("onLoad: ", this);
  }
}

Page(new Index());
