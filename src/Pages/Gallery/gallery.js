// import React from "react";
// import { FaHeart } from "react-icons/fa";
// import "./gallery.css";

// const images = [
//   {
//     id: 1,
//     src: "https://source.unsplash.com/1600x900/?nature,water",
//     alt: "nature and water",
//   },
//   {
//     id: 2,
//     src: "https://source.unsplash.com/1600x900/?nature,forest",
//     alt: "nature and forest",
//   },
//   {
//     id: 3,
//     src: "https://source.unsplash.com/1600x900/?nature,mountains",
//     alt: "nature and mountains",
//   },
// ];

// function Gallery() {
//   return (
//     <div className="gallery">
//       {images.map((image) => (
//         <div className="gallery-item" key={image.id}>
//           <img src={image.src} alt={image.alt} />
//           <div className="gallery-overlay">
//             <FaHeart className="gallery-icon" />
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Gallery;

// import React from "react";
// import "./gallery.css";

// const images = [
//   {
//     src: "https://picsum.photos/id/1015/400/300",
//     alt: "Image 1",
//   },
//   {
//     src: "https://picsum.photos/id/1025/400/300",
//     alt: "Image 2",
//   },
//   {
//     src: "https://picsum.photos/id/1035/400/300",
//     alt: "Image 3",
//   },
//   {
//     src: "https://picsum.photos/id/1045/400/300",
//     alt: "Image 4",
//   },
//   {
//     src: "https://picsum.photos/id/1055/400/300",
//     alt: "Image 5",
//   },
//   {
//     src: "https://picsum.photos/id/1065/400/300",
//     alt: "Image 6",
//   },
// ];

// function GalleryPage() {
//   return (
//     <div className="gallery">
//       {images.map((image, index) => (
//         <div key={index} className="gallery-item">
//           <img src={image.src} alt={image.alt} />
//           <div className="gallery-overlay">
//             <i className="fas fa-heart gallery-icon"></i>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default GalleryPage;
import React from "react";
import "./gallery.css";
// import NavBar from "../../Components/NavBar/NavBar";
// import Footer from "../../Components/footer/foot";

const images = [
  {
    src: "https://picsum.photos/id/1015/400/300",
    alt: "Image 1",
  },
  {
    src: "https://picsum.photos/id/1025/400/300",
    alt: "Image 2",
  },
  {
    src: "https://picsum.photos/id/1035/400/300",
    alt: "Image 3",
  },
  {
    src: "https://picsum.photos/id/1045/400/300",
    alt: "Image 4",
  },
  {
    src: "https://picsum.photos/id/1055/400/300",
    alt: "Image 5",
  },
  {
    src: "https://picsum.photos/id/1065/400/300",
    alt: "Image 6",
  },
  {
    src: "https://picsum.photos/id/1075/400/300",
    alt: "Image 7",
  },
  {
    src: "https://picsum.photos/id/1085/400/300",
    alt: "Image 8",
  },
  {
    src: "https://picsum.photos/id/1095/400/300",
    alt: "Image 9",
  },
  {
    src: "https://picsum.photos/id/1105/400/300",
    alt: "Image 10",
  },
];

function Gallery() {
  return (
    <>
      <div className="main-heading">
        <h1>Gallery</h1>
      </div>
      <div className="gallery-page">
        <div className="gallery">
          {images.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image.src} alt={image.alt} />
              <div className="gallery-overlay">
                <i className="fas fa-heart gallery-icon"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Gallery;
