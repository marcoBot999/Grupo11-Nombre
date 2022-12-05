import ContentRowTop from "./ContentRowTop";
import Footer from "./Footer";
import TableProducts from "./tableProducts/TableProducts";


function ContentWrapper() {
  return (
    <div id="content-wrapper" className="d-flex flex-column">
      {/* <!-- Main Content --> */}
      <div id="content">
        <ContentRowTop />
        <TableProducts />
      </div>
      {/* <!-- End of MainContent --> */}
      <Footer />
    </div>
  );
}

export default ContentWrapper;
