import LocalizedClientLink from "@modules/common/components/localized-client-link";
import PreviewPrice from "./price";
import ProductCardActions from "./ProductCardActions";
import { ProductPreviewType } from "types/global";

const ProductCard = ({
    productPreview,
    cheapestPrice,
    isFeatured,
}: {
    productPreview: ProductPreviewType;
    cheapestPrice: any;
    isFeatured?: boolean;
}) => {
    return (
        <div>
            <div className="w-72 bg-white shadow rounded" data-testid="product-wrapper">
                <div
                    className="h-64 w-full bg-gray-200 flex flex-col justify-between p-4 bg-cover bg-center"
                    style={{ backgroundImage: `url(${productPreview.thumbnail})` }}
                >
                    <div className="flex justify-between">
                        <input type="checkbox" />
                        <button className="text-white hover:text-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                            </svg>
                        </button>
                    </div>
                    <div>
                        <span className="uppercase text-xs bg-green-50 p-0.5 border-green-500 border rounded text-green-700 font-medium select-none">
                            available
                        </span>
                    </div>
                </div>
                <div className="p-4 flex flex-col items-center">
                    <LocalizedClientLink
                        href={`/products/${productPreview.handle}`}
                        className=""
                    >
                        <h1 className="text-gray-800 text-center mt-1" data-testid="product-title">
                            {productPreview.title}
                        </h1>
                    </LocalizedClientLink>
                    <p className="text-center text-gray-800 mt-1">
                        {cheapestPrice && <PreviewPrice price={cheapestPrice} />}
                    </p>
                    <ProductCardActions productPreview={productPreview} />
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
