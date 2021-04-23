import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';
import { projectFirestore } from '../firebase/config';

const ImageGrid = () => {
  const deleteBtnStyle = {
    position: 'absolute',
    top: '80%',
    left: '80%',
    color: 'white',
    borderRadius: '20%',
    backgroundColor: 'red',
  };
  const { docs } = useFirestore('images');
  return (
    <div className='img-grid'>
      {docs &&
        docs.map((doc) => (
          <>
            <motion.div
              className='img-wrap'
              key={doc.id}
              layout
              whileHover={{ opacity: 1 }}
            >
              <motion.img
                src={doc.url}
                alt='uploaded pic'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              />
              <button
                style={deleteBtnStyle}
                onClick={() =>
                  projectFirestore.collection('images').doc(doc.id).delete()
                }
              >
                delete
              </button>
            </motion.div>
          </>
        ))}
    </div>
  );
};

export default ImageGrid;
