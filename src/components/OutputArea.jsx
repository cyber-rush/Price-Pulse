const OutputArea = ({ products }) => {
    // Calculate total product price
    const total = products.reduce((acc, curr) => acc + parseFloat(curr.price), 0);

    return (
        <div className="text-2xl font-semibold">
            <div>Output Result:</div>
            <div className="text-xl mt-4">
                Sale Price
                <ul className="list-disc list-inside">
                    {products.map((product, index) => (
                        <li key={index}>
                            <span className="font-bold">{product.name}- </span>
                            <span>{product.price}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="text-xl mt-4">
                Total Price: {total.toFixed(2)} {/* Display total product price */}
            </div>
        </div>
    );
};

export default OutputArea;
