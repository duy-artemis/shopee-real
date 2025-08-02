import React from "react";

const Footer = () => (
  <footer className="bg-white border-t pt-12 pb-6 mt-12 text-[#222] text-sm">
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-5 gap-8">
      {/* CUSTOMER SERVICE */}
      <div>
        <div className="font-bold mb-4 text-base">CUSTOMER SERVICE</div>
        <ul className="space-y-2">
          <li><a href="#" className="hover:underline">Help Centre</a></li>
          <li><a href="#" className="hover:underline">Shopee Blog</a></li>
          <li><a href="#" className="hover:underline">Shopee Mall</a></li>
          <li><a href="#" className="hover:underline">How To Buy</a></li>
          <li><a href="#" className="hover:underline">How To Sell</a></li>
          <li><a href="#" className="hover:underline">Payment</a></li>
          <li><a href="#" className="hover:underline">Shopee Coins</a></li>
          <li><a href="#" className="hover:underline">Shipping</a></li>
          <li><a href="#" className="hover:underline">Return & Refund</a></li>
          <li><a href="#" className="hover:underline">Contact Us</a></li>
          <li><a href="#" className="hover:underline">Warranty Policy</a></li>
        </ul>
      </div>
      {/* ABOUT SHOPEE */}
      <div>
        <div className="font-bold mb-4 text-base">ABOUT SHOPEE</div>
        <ul className="space-y-2">
          <li><a href="#" className="hover:underline">About Us</a></li>
          <li><a href="#" className="hover:underline">Shopee Careers</a></li>
          <li><a href="#" className="hover:underline">Shopee Policies</a></li>
          <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          <li><a href="#" className="hover:underline">Shopee Mall</a></li>
          <li><a href="#" className="hover:underline">Seller Centre</a></li>
          <li><a href="#" className="hover:underline">Flash Deals</a></li>
          <li><a href="#" className="hover:underline">Shopee Ambassador Programme</a></li>
          <li><a href="#" className="hover:underline">Media Contact</a></li>
        </ul>
      </div>
      {/* PAYMENT + LOGISTICS */}
      <div className="md:col-span-1">
        <div className="font-bold mb-4 text-base">PAYMENT</div>
        <div className="grid grid-cols-3 gap-2 mb-5">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="w-9 h-6 object-contain bg-white rounded shadow" />
          <img src="https://cdn.sstatic.net/Img/mastercard.png" alt="Mastercard" className="w-9 h-6 object-contain bg-white rounded shadow" />
          <img src="https://cdn.sstatic.net/Img/discover.png" alt="Discover" className="w-9 h-6 object-contain bg-white rounded shadow" />
          {/* Thay bằng icon thật ở dự án, đây demo */}
        </div>
        <div className="font-bold mb-4 text-base mt-5">LOGISTICS</div>
        <div className="grid grid-cols-3 gap-2">
          <img src="https://theme.hstatic.net/200000722513/1000962353/14/carrier_4.png" alt="SPX" className="w-12 h-6 object-contain bg-white rounded shadow" />
          <img src="https://theme.hstatic.net/200000722513/1000962353/14/carrier_5.png" alt="Vietnam Post" className="w-12 h-6 object-contain bg-white rounded shadow" />
          <img src="https://theme.hstatic.net/200000722513/1000962353/14/carrier_3.png" alt="Viettel" className="w-12 h-6 object-contain bg-white rounded shadow" />
          {/* Thay link ảnh phù hợp */}
        </div>
      </div>
      {/* SOCIAL */}
      <div>
        <div className="font-bold mb-4 text-base">FOLLOW US</div>
        <ul className="space-y-2">
          <li><a href="#" className="flex items-center gap-2 hover:underline"><i className="fab fa-facebook-f" />Facebook</a></li>
          <li><a href="#" className="flex items-center gap-2 hover:underline"><i className="fab fa-instagram" />Instagram</a></li>
          <li><a href="#" className="flex items-center gap-2 hover:underline"><i className="fab fa-linkedin-in" />LinkedIn</a></li>
        </ul>
      </div>
      {/* APP DOWNLOAD */}
      <div>
        <div className="font-bold mb-4 text-base">SHOPEE APP DOWNLOAD</div>
        <div className="flex gap-2 items-center">
          <img src="https://chart.googleapis.com/chart?chs=90x90&cht=qr&chl=https://shopee.vn" alt="QR Download" className="w-20 h-20 bg-white rounded" />
          <div className="flex flex-col gap-2">
            <img src="https://cdn.iconscout.com/icon/free/png-256/apple-847-675472.png" alt="App Store" className="w-24 h-6 object-contain" />
            <img src="https://cdn.iconscout.com/icon/free/png-256/google-play-47-434167.png" alt="Google Play" className="w-24 h-6 object-contain" />
            <img src="https://cdn.iconscout.com/icon/free/png-256/huawei-appgallery-3628790-3029552.png" alt="AppGallery" className="w-24 h-6 object-contain" />
          </div>
        </div>
      </div>
    </div>
    {/* Bottom bar */}
    <div className="max-w-7xl mx-auto px-4 mt-8 flex flex-col md:flex-row items-center justify-between border-t pt-5 text-gray-400 text-xs">
      <div className="mb-2 md:mb-0">
        © 2025 Shopee. All Rights Reserved.
      </div>
      <div>
        Country & Region: Singapore | Indonesia | Thailand | Malaysia | Vietnam | Philippines | Brazil | México | Colombia | Chile | Taiwan
      </div>
    </div>
  </footer>
);

export default Footer;
