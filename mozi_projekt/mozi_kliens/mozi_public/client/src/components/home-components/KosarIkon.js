import React from "react";
import {motion} from "framer-motion";

function KosarIkon() {
  return (
    <div>
      <motion.svg
        whileHover={{ scale: 1.1 }}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.366 3.438L18.577 9H22V11H20.833L20.076 20.083C20.0552 20.3329 19.9413 20.5658 19.7568 20.7357C19.5723 20.9055 19.3308 20.9999 19.08 21H4.92C4.66925 20.9999 4.4277 20.9055 4.24322 20.7357C4.05875 20.5658 3.94481 20.3329 3.924 20.083L3.166 11H2V9H5.422L8.634 3.438L10.366 4.438L7.732 9H16.267L13.634 4.438L15.366 3.438ZM18.826 11H5.173L5.84 19H18.159L18.826 11ZM13 13V17H11V13H13ZM9 13V17H7V13H9ZM17 13V17H15V13H17Z"
          fill="white"
        />
        <circle cx="22" cy="2" r="2" fill="#FF4E4E" />
      </motion.svg>
    </div>
  );
}

export default KosarIkon;
