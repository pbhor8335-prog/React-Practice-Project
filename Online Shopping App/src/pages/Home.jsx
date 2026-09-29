function Home() {
    return (
        <div>
            <style>
                {`
                    div {
                        text-align: center;
                        padding: 40px;
                    }

                    h1 {
                        color: blue;
                        margin-bottom: 15px;
                    }

                    p {
                        font-size: 18px;
                        border: 1px solid black;
                        padding: 15px;
                        width: 350px;
                        margin: auto;
                        border-radius: 8px;
                    }
                `}
            </style>

            <h1>Home Page</h1>

            <p>Find Your Favourite Product Here</p>
        </div>
    );
}

export default Home;