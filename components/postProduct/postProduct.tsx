import { useState } from "react";
import { useRouter } from "next/router";
import React, { useEffect, useRef } from "react";

import { mutate } from "swr";
// import Product, { Products } from "../../models/products";
import { Products } from "../../models/products";
// import Product from "../../models/products";
// // ******************************************************ORIGINAL ******************************************************             
// interface FormData {
//   productName: string;
//   price: string;
//   productImg: string;
//   author: string,
//   inStock: boolean;
//   created: Date;

// }
// type Props = {
//   formId: string;
//   productForm: FormData;
//   forNewProduct?: boolean;
// };
// const Form = ({ formId, productForm, forNewProduct = true }: Props) => {
//   const router = useRouter();
//   const contentType = "application/json";
//   const [errors, setErrors] = useState({});
//   const [message, setMessage] = useState("");
//   console.log('===========router', router)
//   // console.log('===========id', id)
//   // console.log('===========router.query', router.query)
//   const [newProductForm, setForm] = useState({
//     productName: productForm.productName,
//     price: productForm.price,
//     productImg: productForm.productImg,
//     author: productForm.author,
//     inStock: productForm.inStock,
//     created: productForm.created,
//   });

// /* The POST method adds a new entry in the mongodb database. */
// const postProduct = async (newProductForm: FormData) => {
//   try {
//     // **********************ORIGINAL *******************
//     const res = await fetch("/api/pets", {
//       method: "POST",
//       headers: {
//         Accept: contentType,
//         "Content-Type": contentType,
//       },
//       body: JSON.stringify(newProductForm),

//     });
//     // console.log('==== newProductForm', newProductForm)
//     console.log('==== res from postProduct', res)
//     // Throw error with status code in case Fetch API req failed
//     if (!res.ok) {
//       throw new Error(res.status.toString());
//     }

//     router.push("/");
//   } catch (error) {
//     setMessage("Failed to add pet");
//   }
// };
// const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,) => {
//   const target = e.target;
//   const value = target.name === "inStock"
//     ? (target as HTMLInputElement).checked
//     : target.value;
//   const name = target.name;

//   setForm({ ...newProductForm, [name]: value, });
// };
// const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//   e.preventDefault();
//   // const errs = formValidate();

//   // if (Object.keys(errs).length === 0) {
//   //   forNewPet ? postData(form) : putData(form);
//   // } else {
//   //   setErrors({ errs });
//   // }
//   console.log('======submit fired top ')
//   if (forNewProduct === true) {
//     console.log('======submit fired IF')
//     postProduct(newProductForm)
//   }
// };
// // ******************************************************ORIGINAL ****************************************************** 
// interface Products {
//   productName: string;
//   price: string;
//   productImg: string;
//   author: string,
//   inStock: boolean;
//   created: Date;

// }
type Props = {
  formId: string;
  product: Products;
  forNewProduct?: boolean;

};
// type Props = {
//   formId: string;
//   product: {};
//   forNewProduct?: boolean;

// };

const Form = ({ formId, product, forNewProduct = true }: Props) => {
  const router = useRouter();
  const contentType = "application/json";
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const menSizes = useRef<HTMLDivElement | null>(null);
  const womenSizes = useRef<HTMLDivElement | null>(null);



  // const [newProduct, setForm] = useState({
  //   productName: product.productName,
  //   price: product.price,
  //   productImg: product.productImg,
  //   author: product.author,
  //   inStock: product.inStock,
  //   created: product.created
  // });



  // const [newProductForm, setForm] = useState([]);

  // // ******************************************************ORIGINAL ******************************************************  
  // const [newProduct, setForm] = useState([]);
  // // ******************************************************ORIGINAL ******************************************************  

  const [newProduct, setForm] = useState<any>([]);
  const postProduct = async (newProduct: Products) => {
    // // ******************************************************ORIGINAL ******************************************************  
    // const postProduct = async (value1: any) => {
    // // ******************************************************ORIGINAL ******************************************************     
    try {
      // const res = await fetch("/api/pets", {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: {
          Accept: contentType,
          "Content-Type": contentType,
        },
        body: JSON.stringify(newProduct),
        // body: JSON.stringify(value1),

      });
      // Throw error with status code in case Fetch API req failed
      if (!res.ok) {
        throw new Error(res.status.toString());
      }
      router.push("/");

    } catch (error) {
      setMessage("Failed to add pet");
    };
  }


  // onChange event we are processing the data and setting it.
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,) => {
    // // ******************************************************ORIGINAL ******************************************************  
    // const target = e.target;
    // // Below we are assigning values of the input elements. If the name of the targeted element is (inStock), then we are assigning value of the (inStock) to Boolean and other elements as String or Number.
    // const value =
    //   target.name === "inStock" ? (target as HTMLInputElement).checked : target.value;
    // const name = target.name;
    // // Using the spread syntax (...) to set array of all values.
    // // setForm({ ...newProduct, [name]: value });
    // // // ******************************************************ORIGINAL ******************************************************  
    // setForm({ ...newProduct, [name]: value });
    console.log('=========e.target Men False', e.target.value)
    // next up add all sizes for men and women to HTML
    // // // ******************************************************ON HOLD ******************************************************  

    // if (e.target.value === 'Men') {
    //   console.log("myContainer.. false women", menSizes.current);

    //   if (menSizes.current) {
    //     menSizes.current.style.display = '';
    //     womenSizes.current!.style.display = 'none';
    //   }
    // } else {
    //   if (womenSizes.current) {
    //     womenSizes.current.style.display = '';
    //     menSizes.current!.style.display = 'none';
    //   }

    // }
    // // // ******************************************************ON HOLD ******************************************************  

    setForm({ ...newProduct, [e.target.name]: e.target.value });

  };
  // onSubmit we are send data to backend. 
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const errs = formValidate();

    // if (Object.keys(errs).length === 0) {
    //   forNewPet ? postData(form) : putData(form);
    // } else {
    //   setErrors({ errs });
    // }

    if (forNewProduct === true) {
      postProduct(newProduct);


    }
  };

  // }
  // }

  return (
    <>
      <form id={formId} onSubmit={handleSubmit}>
        <label htmlFor="productName">Name</label>
        <input type="text" maxLength={20} name="productName" onChange={handleChange} required />
        <label htmlFor="price">Price</label>
        <input type="number" name="price" onChange={handleChange} required />
        <label htmlFor="productImg">Product Image</label>
        <input type="text" name="productImg" onChange={handleChange} required />
        <label htmlFor="category">Category</label>
        <select name="category" className="border rounded-lg" onChange={handleChange} required  >
          <option value="" >choose one</option>
          <option value="Tees" >Trees</option>
          <option value="Sweaters">Sweaters</option>
          <option value="Tops">Tops</option>
          <option value="Jeans">Jeans</option>
          <option value="Pants">Pants</option>
          <option value="Jackets">Jackets</option>
          <option value="Shoes">Shoes</option>
          <option value="Accessories">Accessories</option>
          <option value="Underwear">Underwear</option>
        </select>
        <label htmlFor="brand">Brand</label>
        <input type="text" name="brand" onChange={handleChange} required />
        <label htmlFor="gender">Gender</label>
        <select name="gender" className="border rounded-lg" onChange={handleChange}   >
          <option value="" >choose one</option>
          <option value="Men" >Men</option>
          <option value="Women">Women</option>
        </select>
        <label htmlFor="kids">Kids</label>
        <select name="kids" className="border rounded-lg" onChange={handleChange}   >
          <option value="" >choose one</option>
          <option value="Boys" >Boys</option>
          <option value="Girls">Girls</option>
        </select>
        <label htmlFor="color">Color</label>
        <input type="text" name="color" onChange={handleChange} />
        {/* <label htmlFor="size">Size</label>
        <input type="text" name="size" onChange={handleChange} required /> */}
        {/* <fieldset>
          <legend>Select sizes:</legend>
          <div style={{ color: 'blue', fontSize: '20px', display: 'none' }} ref={menSizes}>
            <label htmlFor="size">Men Sizes</label>
            <input type="checkbox" name="size" onChange={handleChange} />
          </div>
          <div style={{ color: 'red', fontSize: '20px', display: 'none' }} ref={womenSizes}>
            <label htmlFor="size"> WomenSize</label>
            <input type="checkbox" name="size" onChange={handleChange} />
          </div>

        </fieldset> */}



        <label htmlFor="author">Author</label>
        <input type="text" name="author" onChange={handleChange} required />
        <label htmlFor="inStock">In Stock</label>
        <select name="inStock" className="border rounded-lg" onChange={handleChange} required  >
          <option value="" >choose one</option>
          <option value="true" >True </option>
          <option value="false">false</option>
        </select>
        {/* <label htmlFor="inStock">In Stock</label>
        <input type="checkbox" name="inStock" onChange={handleChange} required /> */}

        {/* <label htmlFor="productName">Name</label>
        <input type="text" maxLength={20} name="productName" value={newProductForm.productName} onChange={handleChange} required />

        <label htmlFor="price">Price</label>
        <input type="number" name="price" value={newProductForm.price} onChange={handleChange} />

        <label htmlFor="productImg">Product Image</label>
        <input type="text" name="productImg" value={newProductForm.productImg} onChange={handleChange} />

        <label htmlFor="author">Author</label>
        <input type="text" name="author" value={newProductForm.author} onChange={handleChange} />

        <label htmlFor="inStock">In Stock</label>
        <input type="checkbox" name="inStock" checked={newProductForm.inStock} onChange={handleChange} /> */}

        <button type="submit" className="btn"> Submit</button>
      </form>
    </>
  )

}

export default Form;