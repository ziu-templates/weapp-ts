import "./style";
import { PageBase } from "mipp";

export default class Index
  extends PageBase<IIndexData>
  implements IMippWe.IPageLifetime {

  data: IIndexData = {
    welcomeStr: "Index Page",
  };

  onLoad(): void {
    console.log("onLoad: ", this);
  }
}

Page(new Index());
