function Cart() {
    return (
        <div>
            <style>
                {`
                    div {
                        text-align: center;
                    }

                    h2 {
                        color: green;
                    }

                    p {
                        display: inline-block;
                        border: 1px solid black;
                        padding: 15px 25px;
                        margin: 10px;
                        border-radius: 8px;
                    }
                `}
            </style>

            <h2>Your Cart</h2>

            <p>Laptop</p>
            <p>Mobile</p>
            <p>Total : 70000</p>
        </div>
    );
}

export default Cart;