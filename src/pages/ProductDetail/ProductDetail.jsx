import React from 'react'
import { useLocation, useParams, Link } from 'react-router-dom'
import withHeaderFooter from '../../hoc/withHeaderFooter';

const ProductDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const product = location.state;

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[300px]">
        <div className="text-xl font-bold text-red-500 mb-3">Không tìm thấy sản phẩm!</div>
        <Link to="/" className="text-pink-600 hover:underline">Quay về trang chủ</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-3xl bg-white rounded-2xl shadow-lg p-6 my-8">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Ảnh sản phẩm */}
        <div className="flex-shrink-0 flex items-center justify-center md:w-2/5 w-full">
          <img
            src={product.image}
            alt={product.name}
            className="rounded-xl object-contain w-full h-60 bg-gray-50 border"
          />
        </div>
        {/* Info */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900">{product.name}</h1>
            <div className="text-2xl md:text-3xl font-extrabold text-pink-600 mb-3">
              {product.price?.toLocaleString()}₫
            </div>
            <div className="mb-6">
              <span className="font-semibold text-gray-600">Mô tả:</span>
              <p className="text-gray-500 mt-1">
                {product.description || "Sản phẩm chính hãng, chất lượng đảm bảo, giao hàng toàn quốc, đổi trả miễn phí trong 7 ngày!"}
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="bg-pink-600 text-white font-semibold px-6 py-2 rounded-xl shadow hover:bg-pink-700 transition">
              Buy Now
            </button>
            <button className="bg-white text-pink-600 border border-pink-500 font-semibold px-6 py-2 rounded-xl hover:bg-pink-50 transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}



export default withHeaderFooter(ProductDetail);
