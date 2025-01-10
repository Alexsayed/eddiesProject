import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
// import React, { useEffect, useRef } from "react";
import ReactDOM from 'react-dom';

import { mutate } from "swr";
// import Product, { Products } from "../../models/products";
import { Products } from "../../models/products";
import size, { Sizes } from "../../models/sizes";
import { arrayBuffer } from "stream/consumers";
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
// sizeElements is to display html elements for each category sizes and to reduce the line of code in this file.
const sizeElements = (arg: string[]) => {
  return arg.map((elem, i) => {
    return (
      < div key={i} className="inline-block w-20 ">
        <label htmlFor={elem} className="inline-block">{elem}</label>
        <input type="checkbox" name={elem} className="inline-block w-10" />
      </div>
    )
  })
}
// Handle Post product.
const Form = ({ formId, product, forNewProduct = true, }: Props) => {
  const router = useRouter();
  const contentType = "application/json";
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const menSizes = useRef<HTMLDivElement>(null);
  const womenSizes = useRef<HTMLDivElement>(null);
  const categories = useRef<HTMLSelectElement>(null);
  const menCategories = ['Jackets', 'Jeans', 'Pants', 'Shoes', 'Sweaters', 'Tees'];
  const WomenCategories = ['Dresses', 'Jackets', 'Jeans', 'Pants', 'Shoes', 'Skirts', 'Sweaters', 'Tops',];
  const menShoeSizes = ['8', '9', '9/5', '10', '10/5', '11', '12'];
  const womenShoeSizes = ['6', '7', '8', '9', '10'];
  const menNumericSizes = ['28', '30', '32', '34', '36', '38']
  const womenNumericSizes = ['24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34',]
  // const menTeeSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  // We asign all Alpha size in one array and then use it based on (Switch Cases)
  const alphaSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  // Women and Men category states
  const [menCategoryItems, setMenItems] = useState<any>([]);
  const [womenCategoryItems, setWomenItems] = useState<any>([]);
  // Men and Women sizes state.
  const [sizeItemsForAll, setSizeItemsForAll] = useState<any>({
    // Men sizes states
    menJackets: [],
    menJeans: [],
    menPants: [],
    menShoes: [],
    menSweaters: [],
    menTees: [],
    // Women sizes states
    womenDresses: [],
    womenJackets: [],
    womenJeans: [],
    womenPants: [],
    womenShoes: [],
    womenSkirts: [],
    womenSweaters: [],
    womenTops: [],
  });

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
    let getValues = e.target.value;

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
    // console.log('=========e.target Men False', e.target.value)
    // console.log('=========menSizes.current', menSizes.current?.children[0].className)
    // console.log('=========categories.current ', categories.current?.children[1].className)



    // next up add all sizes for men and women to HTML
    // // // ******************************************************ON HOLD ******************************************************  
    // next up: continue finishing all cases for all sizes using(switch case) and maybe we should add(m or w) in front of all(menCategories or womenCategories)
    switch (e.target.name) {
      case 'gender':
        console.log('=========gender case ')

        switch (getValues) {
          case 'Men':
            console.log('=========Men case ')
            // Reset all sizes back to null
            setSizeItemsForAll([null]);
            // Reset women categories to null
            setWomenItems([null])
            setMenItems([...menCategoryItems, menCategories.map((elem, index) => <option key={index} value={`m${elem}`}>{elem}</option>)]);
            break;
          case 'Women':
            console.log('=========Women case ')
            // Reset all sizes back to null
            setSizeItemsForAll([null])
            // Reset men categories to null
            setMenItems([null]);
            setWomenItems([...womenCategoryItems, WomenCategories.map((elem, index) => <option key={index} value={`w${elem}`}>{elem}</option>)]);
            break;
        }
        break;
      case 'category':
        console.log('=========category case ')
        switch (getValues) {
          case 'mJackets':
            console.log('=========jacket case ');
            // Set men jacket sizes input elements 
            // ===============================original ==========================
            // setSizeItemsForAll({             

            // menJackets: alphaSizes.map((elem, i) => {
            //   return (
            //     < div key={i} className="inline-block w-20 ">
            //       <label htmlFor={elem} className="inline-block">{elem}</label>
            //       <input type="checkbox" name={elem} className="inline-block w-10" />
            //     </div>
            //   )
            // })
            // });
            // ===============================original ==========================
            setSizeItemsForAll({
              // sizeElements function is defined above. 
              menJackets: sizeElements(alphaSizes)
            });
            break;
          case 'mJeans':
            console.log('=========Jeans case ')
            // Set men jeans sizes input elements            
            setSizeItemsForAll({
              // sizeElements function is defined above. 
              menJeans: sizeElements(menNumericSizes)
            });

            break;
          case 'mPants':
            console.log('=========pants case ')
            // Set men pants sizes input elements                        
            setSizeItemsForAll({
              // sizeElements function is defined above. 
              menPants: sizeElements(menNumericSizes)
            });

            break;
          case "mShoes":
            console.log('=========shoes case ')
            // Set men shoes sizes input elements                        
            setSizeItemsForAll({
              // sizeElements function is defined above. 
              menShoes: sizeElements(menShoeSizes)
            });

            break;
          case 'mSweaters':
            console.log('=========mPants case ');
            // Set men sweaters sizes input elements                                    
            setSizeItemsForAll({
              // sizeElements function is defined above. 
              menSweaters: sizeElements(alphaSizes)
            });
            break;
          case 'mTees':
            console.log('=========tees case ')
            // Set men tees sizes input elements                                    
            setSizeItemsForAll({
              // sizeElements function is defined above.
              menTees: sizeElements(alphaSizes)
            });
            break;
          case 'wDresses':
            // Set women dress sizes input elements                                    
            setSizeItemsForAll({
              // sizeElements function is defined above.
              womenDresses: sizeElements(alphaSizes)
            });
            console.log('=========wDresses case ')
            break;
          case 'wJackets':
            // Set women jackets sizes input elements   
            setSizeItemsForAll({
              // sizeElements function is defined above.
              womenJackets: sizeElements(alphaSizes)
            });
            console.log('=========wJacket case ')

            break;
          case 'wJeans':
            // Set women jeans sizes input elements               
            setSizeItemsForAll({
              // sizeElements function is defined above.
              womenJeans: sizeElements(womenNumericSizes)
            });
            break;
          case 'wPants':
            // Set women pants sizes input elements               
            setSizeItemsForAll({
              // sizeElements function is defined above.
              womenPants: sizeElements(womenNumericSizes)
            });
            console.log('=========wPants case ')

            break;
          case 'wShoes':
            // Set women shoes sizes input elements               
            setSizeItemsForAll({
              // sizeElements function is defined above.
              womenShoes: sizeElements(womenShoeSizes)
            });
            console.log('=========wShoes case ')

            break;
          case 'wSkirts':
            // Set women skirt sizes input elements               
            setSizeItemsForAll({
              // sizeElements function is defined above.
              womenSkirts: sizeElements(alphaSizes)
            });
            console.log('=========wSkirts case ')

            break;
          case 'wSweaters':
            // Set women sweater sizes input elements               
            setSizeItemsForAll({
              // sizeElements function is defined above.
              womenSweaters: sizeElements(alphaSizes)
            });
            console.log('=========wSweaters case ')

            break;
          case 'wTops':
            // Set women top sizes input elements               
            setSizeItemsForAll({
              // sizeElements function is defined above.
              womenTops: sizeElements(alphaSizes)
            });
            console.log('=========wTops case ')
            break;
            next up: send an error message if user did not select any which will be the default case
          default:
            console.log('=========default case ')

            alert('default switch')
            break;
        }
        break;

    }


    // switch (getValues) {
    //   case 'Men':
    //     setWomenItems([null])
    //     setMenItems([...menCategoryItems, menCategories.map((elem, index) => <option key={index} value={elem}>{elem}</option>)]);

    //     break;

    //   case 'Women':
    //     setMenItems([null])
    //     setWomenItems([...womenCategoryItems, WomenCategories.map((elem, index) => <option key={index} value={elem}>{elem}</option>)]);
    //     break;
    // }

    // if (categories.current!.options[1] != undefined) {
    //   console.log('=========categories.current.choldren ', categories.current?.children[1])
    //   console.log('=========categories.current ', categories.current?.options[1])
    // }
    // // // ******************************************************ON HOLD ******************************************************  
    // if (e.target.value === 'Men') {
    //   setWomenItems([null])
    //   setMenItems([...menCategoryItems, menCategories.map((elem, index) => <option key={index} value={elem}>{elem}</option>)]);
    // } else {
    //   setMenItems([null])
    //   setWomenItems([...womenCategoryItems, WomenCategories.map((elem, index) => <option key={index} value={elem}>{elem}</option>)]);
    // }
    // if (e.target.value === 'shoes') {
    //   setMenShoe([...menShoeSizeItems, menShoeSizes.map((elem, index) => {
    //     return (
    //       < div key={index} className="inline-block w-20 ">
    //         <label htmlFor={elem} className="inline-block">{elem}</label>
    //         <input type="checkbox" name={elem} className="inline-block w-10" />
    //       </div>
    //     )
    //   })]);
    // }
    // // // ******************************************************ON HOLD ******************************************************  

    setForm({ ...newProduct, [e.target.name]: e.target.value });


    // // // ******************************************************ON HOLD ******************************************************  



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
        <label htmlFor="gender">Gender</label>
        <select name="gender" className="border rounded-lg" onChange={handleChange}   >
          <option value="" >choose one</option>
          <option value="Men" >Men</option>
          <option value="Women">Women</option>
        </select>

        <label htmlFor="category">Category</label>
        <select name="category" id="categoryID" ref={categories} className="border rounded-lg" onChange={handleChange} required  >

          <option value="" >choose one</option>
          {menCategoryItems}
          {womenCategoryItems}
          {/* <option className="dresses" value="dresses" style={{ display: 'none' }}>dresses</option>
          <option className="tees" value="tees" style={{ display: 'none' }}>Tees</option>
          <option className="sweaters" value="sweaters" style={{ display: 'none' }}>Sweaters</option>
          <option className="tops" value="tops" style={{ display: 'none' }}>Tops</option>
          <option className="jeans" value="jeans" style={{ display: 'none' }}>Jeans</option>
          <option className="pants" value="pants" style={{ display: 'none' }}>Pants</option>
          <option className="jackets" value="jackets" style={{ display: 'none' }}>Jackets</option>
          <option className="shoes" value="shoes" style={{ display: 'none' }}>Shoes</option>
          <option className="skirts" value="skirts" style={{ display: 'none' }} >skirts</option>
          <option className="accessories" value="accessories" style={{ display: 'none' }}>Accessories</option>
          <option className="underwear" value="underwear" style={{ display: 'none' }}>Underwear</option> */}
        </select>
        <label htmlFor="brand">Brand</label>
        <input type="text" name="brand" onChange={handleChange} required />

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
        {/* <div>{menShoeSizeItems}1</div>
        <div>{menTeeSizeItems}</div>
        <div>{menJacketSizeItems}</div>
        <div>{menSweaterSizeItems}</div>
        <div>{menPantsSizeItems}</div>
        <div>{menJeansSizeItems}</div>
        <div>{womenDressesSizeItems}</div>
        <div>{womenJacketSizeItems}</div>
        <div>{womenJeansSizeItems}</div>
        <div>{womenPantsSizeItems}</div>
        <div>{womenShoeSizeItems}</div>
        <div>{womenSkirtSizeItems}</div>
        <div>{womenSweaterSizeItems}</div>
        <div>{womenTopSizeItems}</div> */}
        <div>{sizeItemsForAll.womenDresses}</div>
        <div>{sizeItemsForAll.womenJackets}</div>
        <div>{sizeItemsForAll.womenJeans}</div>
        <div>{sizeItemsForAll.womenPants}</div>
        <div>{sizeItemsForAll.womenShoes}</div>
        <div>{sizeItemsForAll.womenSkirts}</div>
        <div>{sizeItemsForAll.womenSweaters}</div>
        <div>{sizeItemsForAll.womenTops}</div>

        <div>{sizeItemsForAll.menJackets}</div>
        <div>{sizeItemsForAll.menJeans}</div>
        <div>{sizeItemsForAll.menPants}</div>
        <div>{sizeItemsForAll.menShoes}</div>
        <div>{sizeItemsForAll.menSweaters}</div>
        <div>{sizeItemsForAll.menTees}</div>
        <div>{sizeItemsForAll.sizeElements}</div>



        <fieldset>
          <legend>Select sizes:</legend>

          <div ref={menSizes} style={{ color: 'blue', fontSize: '20px', display: 'none' }} >
            <div className="pantsOrJeans" style={{ color: 'blue', display: 'none' }}>Pants Or Jeans</div>
            <div className="shoes" style={{ color: 'blue', display: 'none' }}>Shoes</div>
            <div className="tees" style={{ color: 'blue', display: 'none' }}>Tees</div>
            <div className="jackets" style={{ color: 'blue', display: 'none' }}>Jackets</div>
            <div className="sweaters" style={{ color: 'blue', display: 'none' }}>Sweaters</div>

            <label htmlFor="size">Men Sizes</label>
            <input type="checkbox" name="size" onChange={handleChange} />
          </div>
          <div ref={womenSizes} style={{ color: 'red', fontSize: '20px', display: 'none' }} >
            <label htmlFor="size"> WomenSize</label>
            <input type="checkbox" name="size" onChange={handleChange} />
          </div>

        </fieldset>



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
