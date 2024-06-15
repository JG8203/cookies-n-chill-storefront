import { Suspense } from "react";
import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid";
import RefinementList from "@modules/store/components/refinement-list";
import { SortOptions } from "@modules/store/components/refinement-list/sort-products";
import PaginatedProducts from "./paginated-products";

function StoreTemplate(props: { sortBy?: SortOptions; page?: string; countryCode: string }) {
  const { sortBy, page, countryCode } = props;
  const pageNumber = page ? parseInt(page) : 1;

  return (
    <div className="flex flex-col small:flex-row small:items-start py-6 content-container" data-testid="category-container">
      <RefinementList sortBy={sortBy || "created_at"} />
      <div className="w-full">
        <div className="flex flex-col items-center justify-center text-6xl text-black font-raleway font-bold hover:text-ui-fg-base" style={{marginBottom : "30px"}}>
          <h1 data-testid="store-page-title" className="text-center">SHOP</h1>
          <div className="hover:text-ui-fg-base flex items-center font-neuton font-light text-2xl text-center mt-2">
            Cookies N' Chill
          </div>
        </div>
        <Suspense fallback={<SkeletonProductGrid />}>
          <PaginatedProducts
            sortBy={sortBy || "created_at"}
            page={pageNumber}
            countryCode={countryCode}
          />
        </Suspense>
      </div>
    </div>
  );
}

export default StoreTemplate;
