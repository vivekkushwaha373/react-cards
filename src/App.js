import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Filter from "./components/Filter";
import Spinner from "./components/Spinner";
import { ToastContainer } from "react-toastify";
import { apiUrl, filterData } from "./data";
import { useEffect } from "react";
import { toast } from "react-toastify";

const App = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  async function fetchData() {
    setLoading(true);
    try {
      let response = await fetch(apiUrl);
      let output = await response.json();
      setCourses(output.data);
    }
    catch (err) {
      toast.error("Network me koi dikkat hai");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">
      <div>
        <Navbar></Navbar>
      </div>
        
      <div className="bg-bgDark2">

      <div>
          <Filter filterData={filterData} category={category}
            setCategory={setCategory}></Filter>
         
        </div>
      <div className="w-11/12 flex-wrap max-w-[1200px] mx-auto flex justify-center items-center min-h-[50vh]">
        {
          loading? <Spinner></Spinner> : <Cards courses={courses} category={category}></Cards>
        }
      </div>
        
      </div>
    </div>
  );

};

export default App;
