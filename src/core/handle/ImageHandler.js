import React from "react";

const ImageHandler = ({product}) => {    
        const imageurl = product
            ? product.image
            :`https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fe%2Fe4%2FLatte_and_dark_coffee.jpg&tbnid=cHhAmJrw8EtbWM&vet=12ahUKEwjg4tS67IX_AhUhokwKHRDQC9YQMygAegUIARDkAQ..i&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FCoffee&docid=U6oJMnF-eeVTAM&w=3200&h=2000&itg=1&q=coffee&hl=en&ved=2ahUKEwjg4tS67IX_AhUhokwKHRDQC9YQMygAegUIARDkAQ`;
        return (
        <div className="rounded p-2">
            <img
                src={imageurl}
                // style={{ maxHeight: "100%", maxWidth: "100%" }}
                // className="mb-3 rounded"
                alt="product image"
                className="w-100 h-50"
                // width={100}
                // height={100}
            />
        </div>
        );
    };


export default ImageHandler;
