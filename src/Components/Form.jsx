import React from 'react'

function Form() {
  return (
    <div className="container mx-auto p-4">
    <h2 className="text-2xl mb-4">Form</h2>
    <form className="grid grid-cols-2 gap-4">
      <div className="flex items-center">
        <label htmlFor="input1" className="w-32">Input 1:</label>
        <input type="text" id="input1" name="input1" className="flex-grow border rounded p-2" />
      </div>
      <div className="flex items-center">
        <label htmlFor="input2" className="w-32">Input 2:</label>
        <input type="text" id="input2" name="input2" className="flex-grow border rounded p-2" />
      </div>
      {/* Repeat the above two lines for the remaining inputs */}
      {/* Input 3 to Input 14 */}
    </form>
  </div>
  )
}

export default Form