
function Images(props) {
  return (
    <div className="thumbnail">
      <a href="#"><img src= {props.src} alt= {props.alt} /> </a>
    </div>
  );
}
export default Images;