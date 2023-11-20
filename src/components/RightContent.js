import React, { useState, useEffect ,useRef } from 'react';
import './RightContent.css'; 

const RightContent = () => {
  const [items, setItems] = useState([]);
  const [visible, setVisible] = useState(8);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);


  useEffect(() => {
    // Fetch data from the JSON file
    fetch('/data/items.json')
      .then(response => response.json())
      .then(data => setItems(data)); 
  }, []);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 1);
  };


  const rightSectionRef = useRef(null);
  const handleScroll = (event) => {
    // Check the deltaY property to determine the direction of the scroll
    const scrollDirection = event.deltaY > 0 ? 'down' : 'up';

    // Assuming you only want to load more when scrolling down
    if (scrollDirection === 'down') {
      const element = rightSectionRef.current;
      const isAtBottom = element.scrollTop + element.clientHeight === element.scrollHeight;

      if (isAtBottom) {
        showMoreItems();
      }
    }
  };

  useEffect(() => {
    // Add wheel event listener to the right-section div
    rightSectionRef.current.addEventListener('wheel', handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      rightSectionRef.current.removeEventListener('wheel', handleScroll);
    };
  }, []);





  const changeImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 3); // Assuming each item has 3 images
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      
      // Add the fade-out class to initiate the transition
      document.querySelectorAll('.item-image').forEach((image) => {
        image.classList.add('fade-out');
      });

      // After the transition duration, remove the fade-out class
      setTimeout(() => {
        document.querySelectorAll('.item-image').forEach((image) => {
          image.classList.remove('fade-out');
        });
      }, 200); 
      changeImage();
    }, 5000); // Change image every 5 seconds

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div id="right-section" className="right-content" ref={rightSectionRef}>
      <div className="row2">
      <select className="dropdown">
            <option>Please select</option>
        </select>
        <select className="dropdown">
            <option>Please select</option>
        </select>
        <select className="dropdown">
            <option>Please select</option>
        </select>
      </div>
      <div className="container">
        {items.slice(0, visible).map((item) => (
          <div className="card" key={item.id}>
             <div className="image-container">
              <img
                src={`/data/img/${item.images[currentImageIndex]}`}
                alt={`Item ${item.id} - ${currentImageIndex + 1}`}
                className="item-image"
              />
            </div>
            <div className="id">
              <span>{item.id}</span>
            </div>
            <p>{item.name}</p>
            <p>Price: ${item.price}  |  Qty: {item.qty} </p>

          </div>
        ))}
        
      </div>
      {visible < items.length && (
          <button onClick={showMoreItems} className="load-more-btn">
            Load More
          </button>
        )}
    </div>
  );
};

export default RightContent;
