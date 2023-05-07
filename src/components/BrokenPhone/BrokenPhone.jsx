import axios from "axios";
import React, { useEffect, useState } from "react";
import { Bar, BarChart } from "recharts";

const BrokenPhone = () => {
  const [phones, setPhones] = useState([]);
  useEffect(() => {
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        const loadData = data.data.data;
        const phoneData = loadData.map(phone => {
            const parts = phone.slug.split('-')[1];
            const price = parseInt(parts[1]);
            const singlePhone = {
                name: phone.phone_name,
                price : price,

            }
            return singlePhone;
        })
        // console.log(phoneData);
        setPhones(phoneData);
      });
  }, []);
  return <div>
    <BarChart width={800} height={500} data={phones}>
          <Bar dataKey="price" fill="#8884d8" />
        </BarChart>
  </div>;
};

export default BrokenPhone;
