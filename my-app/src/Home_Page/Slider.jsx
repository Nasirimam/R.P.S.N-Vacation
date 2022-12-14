import ImageSlider from "./ImageSlider";
const Slider = () => {
  const slides = [
    { url: "https://cdn1.tripoto.com/media/filter/nxxl/img/1516992/Image/1670586625_img_0434.jpg", title: "beach" },
    { url: "https://cdn1.tripoto.com/media/filter/nxxl/img/2215463/Image/1669102212_1667974883_web1.jpeg", title: "boat" },
    { url: "https://cdn1.tripoto.com/media/filter/nxxl/img/2224454/Image/1670482094_homepage_recovered_op2.jpg", title: "forest" },
    
  ];
  const containerStyles = {
    marginTop:"150px",
    width: "80%",
    height: "350px",
    
  };
  return (
    <div>
      
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default Slider;