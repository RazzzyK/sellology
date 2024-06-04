import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const GetStarted = () => {
  const [selectedMarketplace, setSelectedMarketplace] = useState('');
  const [showOtherField, setShowOtherField] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      phoneNo: '',
      marketplace: '',
      otherMarketplace: '',
      numberOfSKUs: '',
      targetACOS: '',
      targetROAS: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('Required'),
      lastName: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().required('Required'),
      phoneNo: Yup.string().required('Required'),
      numberOfSKUs: Yup.number().required('Required').positive().integer(),
      targetACOS: Yup.number().required('Required').min(0).max(100),
      targetROAS: Yup.number().required('Required').min(0).max(10).test(
        'is-decimal',
        'Must be a decimal value with up to 2 decimal places',
        (value) => (value + '').match(/^\d+(\.\d{1,2})?$/)
      ),
    }),
    onSubmit: values => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  const handleMarketplaceChange = (e) => {
    const value = e.target.value;
    setSelectedMarketplace(value);
    setShowOtherField(value === 'Other');
    formik.setFieldValue('marketplace', value);
  };

  return (
    <div className="container mx-auto p-6 bg-gray-50">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-700">Get Started</h1>
      <form onSubmit={formik.handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label htmlFor="firstName" className="block text-gray-700 font-semibold">First Name</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              className="mt-1 block w-full p-3 border border-gray-300 rounded shadow-sm"
              {...formik.getFieldProps('firstName')}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div className="text-red-500 mt-1 text-sm">{formik.errors.firstName}</div>
            ) : null}
          </div>
          <div>
            <label htmlFor="lastName" className="block text-gray-700 font-semibold">Last Name</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              className="mt-1 block w-full p-3 border border-gray-300 rounded shadow-sm"
              {...formik.getFieldProps('lastName')}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <div className="text-red-500 mt-1 text-sm">{formik.errors.lastName}</div>
            ) : null}
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              className="mt-1 block w-full p-3 border border-gray-300 rounded shadow-sm"
              {...formik.getFieldProps('email')}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 mt-1 text-sm">{formik.errors.email}</div>
            ) : null}
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700 font-semibold">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              className="mt-1 block w-full p-3 border border-gray-300 rounded shadow-sm"
              {...formik.getFieldProps('password')}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-500 mt-1 text-sm">{formik.errors.password}</div>
            ) : null}
          </div>
          <div>
            <label htmlFor="phoneNo" className="block text-gray-700 font-semibold">Phone No.</label>
            <input
              id="phoneNo"
              name="phoneNo"
              type="text"
              className="mt-1 block w-full p-3 border border-gray-300 rounded shadow-sm"
              {...formik.getFieldProps('phoneNo')}
            />
            {formik.touched.phoneNo && formik.errors.phoneNo ? (
              <div className="text-red-500 mt-1 text-sm">{formik.errors.phoneNo}</div>
            ) : null}
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <label htmlFor="marketplace" className="block text-gray-700 font-semibold">Marketplace</label>
            <select
              id="marketplace"
              name="marketplace"
              className="mt-1 block w-full p-3 border border-gray-300 rounded shadow-sm"
              value={selectedMarketplace}
              onChange={handleMarketplaceChange}
            >
              <option value="">Select a marketplace</option>
              <option value="Walmart">Walmart</option>
              <option value="Amazon">Amazon</option>
              <option value="Other">Other</option>
            </select>
            {formik.touched.marketplace && formik.errors.marketplace ? (
              <div className="text-red-500 mt-1 text-sm">{formik.errors.marketplace}</div>
            ) : null}
          </div>
          {showOtherField && (
            <div>
              <label htmlFor="otherMarketplace" className="block text-gray-700 font-semibold">Other Marketplace</label>
              <input
                id="otherMarketplace"
                name="otherMarketplace"
                type="text"
                className="mt-1 block w-full p-3 border border-gray-300 rounded shadow-sm"
                {...formik.getFieldProps('otherMarketplace')}
              />
              {formik.touched.otherMarketplace && formik.errors.otherMarketplace ? (
                <div className="text-red-500 mt-1 text-sm">{formik.errors.otherMarketplace}</div>
              ) : null}
            </div>
          )}
          <div>
            <label htmlFor="numberOfSKUs" className="block text-gray-700 font-semibold">Number of SKUs</label>
            <input
              id="numberOfSKUs"
              name="numberOfSKUs"
              type="number"
              className="mt-1 block w-full p-3 border border-gray-300 rounded shadow-sm"
              {...formik.getFieldProps('numberOfSKUs')}
            />
            {formik.touched.numberOfSKUs && formik.errors.numberOfSKUs ? (
              <div className="text-red-500 mt-1 text-sm">{formik.errors.numberOfSKUs}</div>
            ) : null}
          </div>
          <div>
            <label htmlFor="targetACOS" className="block text-gray-700 font-semibold">Target ACOS (%)</label>
            <input
              id="targetACOS"
              name="targetACOS"
              type="number"
              className="mt-1 block w-full p-3 border border-gray-300 rounded shadow-sm"
              {...formik.getFieldProps('targetACOS')}
            />
            {formik.touched.targetACOS && formik.errors.targetACOS ? (
              <div className="text-red-500 mt-1 text-sm">{formik.errors.targetACOS}</div>
            ) : null}
          </div>
          <div>
            <label htmlFor="targetROAS" className="block text-gray-700 font-semibold">Target ROAS</label>
            <input
              id="targetROAS"
              name="targetROAS"
              type="number"
              step="0.01"
              className="mt-1 block w-full p-3 border border-gray-300 rounded shadow-sm"
              {...formik.getFieldProps('targetROAS')}
            />
            {formik.touched.targetROAS && formik.errors.targetROAS ? (
              <div className="text-red-500 mt-1 text-sm">{formik.errors.targetROAS}</div>
            ) : null}
          </div>
          <div>
            <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded shadow hover:bg-blue-700 transition duration-200">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default GetStarted;
