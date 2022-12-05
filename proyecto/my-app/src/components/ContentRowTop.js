import ContentRowPanels from "./contentRowPanels/ContentRowPanels";
import CategoriesInDb from "./CategoriesInDb";
import LastUserInDb from "./LastUserInDb";


function ContentRowTop() {
  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard Unlimited Gaming</h1>
      </div>
      <ContentRowPanels />
      <div className="row">
        <LastUserInDb />
        <CategoriesInDb />
      </div>
    </div>
  );
}

export default ContentRowTop;
