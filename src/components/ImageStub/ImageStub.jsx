import imageStub from 'images/man-searching.jpg';
import css from './ImageStub.module.css';

const ImageStub = () => {
  return (
    <div className={css.imageStub}>
      <img src={imageStub} alt="searchImage" width={400} />
    </div>
  );
};

export default ImageStub;
    