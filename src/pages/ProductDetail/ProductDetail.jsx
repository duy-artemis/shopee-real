import React, { useEffect, useState } from 'react'
import { useLocation, useParams, Link } from 'react-router-dom'
import withHeaderFooter from '../../hoc/withHeaderFooter'
import productApi from '../../services/apis/product.api'
import he from 'he'

const ProductDetail = () => {
  const { id } = useParams()
  const location = useLocation()
  const product = location.state
  const [productDetail, setProductDetail] = useState(null);
  const [image, setImage] = useState();

  const loadProductDetail = async () => {
    const res = await productApi.getProductDetail(id)
    setProductDetail(res.data)
  }

  useEffect(() => {
    loadProductDetail()
  }, [])

  if (!product || !productDetail) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[300px]">
        <div className="text-xl font-bold text-red-500 mb-3">Không tìm thấy sản phẩm!</div>
        <Link to="/" className="text-pink-600 hover:underline">
          Quay về trang chủ
        </Link>
      </div>
    )
  }

  const { name, price, price_before_discount, images, description, sold, view } = productDetail

  return (
    <div className="container mx-auto max-w-5xl bg-white rounded-2xl shadow-lg p-6 my-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Ảnh chính + thumbnail */}
        <div className="w-full md:w-2/5">
          <div className="border rounded-xl overflow-hidden">
            <img src={image || images[0]} alt={name} className="object-contain w-full h-72 bg-gray-100" />
          </div>
          <div className="flex gap-2 mt-4 overflow-x-auto">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`thumb-${i}`}
                className={`w-20 h-20 object-cover rounded-lg border cursor-pointer transition ${
                  image === img ? 'border-pink-600' : 'border-gray-200'
                }`}
                onClick={()=>{
                  setImage(img);
                }}
              />
            ))}
          </div>
        </div>

        {/* Thông tin */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{name}</h1>

          <div className="text-xl text-gray-500 line-through mb-1">
            {price_before_discount?.toLocaleString()}₫
          </div>
          <div className="text-3xl font-extrabold text-pink-600 mb-2">
            {price?.toLocaleString()}₫
          </div>

          <div className="flex items-center gap-4 mb-4">
            <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
              Đã bán {sold}
            </span>
            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
              {view} lượt xem
            </span>
          </div>

          <div className="text-gray-700 leading-relaxed prose prose-sm max-w-none mb-6">
            <span className="font-semibold block mb-1 text-gray-800">Mô tả:</span>
            <div
              dangerouslySetInnerHTML={{
                __html: he.decode(description)
              }}
            />
          </div>

          <div className="flex gap-4">
            <button className="bg-pink-600 text-white font-semibold px-6 py-3 rounded-xl shadow hover:bg-pink-700 transition">
              Mua ngay
            </button>
            <button className="bg-white text-pink-600 border border-pink-500 font-semibold px-6 py-3 rounded-xl hover:bg-pink-50 transition">
              Thêm vào giỏ
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withHeaderFooter(ProductDetail)
