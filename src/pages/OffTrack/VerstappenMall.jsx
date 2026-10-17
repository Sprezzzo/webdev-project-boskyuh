import React, { useState } from 'react';
import { MALL_PRODUCTS } from '../../data/verstappenData';
import { ShoppingBag, Eye, X, Plus, Minus, Trash2, Check, Star, ShieldCheck } from 'lucide-react';

export default function VerstappenMall({
  cart = [],
  setCart,
  isCartOpen,
  setIsCartOpen
}) {
  const [selectedCategory, setSelectedCategory] = useState('All Items');
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  const categories = [
    'All Items',
    '1:2 Scale Helmets',
    '1:4 Scale Helmets',
    'Champion Apparel',
    'Red Bull Teamwear'
  ];

  const filteredProducts = selectedCategory === 'All Items'
    ? MALL_PRODUCTS
    : MALL_PRODUCTS.filter((p) => p.category === selectedCategory);

  // Add to cart helper
  const addToCart = (product) => {
    if (!setCart) return;
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  // Update quantity in cart
  const updateQuantity = (id, delta) => {
    if (!setCart) return;
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  // Remove from cart
  const removeFromCart = (id) => {
    if (!setCart) return;
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Calculate cart subtotal
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    setCheckoutSuccess(true);
    setTimeout(() => {
      setCheckoutSuccess(false);
      if (setCart) setCart([]);
      setIsCartOpen(false);
    }, 3500);
  };

  const renderProductArtwork = (product, isSecondary = false) => {
    const isHelmet = product.category.includes('Helmet');
    const isApparel = product.category === 'Champion Apparel';

    if (isHelmet) {
      if (!isSecondary) {
        // Primary 3/4 Front View of Helmet
        return (
          <svg className="w-28 h-28 filter drop-shadow-[0_0_15px_rgba(255,75,0,0.3)]" viewBox="0 0 100 100" fill="none">
            {/* Outer Helmet Shell */}
            <path
              d="M 22 55 C 20 25 75 12 88 42 C 92 55 90 75 80 82 C 70 90 38 90 28 82 C 22 76 22 68 22 55 Z"
              fill="#121621"
              stroke={product.accent}
              strokeWidth="2.5"
            />
            {/* Iridescent Visor */}
            <path
              d="M 38 52 C 55 48 78 50 85 58 C 82 68 62 70 44 68 Z"
              fill="#D4AF37"
              opacity="0.9"
            />
            {/* Visor Sun Strip */}
            <path d="M 38 52 C 55 48 78 50 85 54 L 84 57 C 62 52 44 54 38 55 Z" fill={product.accent} />
            {/* Livery Stripe */}
            <path d="M 26 38 Q 55 24 82 45" stroke={product.accent} strokeWidth="3" strokeLinecap="round" />
            {/* Lion Crown */}
            <circle cx="56" cy="30" r="4" fill={product.accent} />
            <path d="M 52 30 L 56 24 L 60 30" stroke="#FFFFFF" strokeWidth="1.5" />
          </svg>
        );
      } else {
        // Secondary 3/4 Rear View of Helmet with 4 Championship Stars
        return (
          <svg className="w-28 h-28 filter drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]" viewBox="0 0 100 100" fill="none">
            {/* Rear Dome Shell */}
            <path
              d="M 25 55 C 25 25 75 25 75 55 C 75 75 70 85 50 85 C 30 85 25 75 25 55 Z"
              fill="#090B10"
              stroke={product.accent}
              strokeWidth="2.5"
            />
            {/* Rear Spoiler Lip */}
            <rect x="30" y="44" width="40" height="7" rx="3" fill={product.accent} />
            {/* 4 Championship Stars on Spoiler */}
            <polygon points="36,47 37,49 39,49 37.5,50 38,52 36,51 34,52 34.5,50 33,49 35,49" fill="#D4AF37" />
            <polygon points="45,47 46,49 48,49 46.5,50 47,52 45,51 43,52 43.5,50 42,49 44,49" fill="#D4AF37" />
            <polygon points="55,47 56,49 58,49 56.5,50 57,52 55,51 53,52 53.5,50 52,49 54,49" fill="#D4AF37" />
            <polygon points="64,47 65,49 67,49 65.5,50 66,52 64,51 62,52 62.5,50 61,49 63,49" fill="#D4AF37" />
            {/* HANS Clips */}
            <circle cx="28" cy="68" r="3" fill="#E10600" />
            <circle cx="72" cy="68" r="3" fill="#E10600" />
            <text x="50" y="74" textAnchor="middle" fontSize="7" fill="#FFFFFF" fontWeight="900" fontFamily="Unbounded, sans-serif">VERSTAPPEN</text>
          </svg>
        );
      }
    }

    if (isApparel) {
      if (!isSecondary) {
        // Primary Front View: Hoodie / T-shirt with chest lion badge
        return (
          <svg className="w-28 h-28 filter drop-shadow-[0_0_15px_rgba(255,75,0,0.3)]" viewBox="0 0 100 100" fill="none">
            {/* Garment Silhouette */}
            <path d="M 32 20 L 42 26 L 58 26 L 68 20 L 86 35 L 76 46 L 72 42 L 72 82 L 28 82 L 28 42 L 24 46 L 14 35 Z" fill="#121621" stroke={product.accent} strokeWidth="2" />
            {/* Collar Trim */}
            <path d="M 42 26 C 42 32 58 32 58 26" stroke={product.accent} strokeWidth="2" fill="none" />
            {/* Chest Dutch Lion Crest */}
            <circle cx="50" cy="46" r="10" fill={`${product.accent}30`} stroke={product.accent} strokeWidth="1.5" />
            <text x="50" y="49" textAnchor="middle" fontSize="8" fill="#FFFFFF" fontWeight="900" fontFamily="Unbounded, sans-serif">MV1</text>
          </svg>
        );
      } else {
        // Secondary Back View: Championship Typography Print
        return (
          <svg className="w-28 h-28 filter drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]" viewBox="0 0 100 100" fill="none">
            {/* Garment Silhouette */}
            <path d="M 32 20 L 42 24 L 58 24 L 68 20 L 86 35 L 76 46 L 72 42 L 72 82 L 28 82 L 28 42 L 24 46 L 14 35 Z" fill="#090B10" stroke={product.accent} strokeWidth="2" />
            <text x="50" y="44" textAnchor="middle" fontSize="12" fill={product.accent} fontWeight="900" fontFamily="Unbounded, sans-serif">#1</text>
            <text x="50" y="56" textAnchor="middle" fontSize="7" fill="#FFFFFF" fontWeight="bold" fontFamily="monospace">4X WORLD</text>
            <text x="50" y="66" textAnchor="middle" fontSize="6" fill="#8E96AA" fontFamily="monospace">2021-2024</text>
          </svg>
        );
      }
    }

    // Default: Red Bull Teamwear (Cap / Jacket)
    if (!isSecondary) {
      return (
        <svg className="w-28 h-28 filter drop-shadow-[0_0_15px_rgba(255,75,0,0.3)]" viewBox="0 0 100 100" fill="none">
          {/* Cap Crown & Curved Brim */}
          <path d="M 25 55 C 25 35 68 35 75 55 Z" fill="#121621" stroke={product.accent} strokeWidth="2.5" />
          <path d="M 22 55 Q 60 52 88 64 L 75 70 Q 50 60 20 62 Z" fill={product.accent} stroke={product.accent} strokeWidth="1.5" />
          <circle cx="50" cy="35" r="3" fill={product.accent} />
          <text x="50" y="48" textAnchor="middle" fontSize="8" fill="#FFFFFF" fontWeight="900" fontFamily="Unbounded, sans-serif">1</text>
        </svg>
      );
    } else {
      return (
        <svg className="w-28 h-28 filter drop-shadow-[0_0_15px_rgba(225,6,0,0.3)]" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="32" stroke={product.accent} strokeWidth="2" strokeDasharray="3 3" />
          <text x="50" y="46" textAnchor="middle" fontSize="8" fill="#FFFFFF" fontWeight="bold">ORACLE</text>
          <text x="50" y="56" textAnchor="middle" fontSize="7" fill={product.accent} fontWeight="900">RED BULL</text>
          <text x="50" y="66" textAnchor="middle" fontSize="6" fill="#8E96AA">OFFICIAL SPEC</text>
        </svg>
      );
    }
  };

  return (
    <section id="mall" className="relative w-full py-28 px-4 sm:px-8 lg:px-12 bg-[#090B10] border-t border-white/10 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-grid-carbon opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col space-y-16">
        
        {/* Header & Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#121621] border border-white/10 mb-4">
              <ShoppingBag className="w-3.5 h-3.5 text-[#FF4B00]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#F8FAFC]">
                VERSTAPPEN MALL // OFFICIAL STORE
              </span>
            </div>
            <h2 className="font-display-mv font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
              AUTHENTIC COLLECTABLES & APPAREL
            </h2>
            <p className="font-mono text-xs sm:text-sm text-[#8E96AA] mt-2 uppercase tracking-wider">
              Official Schuberth 1:2 & 1:4 Scale Minis • 4x Champion Merchandise
            </p>
          </div>

          {/* Cart Status Trigger */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="self-start md:self-end px-5 py-2.5 rounded-full bg-[#121621] border border-[#FF4B00]/40 text-xs font-mono font-bold text-white flex items-center space-x-2 hover:border-[#FF4B00] transition-colors cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4 text-[#FF4B00]" />
            <span>OPEN CART ({cart.reduce((c, i) => c + i.quantity, 0)})</span>
          </button>
        </div>

        {/* Filter Tabs Bar */}
        <div className="flex items-center justify-start lg:justify-center overflow-x-auto pb-2 gap-3 no-scrollbar select-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`flex-shrink-0 px-5 py-2.5 rounded-full font-mono text-xs font-bold uppercase transition-all duration-300 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#FF4B00] text-[#090B10] shadow-glow-orange scale-105'
                  : 'bg-[#121621] text-[#8E96AA] border border-white/10 hover:border-white/20 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative rounded-3xl p-6 bg-[#121621] border border-white/10 hover:border-[#FF4B00]/60 transition-all duration-300 shadow-2xl flex flex-col justify-between overflow-hidden"
            >
              {/* Scale Tag & Stock Badge */}
              <div className="flex items-center justify-between mb-4">
                <span
                  className="font-mono text-[10px] font-black uppercase px-2.5 py-0.5 rounded"
                  style={{
                    color: product.accent,
                    backgroundColor: `${product.accent}20`,
                    border: `1px solid ${product.accent}40`
                  }}
                >
                  {product.scale}
                </span>
                <span className="font-mono text-[10px] text-white/70 bg-black/40 px-2 py-0.5 rounded border border-white/5">
                  {product.badge}
                </span>
              </div>

              {/* Product Media Box with Secondary-Angle Hover Swap */}
              <div className="relative w-full h-52 sm:h-56 rounded-2xl bg-[#090B10] border border-white/5 flex items-center justify-center overflow-hidden mb-5 group-hover:scale-[1.02] transition-transform duration-300">
                <div className="absolute inset-0 bg-grid-carbon opacity-30" />

                {/* Primary Angle Vector View */}
                <div className="relative z-10 transition-all duration-300 group-hover:opacity-0 group-hover:scale-95 flex flex-col items-center justify-center">
                  {renderProductArtwork(product, false)}
                  <span className="mt-2 font-mono text-[10px] text-[#8E96AA] uppercase tracking-wider">
                    PRIMARY VIEW // STUDIO SPEC
                  </span>
                </div>

                {/* Secondary Angle View (Revealed on Hover) */}
                <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-4 bg-black/85 backdrop-blur-sm">
                  <div className="text-center flex flex-col items-center">
                    {renderProductArtwork(product, true)}
                    <span className="mt-1 font-mono text-[11px] font-bold text-[#FF4B00] uppercase block">
                      SECONDARY 360° VIEW
                    </span>
                    <span className="mt-1 inline-block font-mono text-[9px] text-white/60 bg-white/10 px-2 py-0.5 rounded">
                      AUTHENTIC DETAILS
                    </span>
                  </div>
                </div>

                {/* Quick View Button on Image */}
                <button
                  onClick={() => setQuickViewProduct(product)}
                  className="absolute bottom-3 right-3 z-30 p-2 rounded-full bg-black/70 border border-white/20 text-white hover:text-[#FF4B00] hover:border-[#FF4B00] transition-colors cursor-pointer"
                  title="Quick View Specifications"
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>

              {/* Product Info */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-1 text-amber-400 mb-1">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span className="font-mono text-xs font-bold text-white">{product.rating}</span>
                    <span className="font-mono text-[10px] text-[#8E96AA]">({product.reviews})</span>
                  </div>

                  <h3 className="font-display-mv font-bold text-sm sm:text-base text-white uppercase tracking-tight line-clamp-2 group-hover:text-[#FF4B00] transition-colors">
                    {product.name}
                  </h3>
                </div>

                {/* Price & Add to Cart Action */}
                <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between">
                  <div className="font-display-mv font-black text-xl text-white">
                    {product.currency}{product.price.toFixed(2)}
                  </div>

                  <button
                    onClick={() => addToCart(product)}
                    className="px-4 py-2 rounded-full bg-[#FF4B00] text-[#090B10] font-display-mv font-black text-xs uppercase tracking-wider hover:scale-105 active:scale-95 transition-all shadow-glow-orange flex items-center space-x-1.5 cursor-pointer"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>ADD</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* QUICK VIEW MODAL / DRAWER */}
      {quickViewProduct && (
        <div className="fixed inset-0 z-[90] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6">
          <div className="relative w-full max-w-2xl rounded-3xl bg-[#121621] border border-white/15 p-6 sm:p-10 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            {/* Close Button */}
            <button
              onClick={() => setQuickViewProduct(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-black/40 border border-white/10 text-[#8E96AA] hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-start">
              {/* Product Visual Box */}
              <div className="rounded-2xl bg-[#090B10] border border-white/10 p-8 flex flex-col items-center justify-center min-h-[260px] relative">
                <div
                  className="w-36 h-36 rounded-full border border-white/10 flex items-center justify-center shadow-2xl mb-4"
                  style={{ background: `radial-gradient(circle, ${quickViewProduct.accent}40 0%, transparent 70%)` }}
                >
                  {renderProductArtwork(quickViewProduct, false)}
                </div>
                <span className="font-mono text-xs font-bold uppercase text-[#FF4B00]">
                  {quickViewProduct.scale}
                </span>
                <span className="font-mono text-[10px] text-[#8E96AA] mt-1">
                  OFFICIAL HOLOGRAPHIC CERTIFICATE
                </span>
              </div>

              {/* Details & Specs */}
              <div>
                <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-[#FF4B00]/20 text-[#FF4B00] border border-[#FF4B00]/40">
                  {quickViewProduct.badge}
                </span>
                <h3 className="font-display-mv font-black text-2xl text-white uppercase mt-2">
                  {quickViewProduct.name}
                </h3>
                <div className="font-display-mv font-black text-2xl text-white mt-3">
                  {quickViewProduct.currency}{quickViewProduct.price.toFixed(2)}
                </div>

                <p className="font-body text-xs text-[#8E96AA] mt-3 leading-relaxed">
                  {quickViewProduct.description}
                </p>

                {/* Features List */}
                <div className="mt-4 space-y-1.5 font-mono text-xs text-[#F8FAFC]">
                  {quickViewProduct.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <Check className="w-3.5 h-3.5 text-[#FF4B00]" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex items-center space-x-3">
                  <button
                    onClick={() => {
                      addToCart(quickViewProduct);
                      setQuickViewProduct(null);
                    }}
                    className="flex-1 py-3.5 rounded-full bg-[#FF4B00] text-[#090B10] font-display-mv font-black text-xs uppercase tracking-wider hover:scale-105 active:scale-95 transition-all shadow-glow-orange flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>ADD TO CART</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* INTERACTIVE CART DRAWER */}
      {isCartOpen && (
        <div className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex justify-end">
          <div className="w-full max-w-md h-full bg-[#090B10] border-l border-white/10 p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative animate-in slide-in-from-right duration-300">
            
            {/* Cart Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center space-x-2">
                <ShoppingBag className="w-5 h-5 text-[#FF4B00]" />
                <span className="font-display-mv font-black text-lg text-white uppercase">
                  VERSTAPPEN CART
                </span>
                <span className="font-mono text-xs text-[#8E96AA]">
                  ({cart.reduce((c, i) => c + i.quantity, 0)})
                </span>
              </div>

              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 rounded-full bg-[#121621] border border-white/10 text-[#8E96AA] hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto my-6 space-y-4 no-scrollbar">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-6 text-[#8E96AA]">
                  <ShoppingBag className="w-12 h-12 text-[#8E96AA]/40 mb-3" />
                  <span className="font-display-mv font-bold text-base text-white uppercase">
                    YOUR CART IS EMPTY
                  </span>
                  <p className="font-mono text-xs text-[#8E96AA] mt-1">
                    Select a 1:2 scale helmet or champion apparel to start.
                  </p>
                </div>
              ) : (
                cart.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 rounded-2xl bg-[#121621] border border-white/5 flex items-center justify-between gap-4"
                  >
                    <div className="flex-1">
                      <span className="font-mono text-[10px] text-[#FF4B00] font-bold uppercase">
                        {item.scale}
                      </span>
                      <h4 className="font-display-mv font-bold text-xs text-white uppercase line-clamp-1">
                        {item.name}
                      </h4>
                      <div className="font-mono text-xs font-black text-white mt-1">
                        €{item.price.toFixed(2)}
                      </div>
                    </div>

                    {/* Quantity Selector */}
                    <div className="flex items-center space-x-2 bg-[#090B10] px-2 py-1 rounded-full border border-white/10 font-mono text-xs">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="text-[#8E96AA] hover:text-white cursor-pointer"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-white font-bold">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="text-[#8E96AA] hover:text-white cursor-pointer"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-[#8E96AA] hover:text-red-500 transition-colors cursor-pointer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Cart Footer & Checkout */}
            {cart.length > 0 && (
              <div className="pt-4 border-t border-white/10 space-y-4">
                <div className="flex items-center justify-between font-mono text-xs text-[#8E96AA]">
                  <span>SHIPPING TO EU / GLOBAL:</span>
                  <span className="text-emerald-400 font-bold">CALCULATED AT CHECKOUT</span>
                </div>

                <div className="flex items-center justify-between font-display-mv font-black text-xl text-white">
                  <span>SUBTOTAL:</span>
                  <span className="text-[#FF4B00]">€{subtotal.toFixed(2)}</span>
                </div>

                <button
                  onClick={handleCheckout}
                  disabled={checkoutSuccess}
                  className="w-full py-4 rounded-full bg-[#FF4B00] text-[#090B10] font-display-mv font-black text-xs uppercase tracking-wider hover:scale-[1.02] active:scale-98 transition-all shadow-glow-orange flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>{checkoutSuccess ? 'ORDER CONFIRMED!' : 'PROCEED TO CHECKOUT'}</span>
                </button>

                {checkoutSuccess && (
                  <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-mono text-center font-bold animate-pulse">
                    ✓ DEMO TRANSACTION VERIFIED • ORANGE ARMY SECURED
                  </div>
                )}
              </div>
            )}

          </div>
        </div>
      )}

    </section>
  );
}
