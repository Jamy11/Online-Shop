import React, {useEffect} from 'react'
import * as Yup from 'yup'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import axios from "axios";


const AddProduct = () => {

    // check if he is eligiable to add product

    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/products`,{
            headers:{
                accessToken: localStorage.getItem("accessToken"),
            }
        }).then(res=>{

        })
    },[])



    /// form releated work
    const validationSchema = Yup.object().shape({
        name: Yup.string().min(4).max(20).required("You must input a Name!"),
        price: Yup.number().integer().required('Please Fill the form'),
        discount: Yup.number().integer().required('Please Fill the form'),
    });
    const initialValues = {
        name: '',
        price: '',
        discount: ''
    }
    const onSubmit = (data, onSubmitProps) => {
        console.log(data)


    }

    return (
        <Formik onSubmit={onSubmit} initialValues={initialValues} validationSchema={validationSchema}>
            <Form className="mt-24 p-12">
                <h1 className='text-center font-bold text-2xl'>Add Product</h1>

                <div className="mb-6">
                    <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Add Product Name
                    </label>
                    <Field type="text" id="name" name='name' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Product Name" />
                    <ErrorMessage style={{ color: 'red' }} name="name" component="span" />
                </div>
                <div className="mb-6">
                    <label for="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Add Price for 1 or Single item
                    </label>
                    <Field type="number" id="price" name='price' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Price" />
                    <ErrorMessage style={{ color: 'red' }} name="price" component="span" />
                </div>

                <div className="mb-6">
                    <label for="discount" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Discount
                    </label>
                    <Field type="number" id="discount" name='discount' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Discount" />
                    <ErrorMessage style={{ color: 'red' }} name="discount" component="span" />
                </div>
                <div className="mb-6">
                    <label for="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Image
                    </label>
                    <Field type="text" id="image" name='image' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Image" />
                    <ErrorMessage style={{ color: 'red' }} name="image" component="span" />
                </div>

                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </Form>
        </Formik>
    )
}

export default AddProduct