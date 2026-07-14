import React from 'react'
import { useLocation, useSearchParams } from 'react-router'
import '../App.css'
function Products() {
    const [searchParams, setSearchParams] = useSearchParams()
    const category = searchParams.get("category")
    const location = useLocation()
    const post = location.state?.post || []
    
    
    const products = [
        // 📱 Phones
        {
            id: 1,
            title: "iPhone 15 Pro Max",
            category: "phone",
            price: "$1299",
        },
        {
            id: 2,
            title: "Samsung Galaxy S24 Ultra",
            category: "phone",
            price: "$1199",
        },
        {
            id: 3,
            title: "Google Pixel 9 Pro",
            category: "phone",
            price: "$999",
        },
        {
            id: 4,
            title: "Xiaomi 14 Ultra",
            category: "phone",
            price: "$899",
        },

        // 💻 Laptops
        {
            id: 5,
            title: "MacBook Pro M4",
            category: "laptop",
            price: "$2499",
        },
        {
            id: 6,
            title: "Dell XPS 15",
            category: "laptop",
            price: "$1899",
        },
        {
            id: 7,
            title: "Asus ROG Zephyrus G16",
            category: "laptop",
            price: "$2199",
        },
        {
            id: 8,
            title: "Lenovo Legion 7",
            category: "laptop",
            price: "$1999",
        },

        // ⌚ Watches
        {
            id: 9,
            title: "Apple Watch Series 10",
            category: "watch",
            price: "$499",
        },
        {
            id: 10,
            title: "Samsung Galaxy Watch Ultra",
            category: "watch",
            price: "$649",
        },
        {
            id: 11,
            title: "Garmin Fenix 8",
            category: "watch",
            price: "$899",
        },
        {
            id: 12,
            title: "Huawei Watch GT 5 Pro",
            category: "watch",
            price: "$399",
        },
    ];
    const filterPraduct = category ?
        products.filter((product) => product.category === category)
        : products

    return (
        <div className="products-page">
            {post.map((item)=>{
                return <h1 style={{fontSize:"24px",fontStyle:"italic",padding:"10px 10px",color:"#11226a"}}>{item.title}</h1>
            })}

            <div className="filter-buttons">
                <button onClick={() => setSearchParams({})}>All</button>

                <button onClick={() => setSearchParams({ category: "watch" })}>
                    Watch
                </button>

                <button onClick={() => setSearchParams({ category: "laptop" })}>
                    Laptop
                </button>

                <button onClick={() => setSearchParams({ category: "phone" })}>
                    Phone
                </button>
            </div>

            <div className="products-grid">
                {filterPraduct.map((item) => (
                    <div className="product-card" key={item.id}>

                        <div className="product-image">
                            📦
                        </div>

                        <h2 className="product-title">
                            {item.title}
                        </h2>

                        <span className="product-category">
                            {item.category}
                        </span>

                        <h3 className="product-price">
                            {item.price}
                        </h3>

                    </div>
                ))}
            </div>

        </div>
    )
}

export default Products