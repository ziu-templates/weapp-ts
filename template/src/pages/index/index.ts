import "./style";
import { PageBase } from "mipp";

export default class Index
  extends PageBase<IIndexData>
  implements IMippWePage.ILifetime {

  data: IIndexData = {
    welcomeStr: "Index Page",
  };

  onLoad(): void {
    console.log("onLoad: ", this);
  }
}

Page(new Index());
