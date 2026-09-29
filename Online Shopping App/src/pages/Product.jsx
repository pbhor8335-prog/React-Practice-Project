function Product() {

    return (
        <div>
            <style>
                {`
                    div {
                        text-align: center;
                    }

                    h2 {
                        color: blue;
                    }

                    p {
                        display: inline-block;
                        border: 1px solid black;
                        padding: 20px;
                        margin: 10px;
                        border-radius: 8px;
                    }
                `}
            </style>

            <h2>Our Products</h2>

            <p>Laptop</p>
            <p>Mobile</p>
            <p>TV</p>
        </div>
    );
}

export default Product;