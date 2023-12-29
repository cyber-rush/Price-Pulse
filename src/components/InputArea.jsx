import InputField from "./InputField";
import { useState } from "react";

const InputArea = ({ addProduct }) => {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productNameError, setProductNameError] = useState('');
    const [productPriceError, setProductPriceError] = useState('');

    const handleSubmit = () => {
        let hasError = false;

        if (productName.trim() === '') {
            setProductNameError('Please enter a product name.');
            hasError = true;
        } else {
            setProductNameError('');
        }

        if (productPrice.trim() === '' || isNaN(productPrice)) {
            setProductPriceError('Please enter a valid product price.');
            hasError = true;
        } else {
            setProductPriceError('');
        }

        if (!hasError) {
            addProduct(productName, productPrice);
            setProductName('');
            setProductPrice('');
        }
    };

    return (
        <div>
            <InputField
                labelName="Product Name *"
                placeholderName="Enter your product name"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
            />
            {productNameError && (
                <div className="text-red-500 mt-2">
                    {productNameError}
                </div>
            )}

            <InputField
                labelName="Product Price *"
                placeholderName="Enter your product price"
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
            />
            {productPriceError && (
                <div className="text-red-500 mt-2">
                    {productPriceError}
                </div>
            )}

            <div className="py-6">
                <button
                    className="text-white font-semibold p-2 px-4 border rounded-lg bg-blue-600 w-full md:w-auto"
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </div>
        </div>
    );
};

export default InputArea;
