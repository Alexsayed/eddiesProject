import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { mutate } from "swr";
import { Products } from "../../models/products";

type Props = {
  editFormId: string;
  product: Products;
  // forNewProduct?: boolean;
};
// next up: create a route to display for each product

// The 2 args (editFormId, product ) is related to pages/[id]/edit. So we define the properties there and display them here.
const editProduct = ({ editFormId, product, }: Props) => {
  const router = useRouter();
  const contentType = "application/json";
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  // const [getProducts, setProduct] = useState<any>({});
  // const [getProducts, setProduct] = useState({});
  const { id } = router.query;
  // setting interface of Products schema.
  const [editForm, setForm] = useState({
    _id: product._id,
    productName: product.productName,
    price: product.price,
    productImg: product.productImg,
    category: product.category,
    brand: product.brand,
    gender: product.gender,
    kids: product.kids,
    color: product.color,
    size: product.size,
    author: product.author,
    inStock: product.inStock,
    created: product.created
  });
  // Setting Catrgory options
  const options = [
    { value: "Tees", },
    { value: "Tops", },
    { value: "Sweater", },
    { value: "Jeans", },
    { value: "Pants", },
    { value: "Jackets", },
    { value: "Shoes", },
    { value: "Accessories", },
    { value: "Underwear", },
  ];

  // Handle function. Sending data to api/products/[id].ts
  const putData = async (editForm: Products) => {
    try {
      // const res = await fetch(`/api/pets/${id}`, {
      const res = await fetch('http://localhost:3000/api/products/' + id, {
        method: "PUT",
        headers: {
          Accept: contentType,
          "Content-Type": contentType,
        },
        // assinging edit inputs to the body of the api/products/[id].ts file
        body: JSON.stringify(editForm),
        // body: JSON.stringify(value)
      });
      // Throw error with status code in case Fetch API req failed
      if (!res.ok) {
        throw new Error(res.status.toString());
      }
      router.push(window.location.href);
    } catch (error) {
      setMessage("Failed to update pet");
    }
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,) => {
    // const target = e.target;
    // const value = target.name === "poddy_trained"
    //   ? (target as HTMLInputElement).checked
    //   : target.value;
    // const name = target.name;
    // const inputElement = inputRef.current;
    // inputElement.value = e.target.value;
    // console.log('=======e.target', e.target.value)
    console.log('=======e.target', e.target.value)
    console.log('=======e.target.nanme', e.target.name)

    // const target = e.target;
    // // Below we are assigning values of the input elements. If the name of the targeted element is (inStock), then we are assigning value of the (inStock) to Boolean and other elements as String or Number.
    // const value = target.name === "inStock" ? (target as HTMLSelectElement).value : target.value;
    // const name = target.name;
    // setForm({ ...editForm, [name]: value });
    // Setting the data. input.name = input.value
    // setForm({ editForm: { [e.target.name]: e.target.value } });
    // // ====================================original ===========================================
    setForm({ ...editForm, [e.target.name]: e.target.value });
    // // ====================================original ===========================================

    // setSelectedValue(e.target.value);
    // setForm(prevState => {
    //   ...prevState,
    //   [e.target.name]: e.target.value,
    // });

  };
  const handleEditSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const errs = formValidate();

    // if (Object.keys(errs).length === 0) {
    //   forNewPet ? postData(form) : putData(form);
    // } else {
    //   setErrors({ errs });
    // }

    // if (forNewProduct === true) {
    // putData(id);
    // setForm({ ...editForm });    
    putData(editForm);
    // }
  };

  return (
    <>
      <div>
        <form id={editFormId} onSubmit={handleEditSubmit}>
          <label htmlFor="productName">Name</label>
          <input type="text" name="productName" defaultValue={product.productName} onChange={handleChange} />
          <label htmlFor="price">Price</label>
          <input type="number" name="price" defaultValue={product.price} onChange={handleChange} required />
          <label htmlFor="productImg">Product Image</label>
          <input type="text" name="productImg" defaultValue={product.productImg} onChange={handleChange} required />
          <label htmlFor="category">Category</label>
          <select name="category" className="border rounded-lg" defaultValue={product.category} onChange={handleChange} required  >
            {options.map((item) =>
              <option key={item.value} value={item.value}> {item.value}  </option>
            )}
          </select>
          <label htmlFor="brand">Brand</label>
          <input type="text" name="brand" defaultValue={product.brand} onChange={handleChange} required />
          <label htmlFor="gender">Gender</label>
          <select name="gender" className="border rounded-lg" defaultValue={product.gender} onChange={handleChange}   >
            <option value="" >choose one</option>
            <option value="Men" >Men</option>
            <option value="Women">Women</option>
          </select>
          <label htmlFor="kids">Kids</label>
          <select name="kids" className="border rounded-lg" defaultValue={product.kids} onChange={handleChange}   >
            <option value="" >choose one</option>
            <option value="Boys" >Boys</option>
            <option value="Girls">Girls</option>
          </select>
          <label htmlFor="color">Color</label>
          <input type="text" name="color" defaultValue={product.color} onChange={handleChange} />
          <label htmlFor="size">Size</label>
          <input type="text" name="size" defaultValue={product.size} onChange={handleChange} required />
          <label htmlFor="author">Author</label>
          <input type="text" name="author" defaultValue={product.author} onChange={handleChange} required />
          <label htmlFor="inStock">In Stock</label>
          <select name="inStock" className="border rounded-lg" defaultValue={String(product.inStock)} onChange={handleChange} required  >
            <option value="" >choose one</option>
            <option value="true" >True </option>
            <option value="false">False</option>
          </select>
          <button type="submit" className="btn"> Submit</button>
        </form>
      </div >
    </>
  )
};

export default editProduct;