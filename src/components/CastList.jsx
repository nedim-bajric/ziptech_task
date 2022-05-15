import { useState, useEffect } from "react";

import { useParams } from "react-router";

import apiReqs from "../api/apiReqs";
import apiConfig from "../api/apiConfig";

const CastList = (props) => {
  const { category } = useParams();
  const [casts, setCasts] = useState([]);
  useEffect(() => {
    const getCredits = async () => {
      const res = await apiReqs.credits(category, props.id);
      setCasts(res.cast.slice(0, 5));
    };
    getCredits();
  }, [category, props.id]);
  return (
    <div className="grid gap-3 grid-cols-3 md:grid-cols-4  lg:grid-cols-6">
      {casts.map((item, key) => (
        <div key={key}>
          <div
            className="pt-40 bg-cover mb-2 "
            style={{
              backgroundImage: `url(${apiConfig.w500Image(item.profile_path)})`,
            }}
          />
          <p className="text-lg text-white">{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CastList;
