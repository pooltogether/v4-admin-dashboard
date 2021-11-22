// @ts-nocheck
import React, { useEffect, useState } from 'react';

import { useForm, useFieldArray } from 'react-hook-form';

export function FormCalculateDistribution() {
  const { control, register, handleSubmit } = useForm();
  const [result, setResult] = useState<any>('');
  const onSubmit = (data: any) => setResult(JSON.stringify(data));

  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormContext)
    name: 'network', // unique name for your Field Array
    // keyName: "id", default to "id", you can change the key name
  });

  const {
    fields: fieldsDistributions,
    append: appendDistributions,
    prepend: prependDistributions,
    remove: removeDistributions,
    swap: swapDistributions,
    move: moveDistributions,
    insert: insertDistributions,
  } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormContext)
    name: 'distributions', // unique name for your Field Array
    // keyName: "id", default to "id", you can change the key name
  });

  useEffect(() => {
    append({});
  }, [append]);

  return (
    <div>
      <div className="bg-white p-3 rounded-lg flex justify-between items-center">
        <div className="">
          <h3 className="font-strong text-xl">Calculate Draw Distribution Models</h3>
        </div>
        <div className="mt-2">
          <button
            className="bg-gray-100 p-3 text-gray-700 font-bold rounded-lg text-sm bg-rose-500 border-2"
            type="button"
            onClick={append}
          >
            Add Environment Model
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <input {...register("firstName")} placeholder="First name" />
        <input {...register("lastName")} placeholder="Last name" />
        <select {...register("category")}>
          <option value="">Select...</option>
          <option value="A">Category A</option>
          <option value="B">Category B</option>
        </select> */}

        {fields.map((field, index) => (
          <div className="bg-white p-4 my-3 block shadow-md">
            <div className="bg-gray-100 -mx-4 -mt-4 mb-3 p-4 border-gray-300 border-b-2 flex justify-between">
              {index == 0 ? (
                <h1 className="font-bold">Layer 1</h1>
              ) : (
                <h1 className="font-bold">Layer 2</h1>
              )}
              <span onClick={() => remove(index)} className="tag tag-red cursor-pointer">
                DELETE
              </span>
            </div>
            <div className="p-5">
              {/* Row One */}
              <div className="mt-3">
                <h3 className="font-bold border-b-2 pb-2 mb-5 text-lg">Basic Settings</h3>
              </div>
              <div className="grid grid-cols-3 gap-x-4">
                <div className="">
                  <label className="text-sm font-bold">Captured Interest</label>
                  <input
                    className="w-full border shadow-sm p-4 mb-2"
                    key={field.id} // important to include key with field's id
                    placeholder={'Captured Interrest'} // important to include key with field's id
                    {...register(`network.${index}.prize.value`)}
                  />
                </div>
                <div className="">
                  <label className="text-sm font-bold">Total Supply</label>
                  <input
                    className="w-full border shadow-sm p-4 mb-2"
                    key={field.id} // important to include key with field's id
                    placeholder={'Total Supply'} // important to include key with field's id
                    {...register(`network.${index}.supply.value`)}
                  />
                </div>
              </div>

              {/* Row Two */}
              <div className="mt-3">
                <h3 className="font-bold border-b-2 pb-2 mb-5 text-lg">Advanced Settings</h3>
              </div>
              {/* Bitrange Field */}
              <div className="grid grid-cols-3 gap-x-4">
                <div className="grid grid-cols-5">
                  <div className="bg-white border p-3 col-span-3">
                    <input
                      className="w-full b-0 p-1"
                      key={field.id} // important to include key with field's id
                      placeholder={'7'} // important to include key with field's id
                      {...register(`network.${index}.prize.value`)}
                    />
                  </div>
                  <div className="bg-gray-100 p-3 col-span-2 text-center rounded-r-md flex flex-col items-center justify-center">
                    <label className="text-sm font-bold">Bitrange</label>
                  </div>
                </div>

                <div className="grid grid-cols-5">
                  <div className="bg-white border p-3 col-span-3">
                    <input
                      className="w-full b-0 p-1"
                      key={field.id} // important to include key with field's id
                      placeholder={'7'} // important to include key with field's id
                      {...register(`network.${index}.prize.value`)}
                    />
                  </div>
                  <div className="bg-gray-100 p-3 col-span-2 text-center rounded-r-md flex flex-col items-center justify-center">
                    <label className="text-sm font-bold">Cardinality</label>
                  </div>
                </div>

                <div className="grid grid-cols-5">
                  <div className="bg-white border p-3 col-span-3">
                    <input
                      className="w-full b-0 p-1"
                      key={field.id} // important to include key with field's id
                      placeholder={'7'} // important to include key with field's id
                      {...register(`network.${index}.prize.value`)}
                    />
                  </div>
                  <div className="bg-gray-100 p-3 col-span-2 text-center rounded-r-md flex flex-col items-center justify-center">
                    <label className="text-sm font-bold">Max Picks</label>
                  </div>
                </div>

                {/* <div className="">
                  <label className="text-sm font-bold">Total Supply</label>
                  <input
                    className="w-full border shadow-sm p-4 mb-2"
                    key={field.id} // important to include key with field's id
                    placeholder={'Total Supply'} // important to include key with field's id
                    {...register(`network.${index}.supply.value`)}
                  />
                </div> */}
              </div>
              <h3 className="font-bold border-b-2 pb-2 mb-5 text-lg mt-8">Prize Distributions</h3>

              <div className="grid grid-cols-3 gap-x-10">
                {fieldsDistributions.map((field, dIndex) => (
                  <div className="bg-gray-100 rounded-lg p-4 my-3 block shadow-sm grid grid-cols-1">
                    <div className="">
                      <input
                        className="w-full border shadow-sm p-4"
                        key={field.id} // important to include key with field's id
                        placeholder={'Percentage'} // important to include key with field's id
                        {...register(`distributions.${index}.${dIndex}.value`)}
                      />
                    </div>
                  </div>
                ))}

                <div
                  onClick={prependDistributions}
                  className="border-2 border-dashed cursor-pointer rounded-xl py-5 flex items-center justify-center my-3 hover:shadow-md"
                >
                  <span className="">Add Prize Tier</span>
                </div>
              </div>
            </div>
          </div>
        ))}

        <p>{result}</p>
        <button className="w-full bg-green-500 p-3 text-white font-bold rounded-lg" type="submit">
          Calculate Distribution
        </button>
      </form>
    </div>
  );
}

export default FormCalculateDistribution;
