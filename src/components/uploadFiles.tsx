import React, { useState, useRef, useCallback } from 'react';
import axios from 'axios';

const FileUploadModal: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [category, setCategory] = useState<string>('Polytechnic'); // For dropdown value
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFiles = useCallback((fileList: FileList) => {
    const newFiles = Array.from(fileList);
    setFiles(prev => [...prev, ...newFiles]);
  }, []);

  const dropHandler = (e: React.DragEvent) => {
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
  };

  const dragOverHandler = (e: React.DragEvent) => e.preventDefault();
  const openFileDialog = () => fileInputRef.current?.click();

  const [categoryError, setCategoryError] = useState('');
const [fileError, setFileError] = useState('');
  // Upload handler


  const handleUpload = async () => {
    let hasError = false;
  
    if (!category) {
      setCategoryError('Please select a category.');
      hasError = true;
    } else {
      setCategoryError('');
    }
  
    if (files.length === 0) {
      setFileError('Please upload at least one file.');
      hasError = true;
    } else {
      setFileError('');
    }
  
    if (hasError) return;
  
    // Prepare form data for API
    const formData = new FormData();
    formData.append('category', category);
    files.forEach(file => formData.append('files', file));
  
    try {
      const response = await axios.post('/upload-endpoint', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      console.log('Upload successful:', response.data);
  
      // Clear after upload
      setFiles([]);
      setCategory('');
    } catch (error) {
      console.error('Upload error:', error);
    }
  };

  const handleCancel = () => {
    setFiles([]);
    setCategory('');
    setCategoryError('');
    setFileError('');
  };
  

  return (
    <div className="bg-gray-500 h-screen w-screen sm:px-8 md:px-16 sm:py-8">
      <main className="container mx-auto max-w-screen-lg h-full">
        <article
          aria-label="File Upload Modal"
          className="relative h-full flex flex-col bg-white shadow-xl rounded-md"
          onDrop={dropHandler}
          onDragOver={dragOverHandler}
        >
          {/* <div className="w-full h-full absolute top-0 left-0 pointer-events-none z-50 flex flex-col items-center justify-center rounded-md">
            <svg className="fill-current w-12 h-12 mb-3 text-blue-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M19.479 10.092c-.212-3.951-3.473-7.092-7.479-7.092-4.005 0-7.267 3.141-7.479 7.092-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.521-5.408zm-7.479-1.092l4 4h-3v4h-2v-4h-3l4-4z" />
            </svg>
            <p className="text-lg text-blue-700">Drop files to upload</p>
          </div> */}

          <section className="h-full overflow-auto p-8 w-full flex flex-col">
            <header className="border-dashed border-2 border-gray-400 py-12 flex flex-col justify-center items-center">
              <p className="mb-3 font-semibold text-gray-900 text-center">
                Drag and drop your files anywhere or
              </p>
              <input
                ref={fileInputRef}
                type="file"
                multiple
                className="hidden"
                onChange={(e) => e.target.files && handleFiles(e.target.files)}
              />
              <button
                className="mt-2 rounded-sm px-3 py-1 bg-gray-200 hover:bg-gray-300 focus:shadow-outline focus:outline-none"
                onClick={openFileDialog}
              >
                Upload a file
              </button>
            </header>
            {fileError && <p className="text-red-600 text-sm mt-2">{fileError}</p>}

            {/* Dropdown */}
            <div className="mt-4">
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                Select Category
              </label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="block w-1/3 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              >
                <option value="">-- Choose a category --</option>
                <option value="Polytechnic">Vishwabharti Polytechnic Institute</option>
                <option value="Management">School Of Management</option>
                <option value="Engineering">School Of Engineering</option>
              </select>
            </div>
            {categoryError && <p className="text-red-600 text-sm mt-1">{categoryError}</p>}

            <h1 className="pt-8 pb-3 font-semibold sm:text-lg text-gray-900">To Upload</h1>

            <ul className="flex flex-1 flex-wrap -m-1">
              {files.length === 0 ? (
                <li className="h-full w-full text-center flex flex-col items-center justify-center">
                  <img
                    className="mx-auto w-32"
                    src="https://user-images.githubusercontent.com/507615/54591670-ac0a0180-4a65-11e9-846c-e55ffce0fe7b.png"
                    alt="no data"
                  />
                  <span className="text-sm text-gray-500">No files selected</span>
                </li>
              ) : (
                files.map((file, index) => (
                  <li key={index} className="block p-1 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8 h-24">
                    <article className="group w-full h-full rounded-md focus:outline-none focus:shadow-outline relative bg-gray-100 cursor-pointer shadow-sm">
                      <section className="flex flex-col rounded-md text-xs break-words w-full h-full z-20 absolute top-0 py-2 px-3">
                        <h1 className="flex-1 group-hover:text-blue-800 truncate">{file.name}</h1>
                        <div className="flex items-center">
                          <p className="p-1 text-xs text-gray-700">{(file.size / 1024).toFixed(2)} KB</p>
                        </div>
                      </section>
                    </article>
                  </li>
                ))
              )}
            </ul>
          </section>

          <footer className="flex justify-end px-8 pb-8 pt-4">
            <button
              onClick={handleUpload}
              className="rounded-sm px-3 py-1 bg-blue-700 hover:bg-blue-500 text-white focus:shadow-outline focus:outline-none"
            >
              Upload now
            </button>
            <button
             onClick={handleCancel}
              className="ml-3 rounded-sm px-3 py-1 hover:bg-gray-300 focus:shadow-outline focus:outline-none"
            >
              Cancel
            </button>
          </footer>
        </article>
      </main>
    </div>
  );
};

export default FileUploadModal;
